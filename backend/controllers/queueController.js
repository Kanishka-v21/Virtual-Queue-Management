const Queue = require("../models/Queue");
const getQueue = async (req, res) => {
    try {
        const queue = await Queue.find().sort({ tokenNumber: 1});
        res.status(200).json(queue);
    }  catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const joinQueue = async(req, res) => {
    try {
        const { customerName, customerEmail, serviceName } = req.body;
        const lastToken = await Queue.findOne().sort({ tokenNumber: -1 });
        const tokenNumber = lastToken ? lastToken.tokenNumber + 1 : 1;
        const queue = await Queue.create({tokenNumber, customerName, customerEmail, serviceName, status: "Waiting",});
        res.status(201).json(queue);
    } catch(error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const updateQueueStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const queue = await Queue.findById(id);

    if (!queue) {
      return res.status(404).json({
        message: "Queue entry not found",
      });
    }

    queue.status = status;

    await queue.save();

    res.status(200).json(queue);
  } catch (error) {
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
                return
                res.status(404).json({ message: "Token not found"});
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

module.exports = { joinQueue, getQueue, updateQueueStatus, getQueueByToken, getDashboardStats, deleteQueue };
