const Queue = require("../models/Queue");
const getQueue = async (req, res) => {
  try {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const search = req.query.search || "";
    const status = req.query.status;
    const service = req.query.service;
    const sort = req.query.sort || "asc";

    let query = {};

    // Search by customer name/email/service
    if (search) {
      query.$or = [
        {
          customerName: {
            $regex: search,
            $options: "i",
          },
        },
        {
          customerEmail: {
            $regex: search,
            $options: "i",
          },
        },
        {
          serviceName: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    // Filter by status
    if (status) {
      query.status = status;
    }

    // Filter by service
    if (service) {
      query.serviceName = service;
    }

    const total = await Queue.countDocuments(query);

    const queue = await Queue.find(query)
      .sort({
        tokenNumber: sort === "desc" ? -1 : 1,
      })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      page,
      totalPages: Math.ceil(total / limit),
      totalRecords: total,
      count: queue.length,
      data: queue,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const joinQueue = async(req,res)=>{

try{


const {
customerName,
customerEmail,
serviceName
}=req.body;



if(!customerName || !customerEmail || !serviceName){

return res.status(400).json({

success:false,

message:"All fields are required"

});

}



const lastToken=await Queue.findOne()
.sort({
tokenNumber:-1
});



const tokenNumber=
lastToken?
lastToken.tokenNumber+1
:
1;



const queue = await Queue.create({

    user:req.user._id,

    customerName,
    customerEmail,
    serviceName,

    tokenNumber,

    status:"Waiting"

});


res.status(201).json(queue);



}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}

};

const updateQueueStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    console.log("ID received:", id);

    const queue = await Queue.findById(id);

    console.log("Queue found:", queue);

    if (!queue) {
      return res.status(404).json({
        message: "Queue entry not found",
      });
    }

    queue.status = status;
    await queue.save();

    res.json(queue);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

const getQueueByToken = async (req, res) => {
    try {
        const queue = await Queue.findOne({
            tokenNumber: req.params.token,});
            if (!queue) {
                return res.status(404).json({ 
                  message: "Token not found"
        });
            }
            res.json(queue);
        } catch (error) {
            res.status(500).json({
                message: error.message, 
            });
        }
    };
const getDashboardStats = async (req, res) => {
  try {
    const waiting = await Queue.countDocuments({
      status: "Waiting",
    });

    const serving = await Queue.countDocuments({
      status: "Serving",
    });

    const completed = await Queue.countDocuments({
      status: "Completed",
    });

    const cancelled = await Queue.countDocuments({
      status: "Cancelled",
    });

    const total = await Queue.countDocuments();

    res.json({
      total,
      waiting,
      serving,
      completed,
      cancelled,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const deleteQueue = async (req, res) => {
  try {
    const queue = await Queue.findById(req.params.id);

    if (!queue) {
      return res.status(404).json({
        message: "Queue entry not found",
      });
    }

    await Queue.findByIdAndDelete(req.params.id);

    res.json({
      message: "Queue entry deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getQueuePosition = async (req, res) => {
  try {
    const { id } = req.params;
    const queue = await Queue.findById(req.params.id);

    if (!queue) {
      return res.status(404).json({
        success: false,
        message: "Queue entry not found",
      });
    }
     // Get all waiting customers in token order
    const waitingQueues = await Queue.find({
      status: "Waiting",
    }).sort({ tokenNumber: 1 });

    // Find customer's position
    const position = waitingQueues.findIndex(
      (q) => q._id.toString() === id
    );

    if (position === -1) {
      return res.status(404).json({
        success: false,
        message: "Customer is not in the waiting queue.",
      });
    }

    // Calculate waiting time
    let estimatedWaitTime = 0;

    for (let i = 0; i < position; i++) {
      estimatedWaitTime += 5;
    }

    return res.status(200).json({
      success: true,
      tokenNumber: queue.tokenNumber,
      peopleAhead: position,
      estimatedWaitTime,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const serveNextCustomer = async (req, res) => {
  try {
    // Complete the current serving customer
    const currentCustomer = await Queue.findOne({
      status: "Serving",
    });

    if (currentCustomer) {
      currentCustomer.status = "Completed";
      await currentCustomer.save();
    }

    // Get the next waiting customer
    const nextCustomer = await Queue.findOne({
      status: "Waiting",
    }).sort({ tokenNumber: 1 });

    if (!nextCustomer) {
      return res.status(200).json({
        success: true,
        message: "No customers waiting in the queue.",
      });
    }

    nextCustomer.status = "Serving";
    await nextCustomer.save();

    res.status(200).json({
      success: true,
      message: "Next customer is now being served.",
      customer: nextCustomer,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const skipCustomer = async (req, res) => {
    try {

        const currentCustomer = await Queue.findOne({
            status: "Serving",
        });

        if (!currentCustomer) {
            return res.status(404).json({
                success: false,
                message: "No serving customer found.",
            });
        }

        currentCustomer.status = "Skipped";
        await currentCustomer.save();

        const nextCustomer = await Queue.findOne({
            status: "Waiting",
        }).sort({
            tokenNumber: 1,
        });

        if (nextCustomer) {
            nextCustomer.status = "Serving";
            await nextCustomer.save();
        }

        res.status(200).json({
            success: true,
            message: "Customer skipped successfully.",
            skippedCustomer: currentCustomer,
            nextCustomer,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

const recallCustomer = async (req, res) => {
    try {

        const customer = await Queue.findById(req.params.id);

        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found.",
            });
        }

        if (customer.status !== "Skipped") {
            return res.status(400).json({
                success: false,
                message: "Customer is not skipped.",
            });
        }

        customer.status = "Waiting";

        await customer.save();

        res.status(200).json({
            success: true,
            message: "Customer recalled successfully.",
            customer,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
}; 

const getCurrentCustomer = async (req, res) => {
  try {
    const customer = await Queue.findOne({
      status: "Serving",
    });

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "No customer is currently being served.",
      });
    }

    res.status(200).json({
      success: true,
      customer,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getWaitingQueue = async (req, res) => {
  try {
    const waitingQueue = await Queue.find({
      status: "Waiting",
    }).sort({ tokenNumber: 1 });

    res.status(200).json({
      success: true,
      total: waitingQueue.length,
      waitingQueue,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getCompletedQueue = async (req, res) => {
  try {
    const completedQueue = await Queue.find({
      status: "Completed",
    }).sort({ tokenNumber: 1 });

    res.status(200).json({
      success: true,
      total: completedQueue.length,
      completedQueue,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getMyQueues = async (req, res) => {
    try {

        const queue = await Queue.findOne({

            user: req.user._id,

            status: {
                $in: ["Waiting", "Serving"]
            }

        });

        if (!queue) {

            return res.status(404).json({
                message: "No active queue"
            });

        }

        const waitingQueue = await Queue.find({

            status: "Waiting"

        }).sort({

            tokenNumber: 1

        });

        const peopleAhead = waitingQueue.filter(

            (q) => q.tokenNumber < queue.tokenNumber

        ).length;

        const estimatedWaitTime = peopleAhead * 5;

        res.json({

            queue,

            peopleAhead,

            estimatedWaitTime

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

const resetQueue = async (req, res) => {
  try {
    const activeCustomers = await Queue.countDocuments({
      status: { $in: ["Waiting", "Serving"] },
    });

    if (activeCustomers > 0) {
      return res.status(400).json({
        success: false,
        message:
          "Cannot reset the queue while customers are still Waiting or Serving.",
      });
    }

    await Queue.deleteMany({});

    return res.status(200).json({
      success: true,
      message: "Queue reset successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = { joinQueue, getQueue, updateQueueStatus, getQueueByToken, getDashboardStats, deleteQueue, getQueuePosition, serveNextCustomer, getCurrentCustomer, getWaitingQueue, getCompletedQueue, skipCustomer, recallCustomer, resetQueue, getMyQueues, };
