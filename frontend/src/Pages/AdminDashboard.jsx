import {
useEffect,
useState
} from "react";

import DashboardNavbar from "../Components/DashboardNavbar";
import {
    successToast,
    errorToast,
    infoToast
} from "../utils/toast";
import {

Users,
Clock,
CheckCircle,
PlayCircle,
Search,
RotateCcw,
Trash2,
SkipForward,
RefreshCw

} from "lucide-react";

import {

getDashboardStats,
getAllQueues,
serveNextCustomer,
skipCustomer,
recallCustomer,
deleteQueue,
resetQueue

} from "../Services/adminService";

export default function AdminDashboard(){

const [stats,setStats]=useState({

total:0,
waiting:0,
serving:0,
completed:0,
cancelled:0

});

const [queues,setQueues]=useState([]);

const [loading,setLoading]=useState(true);

const [search,setSearch]=useState("");

const [status,setStatus]=useState("");

const [service,setService]=useState("");

const [page,setPage]=useState(1);

const [pages,setPages]=useState(1);

const limit=10;

const loadDashboard=async()=>{

try{

setLoading(true);

const statsData=
await getDashboardStats();

setStats(statsData);

const queueData=
await getAllQueues(

page,
limit,
search,
status,
service,
"asc"

);

setQueues(queueData.data);

setPages(queueData.totalPages);

}catch(error){

console.log(error);

}finally{

setLoading(false);

}

};

useEffect(()=>{

loadDashboard();

const interval=setInterval(

loadDashboard,

10000

);

return()=>clearInterval(interval);

},[page,search,status,service]);
const handleServeNext=async()=>{

try{

await serveNextCustomer();

loadDashboard();

}catch(error){

errorToast(

error.response?.data?.message ||

"Unable to serve customer"

);

}

};

const handleSkip=async()=>{

try{

await skipCustomer();

loadDashboard();

}catch(error){

errorToast(

error.response?.data?.message ||

"Unable to skip"

);

}

};

const handleRecall=async(id)=>{

try{

await recallCustomer(id);

loadDashboard();

}catch(error){

errorToast(

error.response?.data?.message ||

"Unable to recall"

);

}

};

const handleDelete=async(id)=>{

if(

!window.confirm(

"Delete customer?"

)

)

return;

try{

await deleteQueue(id);

loadDashboard();

}catch(error){

errorToast(

error.response?.data?.message ||

"Unable to delete"

);

}

};

const handleReset=async()=>{

if(

!window.confirm(

"Reset complete queue?"

)

)

return;

try{

await resetQueue();

loadDashboard();

}catch(error){

errorToast(

error.response?.data?.message ||

"Unable to reset"

);

}

};
return(
<div className="max-w-7xl mx-auto px-6 py-8">
   

<div className="min-h-screen bg-slate-950 text-white">

<DashboardNavbar/>

<div className="max-w-7xl mx-auto px-8 pt-32">

<div className="flex justify-between items-center">

<div>

<h1 className="text-5xl font-bold">

Admin Dashboard

</h1>

<p className="text-slate-400 mt-3">

Manage the complete queue system.

</p>

</div>

<button

onClick={loadDashboard}

className="flex items-center gap-2 bg-cyan-500 px-5 py-3 rounded-xl"

>

<RefreshCw size={18}/>

Refresh

</button>

</div>
{/* Statistics Cards */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">

<div className="bg-slate-900 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-lg">

<div className="flex justify-between items-center">

<div>

<p className="text-slate-400">

Total Customers

</p>

<h2 className="text-4xl font-bold mt-2">

{stats.total}

</h2>

</div>

<Users
size={42}
className="text-cyan-400"
/>

</div>

</div>



<div className="bg-slate-900 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-lg">

<div className="flex justify-between items-center">

<div>

<p className="text-slate-400">

Waiting

</p>

<h2 className="text-4xl font-bold mt-2 text-yellow-400">

{stats.waiting}

</h2>

</div>

<Clock
size={42}
className="text-yellow-400"
/>

</div>

</div>
<div className="bg-slate-900 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-lg">
<div className="flex justify-between items-center">
<div>
<p className="text-slate-400">
Serving
</p>
<h2 className="text-4xl font-bold mt-2 text-green-400">
{stats.serving}
</h2>
</div>

<PlayCircle
size={42}
className="text-green-400"
/>

</div>

</div>



<div className="bg-slate-900 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-lg">

<div className="flex justify-between items-center">

<div>

<p className="text-slate-400">

Completed

</p>

<h2 className="text-4xl font-bold mt-2 text-blue-400">

{stats.completed}

</h2>

</div>

<CheckCircle
size={42}
className="text-blue-400"
/>

</div>

</div>



<div className="bg-slate-900 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-lg">

<div className="flex justify-between items-center">

<div>

<p className="text-slate-400">

Cancelled

</p>

<h2 className="text-4xl font-bold mt-2 text-red-400">

{stats.cancelled}

</h2>

</div>

<Trash2
size={42}
className="text-red-400"
/>

</div>

</div>

</div>
<div className="bg-slate-900 rounded-2xl p-6 mt-10">

<div className="grid md:grid-cols-4 gap-5">

<div className="relative">

<Search
size={18}
className="absolute left-4 top-4 text-gray-400"
/>

<input

type="text"

placeholder="Search customer..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="w-full bg-slate-800 pl-11 pr-4 py-3 rounded-xl outline-none"

/>

</div>



<select

value={status}

onChange={(e)=>setStatus(e.target.value)}

className="bg-slate-800 rounded-xl px-4"

>

<option value="">

All Status

</option>

<option value="Waiting">

Waiting

</option>

<option value="Serving">

Serving

</option>

<option value="Completed">

Completed

</option>

<option value="Skipped">

Skipped

</option>

</select>



<select

value={service}

onChange={(e)=>setService(e.target.value)}

className="bg-slate-800 rounded-xl px-4"

>

<option value="">

All Services

</option>

<option value="General Service">

General Service

</option>

<option value="Consultation">

Consultation

</option>

<option value="Payment">

Payment

</option>

<option value="Support">

Support

</option>

</select>



<button

onClick={loadDashboard}

className="bg-cyan-500 rounded-xl font-semibold"

>

Apply Filters

</button>

</div>

</div>
<div className="bg-slate-900 rounded-2xl mt-10 overflow-hidden">

<div className="overflow-x-auto">

<table className="w-full">

<thead className="bg-slate-800">

<tr>

<th className="py-4">

Token

</th>

<th>

Customer

</th>

<th>

Email

</th>

<th>

Service

</th>

<th>

Status

</th>

<th>

Actions

</th>

</tr>

</thead>

<tbody>

{

loading ?

(

<tr>

<td

colSpan="6"

className="py-16 text-center"

>

Loading...

</td>

</tr>

)

:

queues.length===0 ?

(

<tr>

<td

colSpan="6"

className="py-16 text-center"

>

No Queue Found

</td>

</tr>

):
queues.map((queue)=>(

<tr
key={queue._id}
className="border-b border-slate-800 hover:bg-slate-800/40 transition-all duration-300"
>

<td className="py-5 text-center font-bold text-cyan-400">

Q-{queue.tokenNumber}

</td>

<td className="text-center">

{queue.customerName}

</td>

<td className="text-center">

{queue.customerEmail}

</td>

<td className="text-center">

{queue.serviceName}

</td>

<td className="text-center">

<span
className={`

px-4
py-2
rounded-full
text-sm
font-semibold

${
queue.status==="Waiting"

?

"bg-yellow-500/20 text-yellow-400"

:

queue.status==="Serving"

?

"bg-green-500/20 text-green-400"

:

queue.status==="Completed"

?

"bg-blue-500/20 text-blue-400"

:

queue.status==="Skipped"

?

"bg-orange-500/20 text-orange-400"

:

"bg-red-500/20 text-red-400"

}

`}
>

{queue.status}

</span>

</td>

<td>

<div className="flex justify-center gap-2 flex-wrap">

<button

onClick={handleServeNext}

className="bg-green-600 hover:bg-green-700 px-3 py-2 rounded-lg transition"

title="Serve Next"

>

<PlayCircle size={18}/>

</button>

{

queue.status==="Skipped"

&&

(

<button

onClick={()=>handleRecall(queue._id)}

className="bg-yellow-500 hover:bg-yellow-600 px-3 py-2 rounded-lg transition"

title="Recall"

>

<RotateCcw size={18}/>

</button>

)

}

<button

onClick={()=>handleDelete(queue._id)}

className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg transition"

title="Delete"

>

<Trash2 size={18}/>

</button>

</div>

</td>

</tr>

))}

</tbody>
</table>

</div>

</div>

{/* Pagination */}

<div className="flex justify-between items-center mt-8">

<div className="text-slate-400">

Page {page} of {pages}

</div>

<div className="flex gap-4">

<button

disabled={page===1}

onClick={()=>setPage(page-1)}

className="px-5 py-2 rounded-lg bg-slate-800 disabled:opacity-40 hover:bg-slate-700 transition"

>

Previous

</button>

<button

disabled={page===pages}

onClick={()=>setPage(page+1)}

className="px-5 py-2 rounded-lg bg-cyan-500 text-black font-semibold disabled:opacity-40 hover:bg-cyan-400 transition"

>

Next

</button>

</div>

</div>

{/* Queue Controls */}

<div className="grid md:grid-cols-2 gap-8 mt-12">

<div className="bg-slate-900 rounded-2xl p-8">

<h2 className="text-2xl font-bold text-cyan-400">

Queue Controls

</h2>

<p className="text-slate-400 mt-2">

Manage the live queue efficiently.

</p>

<div className="grid grid-cols-2 gap-4 mt-8">

<button

onClick={handleServeNext}

className="bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold transition"

>

Serve Next

</button>


</div>

</div>

<div className="bg-slate-900 rounded-2xl p-8">

<h2 className="text-2xl font-bold text-red-400">

Danger Zone

</h2>

<p className="text-slate-400 mt-2">

Reset the queue only when there are no active customers.

</p>

<button

onClick={handleReset}

className="mt-8 w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl font-bold transition"

>

Reset Queue

</button>

</div>

</div>

<div className="h-20"></div>

</div>
</div>
</div>

);
}




