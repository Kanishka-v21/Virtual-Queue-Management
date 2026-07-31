import {
    useEffect,
    useState
} from "react";
import EmptyState from "../Components/EmptyState";
import {
    useNavigate
} from "react-router-dom";

import {
    Ticket,
    Clock,
    Users,
    RefreshCcw
} from "lucide-react";

import SkeletonCard from "../Components/SkeletonCard";
import {
    getQueuePosition, getCurrentCustomer,
    getWaitingQueue, getMyQueues
} from "../services/queueService";


import {
    useAuth
} from "../context/AuthContext";


import DashboardNavbar from "../Components/DashboardNavbar";

export default function Dashboard(){


const {user}=useAuth();

const navigate=useNavigate();


const [queue,setQueue]=useState(null);
const [progress,setProgress]=useState(0);

const [totalWaiting,setTotalWaiting]=useState(0);

const [position,setPosition]=useState(null);

const [loading,setLoading]=useState(true);


const [currentServing, setCurrentServing] = useState(null);

const [waitingCount, setWaitingCount] = useState(0);


const loadQueue=async()=>{
    const data = await getMyQueue();

setQueue(data);


try{
    const queueData = await getMyQueue();

setQueue(queueData);

const waitingData = await getWaitingQueue();

const waiting = waitingData.waitingQueue.length;

setTotalWaiting(waiting);

if(data.queue.status==="Waiting"){

    const value =
        waiting===0
        ?100
        :Math.round(
            ((waiting-queueData.peopleAhead)/waiting)*100
        );

    setProgress(
        Math.max(0,Math.min(value,100))
    );

}

else if(data.queue.status==="Serving"){

    setProgress(100);

}

else if(data.queue.status==="Completed"){

    setProgress(100);

}

else{

    setProgress(0);

}
setQueue(queueData);
try{
    const current = await getCurrentCustomer();
    setCurrentServing(current.customer);
}catch{
    setCurrentServing(null);
}
try{
    const waiting = await getWaitingQueue();
    setWaitingCount(waiting.total);
}catch{
    setWaitingCount(0);
}
const positionData =
await getQueuePosition(
data.queue._id
);
setPosition(positionData);
}
catch(error){
console.log(
error.response?.data || error.message
);
}
finally{
setLoading(false);
}
};
useEffect(()=>{ loadQueue();
const interval = setInterval(
loadQueue, 10000);

return()=>clearInterval(interval);

},[]);

return(
<div className="min-h-screen bg-slate-950 text-white">
<DashboardNavbar/>
<div className="
pt-32
px-6
max-w-7xl
mx-auto
">



<h1 className="
text-5xl
font-extrabold
">

Welcome,

<span className="
text-cyan-400
ml-2
">

{user?.name}

</span>


</h1>



<p className="
text-slate-400
mt-3
text-lg
">

Track your queue without standing in long lines.

</p>





<button

onClick={loadQueue}

className="
mt-8
flex
items-center
gap-2
bg-cyan-500
text-black
px-5
py-3
rounded-xl
font-bold
hover:scale-105
transition
"

>

<RefreshCcw size={20}/>

Refresh

</button>


{
loading ?
<div className="min-h-screen bg-slate-950">

            <DashboardNavbar/>

            <div className="pt-32 max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-3 gap-8">

                    <SkeletonCard/>

                    <SkeletonCard/>

                    <SkeletonCard/>

                </div>

            </div>

        </div>:
queue ?

<div className="
grid
md:grid-cols-3
gap-8
mt-12
">

<div className="bg-slate-900 rounded-2xl p-8">

<h2 className="text-xl font-semibold text-cyan-400">

Currently Serving

</h2>

<p className="text-5xl font-bold mt-4">

{
currentServing ?

`Q-${currentServing.tokenNumber}`

:

"--"

}

</p>

</div>



<div className="bg-slate-900 rounded-2xl p-8">

<h2 className="text-xl font-semibold text-cyan-400">

People Waiting

</h2>

<p className="text-5xl font-bold mt-4">

{waitingCount}

</p>

</div>

<div className="md:col-span-3 bg-slate-900 rounded-2xl p-8">

    <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold">

            Queue Progress

        </h2>

        <span
        className={`px-4 py-2 rounded-full text-sm font-semibold
        ${
            queue.queue.status==="Waiting"
            ?"bg-yellow-500/20 text-yellow-400"

            :queue.queue.status==="Serving"

            ?"bg-cyan-500/20 text-cyan-400"

            :queue.queue.status==="Completed"

            ?"bg-green-500/20 text-green-400"

            :"bg-orange-500/20 text-orange-400"
        }`}>

            {queue.queue.status}

        </span>

    </div>

    <div className="w-full bg-slate-700 rounded-full h-5 mt-8 overflow-hidden">

        <div

        style={{

            width:`${progress}%`

        }}

        className="bg-cyan-400 h-5 rounded-full transition-all duration-1000"

        />

    </div>

    <div className="flex justify-between mt-3 text-sm text-slate-400">

        <span>

            Progress

        </span>

        <span>

            {progress}%

        </span>

    </div>

    <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div>

            <p className="text-slate-400">

                People Ahead

            </p>

            <h3 className="text-3xl font-bold mt-2">

                {queue.peopleAhead}

            </h3>

        </div>

        <div>

            <p className="text-slate-400">

                Waiting Customers

            </p>

            <h3 className="text-3xl font-bold mt-2">

                {totalWaiting}

            </h3>

        </div>

        <div>

            <p className="text-slate-400">

                Estimated Wait

            </p>

            <h3 className="text-3xl font-bold mt-2">

                {queue.estimatedWaitTime} min

            </h3>

        </div>

    </div>

</div>








<div className="
bg-slate-900
p-8
rounded-2xl
hover:-translate-y-2
hover:shadow-2xl
hover:shadow-cyan-500/20
transition-all
duration-300
">


<Clock
size={45}
className="text-cyan-400"
/>



<p className="
text-slate-400
mt-5
">

Estimated Wait

</p>



<h2 className="
text-5xl
font-bold
mt-2
">

{
position?.estimatedWaitTime ?? 
queue.estimatedWaitTime
}

min

</h2>


</div>









<div className="
bg-slate-900
p-8
rounded-2xl
hover:-translate-y-2
hover:shadow-2xl
hover:shadow-cyan-500/20
transition-all
duration-300
">


<h2 className="
text-3xl
font-bold
">

Queue Details

</h2>




<div className="
grid
md:grid-cols-2
gap-6
mt-8
">



<div>

<p className="text-slate-400">

Service

</p>

<h3 className="text-xl">

{queue.queue.serviceName}

</h3>

</div>




<div>

<p
className={`

mt-4
text-2xl
font-bold

${
queue.queue.status==="Waiting"

?

"text-yellow-400"

:

queue.queue.status==="Serving"

?

"text-green-400"

:

queue.queue.status==="Completed"

?

"text-blue-400"

:

"text-red-400"

}

`}
>

{queue.queue.status}

</p>


</div>





<div>

<p className="text-slate-400">

Joined Time

</p>


<h3>
{
new Date(
queue.queue.createdAt
).toLocaleString()
}

</h3>


</div>
</div>
</div>

</div>

:

<div className="
bg-slate-900
p-8
rounded-2xl
hover:-translate-y-2
hover:shadow-2xl
hover:shadow-cyan-500/20
transition-all
duration-300
">


<EmptyState
    title="You're not in any queue"
    description="Join a queue to receive a digital token, monitor your live position and get notified when it's your turn."
    buttonText="Join Queue"
    buttonLink="/joinqueue"
/>
<button

onClick={()=>
navigate("/joinqueue")
}

className="mt-10 flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-3 rounded-xl font-semibold transition-all duration-300"

>

Join Queue

</button>

</div>

}

</div>


</div>


);

}