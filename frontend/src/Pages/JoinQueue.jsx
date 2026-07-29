import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { joinQueue } from "../services/queueService";
import { useAuth } from "../context/AuthContext";
import "./JoinQueue.css";


export default function JoinQueue() {

    const navigate = useNavigate();

    const { user } = useAuth();


    const [branch,setBranch] = useState("");
    const [service,setService] = useState("");

    const [loading,setLoading] = useState(false);

    const [queue,setQueue] = useState(null);



    const handleJoinQueue = async()=>{


        if(!branch || !service){

            alert(
                "Please select branch and service"
            );

            return;

        }


        try{


            setLoading(true);


            const response = await joinQueue({

                customerName:
                user?.name || "Guest User",

                customerEmail:
                user?.email || "guest@gmail.com",

                serviceName:
                service

            });



            console.log(response);



            // Save queue id for dashboard

            localStorage.setItem(
                "queueId",
                response._id
            );



            setQueue(response);



        }
        catch(error){

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Unable to join queue"
            );

        }
        finally{

            setLoading(false);

        }


    };






return (

<div className="join-container">


<div className="join-card">



<h1>
Join A Queue
</h1>


<p>
Select your branch and service to generate your virtual token.
</p>





<div className="input-group">


<label>
Select Branch
</label>


<select

value={branch}

onChange={
(e)=>setBranch(e.target.value)
}

>


<option value="">
Choose Branch
</option>


<option>
MSIT Main Campus
</option>


</select>



</div>






<div className="input-group">


<label>
Select Service
</label>


<select

value={service}

onChange={
(e)=>setService(e.target.value)
}

>


<option value="">
Choose Service
</option>


<option>
Document Verification
</option>


<option>
Fee Payment
</option>


<option>
Certificate Collection
</option>


<option>
Student Help Desk
</option>


</select>



</div>





<div className="queue-info">



<div className="info-box">


<h3>
Estimated Service Time
</h3>


<p>
10 mins
</p>


</div>




<div className="info-box">


<h3>
Current Status
</h3>


<p>
Waiting
</p>


</div>



</div>







<button

className="join-btn"

onClick={handleJoinQueue}

disabled={loading}

>


{
loading
?
"Generating Token..."
:
"Join Queue"
}


</button>




</div>







{
queue &&


<div className="popup-overlay">


<div className="success-popup">



<div className="success-icon">
✓
</div>



<h2>
Queue Joined Successfully!
</h2>



<p>
Your virtual queue ticket has been generated.
</p>





<div className="ticket-result">



<div>

<span>
🎟 Token Number
</span>

<h2>
#{queue.tokenNumber}
</h2>

</div>




<div>

<span>
📌 Status
</span>

<h3>
{queue.status}
</h3>

</div>





<div>

<span>
⏱ Estimated Wait
</span>

<h3>
{queue.estimatedTime} mins
</h3>

</div>





<div>

<span>
🏢 Service
</span>

<h3>
{queue.serviceName}
</h3>

</div>




</div>





<button

className="dashboard-btn"

onClick={()=>
navigate("/dashboard")
}

>

Go To Dashboard →

</button>

</div>
</div>

}

</div>


);


}