import {
    Ticket,
    Users,
    Clock3,
    Activity,
    RefreshCw,
    CheckCircle,
    ArrowRight,
    UserPlus
} from "lucide-react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    getQueuePosition,
    getQueueByToken,
    getCurrentCustomer,
    getWaitingQueue
} from "../services/queueService";


export default function Dashboard() {

    const navigate = useNavigate();

    const [queue, setQueue] = useState(null);
    const [position, setPosition] = useState(null);
    const [currentCustomer, setCurrentCustomer] = useState(null);
    const [waitingCount, setWaitingCount] = useState(0);

    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState("");



    const loadDashboard = async () => {

        try {

            setError("");

            const queueId =
                localStorage.getItem("queueId");


            if(queueId){

                const positionData =
                    await getQueuePosition(queueId);


                setPosition(positionData);



                const tokenData =
                    await getQueueByToken(
                        positionData.tokenNumber
                    );


                setQueue(tokenData);

            }



            try{

                const current =
                    await getCurrentCustomer();

                setCurrentCustomer(
                    current.customer || null
                );


            }
            catch{

                setCurrentCustomer(null);

            }




            try{

                const waiting =
                    await getWaitingQueue();


                setWaitingCount(
                    waiting.total || 0
                );


            }
            catch{

                setWaitingCount(0);

            }


        }
        catch(error){

            console.log(error);

            setError(
                error.response?.data?.message ||
                "Unable to load dashboard"
            );

        }
        finally{

            setLoading(false);

        }

    };





    useEffect(()=>{

        loadDashboard();

    },[]);






    const handleRefresh = async()=>{

        setRefreshing(true);

        await loadDashboard();

        setRefreshing(false);

    };





    const progress =
        waitingCount === 0
        ?
        100
        :
        Math.round(
            ((waitingCount -
            (position?.peopleAhead || 0))
            /
            waitingCount)
            *
            100
        );






    if(loading){

        return(

            <div className="
            min-h-screen
            bg-slate-950
            text-white
            flex
            items-center
            justify-center
            text-2xl
            ">

                Loading Dashboard...

            </div>

        );

    }




    return(

<div className="
min-h-screen
bg-slate-950
text-white
p-8
">


<div className="max-w-7xl mx-auto">



{/* HEADER */}

<div className="
flex
justify-between
items-center
mb-10
">


<div>

<h1 className="
text-4xl
font-bold
text-cyan-400
">

My Queue Dashboard

</h1>


<p className="text-slate-400 mt-2">

Track your token and waiting status.

</p>


</div>



<button

onClick={handleRefresh}

disabled={refreshing}

className="
bg-cyan-500
text-black
px-5
py-3
rounded-xl
flex
items-center
gap-2
disabled:opacity-50
"

>

<RefreshCw size={18}/>

{
refreshing
?
"Refreshing..."
:
"Refresh"
}

</button>


</div>





{
error &&

<div className="
bg-red-500/20
text-red-400
p-4
rounded-xl
mb-6
">

{error}

</div>

}





{/* TOP CARDS */}


<div className="
grid
lg:grid-cols-4
md:grid-cols-2
gap-6
mb-10
">



<div className="bg-slate-900 p-6 rounded-xl">

<Ticket className="text-cyan-400 mb-4"/>

<p>Your Token</p>

<h2 className="text-4xl font-bold">

{
queue
?
`#${queue.tokenNumber}`
:
"--"
}

</h2>

</div>





<div className="bg-slate-900 p-6 rounded-xl">

<Users className="text-yellow-400 mb-4"/>

<p>People Ahead</p>

<h2 className="text-4xl font-bold">

{
position?.peopleAhead ??
"--"
}

</h2>

</div>






<div className="bg-slate-900 p-6 rounded-xl">

<Clock3 className="text-green-400 mb-4"/>

<p>Estimated Wait</p>

<h2 className="text-3xl font-bold">

{
position?.estimatedWaitTime
?
`${position.estimatedWaitTime} min`
:
"--"
}

</h2>

</div>







<div className="bg-slate-900 p-6 rounded-xl">

<Activity className="text-blue-400 mb-4"/>

<p>Status</p>

<h2 className="text-3xl font-bold">

{
queue?.status ||
"--"
}

</h2>

</div>


</div>









{/* QUEUE PROGRESS */}


<div className="
bg-slate-900
rounded-xl
p-6
mb-10
">


<div className="
flex
justify-between
mb-3
">


<h2 className="text-2xl font-semibold">

Queue Progress

</h2>


<span className="text-cyan-400 font-bold">

{progress}%

</span>


</div>




<div className="
w-full
bg-slate-700
rounded-full
h-3
">


<div

className="
bg-cyan-500
h-3
rounded-full
"

style={{
width:`${progress}%`
}}

></div>


</div>



<p className="text-slate-400 mt-3">

Progress increases as customers before you are served.

</p>


</div>










{/* DETAILS */}


<div className="
grid
lg:grid-cols-2
gap-8
">



<div className="
bg-slate-900
rounded-xl
p-6
">


<h2 className="text-2xl font-semibold mb-6">

Ticket Details

</h2>


<div className="space-y-4">


<p className="flex justify-between">

<span>
Service
</span>

<span>
{queue?.serviceName || "--"}
</span>

</p>



<p className="flex justify-between">

<span>
Joined At
</span>

<span>

{
queue?.joinedAt
?
new Date(queue.joinedAt)
.toLocaleString()
:
"--"
}

</span>

</p>



</div>


</div>









<div className="
bg-slate-900
rounded-xl
p-6
">


<h2 className="text-2xl font-semibold mb-6">

Current Counter

</h2>


<div className="
flex
items-center
gap-5
">


<CheckCircle
className="text-green-400"
size={45}
/>


<div>

<p>
Currently Serving
</p>


<h2 className="
text-4xl
font-bold
text-cyan-400
">

{
currentCustomer
?
`#${currentCustomer.tokenNumber}`
:
"--"
}

</h2>


</div>


</div>


</div>


</div>







{/* JOIN QUEUE BUTTON */}


{
!queue &&

<div className="
mt-10
flex
justify-center
">


<button

onClick={()=>navigate("/joinqueue")}

className="
bg-green-500
text-black
px-8
py-4
rounded-xl
font-semibold
flex
items-center
gap-3
"

>

<UserPlus/>

Join Queue

</button>


</div>

}




</div>

</div>

    );

}