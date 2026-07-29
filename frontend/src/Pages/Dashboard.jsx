import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import {
    FaTicketAlt,
    FaUsers,
    FaClock,
    FaBullhorn
} from "react-icons/fa";

import { useEffect, useState } from "react";

import { useAuth } from "../context/AuthContext";
import DashboardNavbar from "../Components/DashboardNavbar";

import {
    getQueuePosition,
    getQueueByToken
} from "../services/queueService";


export default function Dashboard() {

    const navigate = useNavigate();
    const { user } = useAuth();


    const [queueData,setQueueData] = useState({

        token:"--",
        serving:"--",
        peopleAhead:"--",
        waitTime:"--",
        customer:user?.name || "User",
        counter:"--",
        status:"Not Joined"

    });



    const loadQueueData = async()=>{


        try{

            const queueId =
            localStorage.getItem("queueId");


            if(!queueId){

                return;

            }


            const position =
            await getQueuePosition(queueId);



            const queue =
            await getQueueByToken(
                position.tokenNumber
            );



            setQueueData({

                token:
                queue.tokenNumber,


                serving:
                queue.status==="Serving"
                ? queue.tokenNumber
                : "--",


                peopleAhead:
                position.peopleAhead,


                waitTime:
                position.estimatedWaitTime+" mins",


                customer:
                queue.customerName,


                counter:
                "A-03",


                status:
                queue.status

            });


        }
        catch(error){

            console.log(error);

        }


    };



    useEffect(()=>{

        loadQueueData();

    },[]);




return (

<div className="dashboard">


<DashboardNavbar />



<div className="welcome-card">

<h1>
Welcome Back {user?.name}
</h1>


<p>
Stay updated with your queue status in real time.
</p>


</div>



<div className="dashboard-actions">

<button

className="join-queue-btn"

onClick={()=>navigate("/joinqueue")}

>

Join A Queue

</button>


</div>




<div className="stats-grid">


<div className="stats-card">

<FaTicketAlt className="stat-icon"/>

<h3>
My Token
</h3>

<h2>
{queueData.token}
</h2>


</div>




<div className="stats-card">

<FaBullhorn className="stat-icon"/>

<h3>
Now Serving
</h3>

<h2>
{queueData.serving}
</h2>

</div>





<div className="stats-card">

<FaUsers className="stat-icon"/>

<h3>
People Ahead
</h3>

<h2>
{queueData.peopleAhead}
</h2>

</div>





<div className="stats-card">

<FaClock className="stat-icon"/>

<h3>
Estimated Wait
</h3>

<h2>
{queueData.waitTime}
</h2>


</div>


</div>





<div className="progress-card">


<div className="progress-header">

<h2>
Queue Progress
</h2>

<span>
{
queueData.peopleAhead==="--"
?
"0%"
:
"70%"
}

</span>


</div>



<div className="progress-bar">

<div className="progress-fill">

</div>

</div>



<p className="status-text">

{
queueData.status==="Not Joined"

?

"Join a queue to see live updates."

:

<>⏳ You're getting closer! Only <strong>
{queueData.peopleAhead}
</strong> people are ahead of you.</>

}


</p>


</div>







<div className="updates-card">


<h2>
Recent Updates
</h2>


<div className="update-item">

<span className="done">
✔
</span>

<p>
Queue status loaded successfully.
</p>

</div>



<div className="update-item">

<span className="done">
✔
</span>

<p>
Your token:
<strong>
#{queueData.token}
</strong>
</p>

</div>



<div className="update-item">

<span className="pending">
⏳
</span>

<p>
Status:
{queueData.status}
</p>

</div>



</div>







<div className="actions-card">


<h2>
Quick Actions
</h2>


<div className="button-group">


<button

className="primary-btn"

onClick={loadQueueData}

>

Refresh Status

</button>



<button

className="secondary-btn"

onClick={()=>{

localStorage.removeItem("queueId");

window.location.reload();

}}

>

Leave Queue

</button>


</div>


</div>







<div className="summary-card">


<h2>
Today's Queue Summary
</h2>



<div className="summary-grid">


<div className="summary-box">

<h3>
Your Token
</h3>

<p>
{queueData.token}
</p>

</div>



<div className="summary-box">

<h3>
Average Wait
</h3>

<p>
{queueData.waitTime}
</p>


</div>




<div className="summary-box">

<h3>
Queue Status
</h3>

<p className="active-status">

{queueData.status}

</p>

</div>



</div>


</div>








<div className="ticket-card">


<div className="ticket-header">


<h2>
🎟 Digital Queue Ticket
</h2>


<span>
{queueData.status}
</span>


</div>




<div className="ticket-details">


<div>

<p>
Token Number
</p>

<h3>
#{queueData.token}
</h3>

</div>



<div>

<p>
Customer
</p>

<h3>
{queueData.customer}
</h3>


</div>




<div>

<p>
Counter
</p>

<h3>
{queueData.counter}
</h3>


</div>



<div>

<p>
Estimated Time
</p>

<h3>
{queueData.waitTime}
</h3>


</div>


</div>



<div className="ticket-footer">


<div className="qr-box">

QR

</div>


<p>
Show this ticket at service counter.
</p>


</div>



</div>








<div className="tips-card">


<h2>
Tips & Announcements
</h2>



<div className="tip">

<span>
✔
</span>

<p>
Keep this page open for queue updates.
</p>

</div>



<div className="tip">

<span>
📢
</span>

<p>
Arrive 5 minutes before your turn.
</p>

</div>



<div className="tip">

<span>
⏰
</span>

<p>
Token remains valid after being called.
</p>

</div>



</div>




</div>


);


}