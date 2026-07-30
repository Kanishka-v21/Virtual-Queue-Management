import {
useEffect,
useState
} from "react";

import {
getMyQueue
} from "../services/queueService";

import {
useAuth
} from "../context/AuthContext";

import DashboardNavbar from "../Components/DashboardNavbar";

import {
Ticket,
Clock,
Users
} from "lucide-react";



export default function Dashboard(){


const {user}=useAuth();


const [queue,setQueue]=useState(null);

const [loading,setLoading]=useState(true);



const loadQueue=async()=>{


try{


const data=
await getMyQueue();


setQueue(data);



}catch(error){


console.log(
error.response?.data
);



}
finally{

setLoading(false);

}


};



useEffect(()=>{

loadQueue();


const interval=
setInterval(
loadQueue,
10000
);


return ()=>clearInterval(interval);


},[]);




return(

<div className="min-h-screen bg-slate-950 text-white">


<DashboardNavbar/>


<div className="pt-32 px-6 max-w-7xl mx-auto">



<h1 className="text-5xl font-bold">

Welcome,
<span className="text-cyan-400">
 {user.name}
</span>

</h1>


<p className="text-slate-400 mt-3 text-lg">

Track your queue without waiting in line.

</p>





{
loading?


<p className="mt-10">
Loading queue...
</p>



:


queue?

<div className="grid md:grid-cols-3 gap-8 mt-12">


<div className="bg-slate-900 p-8 rounded-2xl">


<Ticket
className="text-cyan-400"
size={40}
/>


<p className="mt-5 text-slate-400">

Token Number

</p>


<h2 className="text-4xl font-bold">

Q-{queue.queue.tokenNumber}

</h2>


</div>





<div className="bg-slate-900 p-8 rounded-2xl">


<Users
className="text-cyan-400"
size={40}
/>


<p className="mt-5 text-slate-400">

People Ahead

</p>


<h2 className="text-4xl font-bold">

{queue.peopleAhead}

</h2>


</div>





<div className="bg-slate-900 p-8 rounded-2xl">


<Clock
className="text-cyan-400"
size={40}
/>


<p className="mt-5 text-slate-400">

Estimated Wait

</p>


<h2 className="text-4xl font-bold">

{queue.estimatedWaitTime}
 min

</h2>


</div>



<div className="md:col-span-3 bg-slate-900 rounded-2xl p-8">


<h2 className="text-2xl font-bold">

Queue Status

</h2>


<p className="mt-4 text-cyan-400 text-xl">

{queue.queue.status}

</p>


</div>


</div>



:


<div className="mt-12 bg-slate-900 rounded-2xl p-10">


<h2 className="text-3xl font-bold">

No Active Queue

</h2>


<p className="text-slate-400 mt-3">

Join a queue to start tracking your position.

</p>


<button

onClick={()=>
window.location.href="/joinqueue"
}

className="mt-6 bg-cyan-500 px-6 py-3 rounded-lg text-black font-bold"

>

Join Queue

</button>


</div>


}



</div>


</div>


);

}