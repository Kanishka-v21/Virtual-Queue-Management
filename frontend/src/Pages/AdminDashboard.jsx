import {
  Users,
  Ticket,
  CheckCircle,
  Clock3,
  Activity,
  BarChart3,
  Play,
  Pause,
  RotateCcw,
  RefreshCw,
} from "lucide-react";

import { useEffect, useState } from "react";

import {
  getDashboardStats,
  getCurrentCustomer,
  getAllQueues,
  serveNextCustomer,
  skipCustomer,
  recallCustomer,
  updateQueueStatus,
  deleteQueue,
  resetQueue,
} from "../services/adminService";


export default function AdminDashboard() {


  const [stats, setStats] = useState({

    total: 0,
    waiting: 0,
    serving: 0,
    completed: 0,
    cancelled: 0,

  });



  const [queue, setQueue] = useState([]);

  const [currentCustomer, setCurrentCustomer] = useState(null);


  const [loading, setLoading] = useState(true);

  const [actionLoading, setActionLoading] = useState(false);

  const [error, setError] = useState("");





  /*
      Percentage calculations
      Based completely on backend stats
  */


  const completionPercentage =
    stats.total === 0
      ? 0
      :
      Math.round(
        (stats.completed / stats.total) * 100
      );



  const waitingPercentage =
    stats.total === 0
      ? 0
      :
      Math.round(
        (stats.waiting / stats.total) * 100
      );



  const servingPercentage =
    stats.total === 0
      ? 0
      :
      Math.round(
        (stats.serving / stats.total) * 100
      );





  /*
      Load dashboard data

      Backend:
      /queue/dashboard/stats
      /queue/current
      /queue
  */


  const loadDashboard = async () => {


    try {


      setError("");



      const statsData =
        await getDashboardStats();



      setStats(statsData);





      try {


        const current =
          await getCurrentCustomer();



        setCurrentCustomer(
          current.customer || null
        );


      }

      catch {


        setCurrentCustomer(null);


      }





      const queueData =
        await getAllQueues(
          1,
          50
        );



      setQueue(
        queueData.data || []
      );



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



    /*
      Temporary REST refresh.
      Will be replaced by Socket.IO later.
    */


    const interval =
      setInterval(
        loadDashboard,
        10000
      );



    return ()=>clearInterval(interval);



  },[]);









  /*
      Common action handler
  */


  const executeAction = async(action)=>{


    try{


      setActionLoading(true);


      await action();


      await loadDashboard();



    }


    catch(error){


      alert(

        error.response?.data?.message ||

        "Action failed"

      );


    }


    finally{


      setActionLoading(false);


    }


  };









  /*
      Button handlers
  */



  const handleRefresh = ()=>{


    executeAction(
      async()=>{}
    );


  };





  const handleServeNext = ()=>{


    executeAction(
      serveNextCustomer
    );


  };





  const handleSkip = ()=>{


    executeAction(
      skipCustomer
    );


  };





  const handleRecall = (id)=>{


    executeAction(

      ()=>recallCustomer(id)

    );


  };





  const handleComplete = (id)=>{


    executeAction(

      ()=>updateQueueStatus(
        id,
        "Completed"
      )

    );


  };





  const handleDelete = (id)=>{


    const confirmDelete =
      window.confirm(
        "Delete this customer?"
      );



    if(!confirmDelete)
      return;



    executeAction(

      ()=>deleteQueue(id)

    );


  };





  const handleReset = ()=>{


    const confirmReset =
      window.confirm(
        "Reset complete queue?"
      );



    if(!confirmReset)
      return;



    executeAction(
      resetQueue
    );


  };





  if(loading){


    return (

      <div className="
        min-h-screen
        bg-slate-950
        text-white
        flex
        justify-center
        items-center
        text-2xl
      ">

        Loading Dashboard...

      </div>

    );


  }

  if(error){
    return (

      <div className="
        min-h-screen
        bg-slate-950
        text-red-400
        flex
        justify-center
        items-center
        text-xl
      ">

        {error}
        return (

<div className="min-h-screen bg-slate-950 text-white p-8">


<div className="max-w-7xl mx-auto">



{/* HEADER */}

<div className="flex justify-between items-center mb-10">


<div>

<h1 className="text-4xl font-bold text-cyan-400">
Admin Dashboard
</h1>


<p className="text-slate-400 mt-2">
Monitor and manage queue operations.
</p>


</div>





<div className="flex gap-3">


<button

onClick={handleRefresh}

disabled={actionLoading}

className="
bg-cyan-500
hover:bg-cyan-400
text-black
px-5
py-2
rounded-xl
disabled:opacity-50
flex
items-center
gap-2
"

>

<RefreshCw size={18}/>

Refresh

</button>





<button

onClick={handleServeNext}

disabled={actionLoading}

className="
bg-green-500
hover:bg-green-400
text-black
px-5
py-2
rounded-xl
disabled:opacity-50
"

>

Call Next

</button>





<button

onClick={handleSkip}

disabled={actionLoading}

className="
bg-yellow-500
hover:bg-yellow-400
text-black
px-5
py-2
rounded-xl
disabled:opacity-50
"

>

Skip

</button>





<button

onClick={handleReset}

disabled={actionLoading}

className="
bg-red-500
hover:bg-red-400
text-black
px-5
py-2
rounded-xl
disabled:opacity-50
"

>

Reset

</button>


</div>


</div>









{/* STATISTICS CARDS */}


<div className="
grid
lg:grid-cols-5
md:grid-cols-2
gap-6
mb-10
">





<div className="bg-slate-900 rounded-xl p-6">

<Users className="text-cyan-400 mb-4"/>

<p>Total Customers</p>

<h2 className="text-3xl font-bold">

{stats.total}

</h2>

</div>







<div className="bg-slate-900 rounded-xl p-6">

<Ticket className="text-yellow-400 mb-4"/>

<p>Waiting</p>

<h2 className="text-3xl font-bold">

{stats.waiting}

</h2>

</div>







<div className="bg-slate-900 rounded-xl p-6">

<Clock3 className="text-green-400 mb-4"/>

<p>Currently Serving</p>


<h2 className="text-3xl font-bold">

{
currentCustomer
?
`#${currentCustomer.tokenNumber}`
:
"--"
}

</h2>


</div>







<div className="bg-slate-900 rounded-xl p-6">

<CheckCircle className="text-blue-400 mb-4"/>

<p>Completed</p>


<h2 className="text-3xl font-bold">

{stats.completed}

</h2>


</div>








<div className="bg-slate-900 rounded-xl p-6">

<Activity className="text-red-400 mb-4"/>

<p>Cancelled</p>


<h2 className="text-3xl font-bold">

{stats.cancelled}

</h2>


</div>






</div>









{/* ANALYTICS */}


<div className="
bg-slate-900
rounded-xl
border
border-slate-800
p-6
mb-10
">


<div className="flex items-center gap-2 mb-6">


<BarChart3 className="text-cyan-400"/>


<h2 className="text-2xl font-semibold">

Queue Analytics

</h2>


</div>







{/* COMPLETION */}


<div className="mb-6">


<div className="flex justify-between mb-2">


<span>
Completion Rate
</span>


<span className="text-green-400 font-bold">

{completionPercentage}%

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
bg-green-500
h-3
rounded-full
"

style={{
width:`${completionPercentage}%`
}}

></div>


</div>


</div>







{/* WAITING */}


<div className="mb-6">


<div className="flex justify-between mb-2">


<span>
Waiting Load
</span>


<span className="text-yellow-400 font-bold">

{waitingPercentage}%

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
bg-yellow-500
h-3
rounded-full
"

style={{
width:`${waitingPercentage}%`
}}

></div>


</div>


</div>








{/* SERVING */}


<div>


<div className="flex justify-between mb-2">


<span>
Serving Percentage
</span>


<span className="text-cyan-400 font-bold">

{servingPercentage}%

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
width:`${servingPercentage}%`
}}

></div>


</div>


</div>



</div>









{/* LIVE QUEUE TABLE */}


<div className="
bg-slate-900
rounded-xl
border
border-slate-800
p-6
">



<h2 className="text-2xl font-semibold mb-6">

Live Queue

</h2>





<div className="overflow-x-auto">


<table className="w-full">


<thead>


<tr className="
border-b
border-slate-700
text-cyan-400
">


<th className="py-3">
Token
</th>


<th>
Name
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
queue.length===0

?

<tr>

<td

colSpan="6"

className="
text-center
py-8
text-slate-400
"

>

No customers in queue

</td>

</tr>


:


queue.map(customer=>(


<tr

key={customer._id}

className="
border-b
border-slate-800
"

>


<td className="py-4">

#{customer.tokenNumber}

</td>



<td>

{customer.customerName}

</td>



<td>

{customer.customerEmail}

</td>



<td>

{customer.serviceName}

</td>





<td>


<span

className={`
px-3
py-1
rounded-full
text-sm

${
customer.status==="Serving"

?

"bg-green-500/20 text-green-400"

:

customer.status==="Waiting"

?

"bg-yellow-500/20 text-yellow-400"

:

customer.status==="Completed"

?

"bg-blue-500/20 text-blue-400"

:

"bg-red-500/20 text-red-400"

}

`}

>

{customer.status}

</span>


</td>






<td className="space-x-2">



<button

disabled={actionLoading}

onClick={()=>handleComplete(customer._id)}

className="
bg-green-600
px-3
py-1
rounded
"
>
Complete
</button>
<button
disabled={actionLoading}

onClick={()=>handleRecall(customer._id)}

className="
bg-blue-600
px-3
py-1
rounded
"
>
Recall
</button>
<button

disabled={actionLoading}

onClick={()=>handleDelete(customer._id)}

className="
bg-red-600
px-3
py-1
rounded
"
>
Delete
</button>
</td>
</tr>
))

}
</tbody>
</table>
</div>
</div>
</div>
</div>
);
      </div>

    );
  }
}
