import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {joinQueue} from "../services/queueService";
import {useAuth} from "../context/AuthContext";
import { successToast, errorToast } from "../utils/toast";


export default function JoinQueue(){


const {user}=useAuth();

const navigate=useNavigate();

const [customerName, setCustomerName] = useState("");
const [customerEmail, setCustomerEmail] = useState("");
const [serviceName, setServiceName]=useState("");

const [loading,setLoading]=useState(false);

const [queue,setQueue]=useState(null);



const handleJoin = async()=>{


if(!serviceName){

errorToast("Please select service");

return;

}


if(!user){

errorToast("Please login first");

navigate("/login");

return;

}



try{


setLoading(true);



const data = await joinQueue({

customerName:user.name,

customerEmail:user.email,

serviceName:serviceName

});



console.log("Queue Response:", data);



setQueue(data);
localStorage.setItem(
    "queueInfo",
    JSON.stringify(data)
);


successToast(
    `Token Q-${data.tokenNumber} generated successfully.`
);


navigate("/dashboard");



}
catch(error){


console.log(
error.response?.data || error.message
);



errorToast(
error.response?.data?.message ||
"Unable to join queue"
);



}
finally{


setLoading(false);


}


};


return(

<div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">


<div className="bg-slate-900 p-10 rounded-2xl w-full max-w-md">


<h1 className="text-3xl font-bold text-cyan-400 mb-8">

Join Queue

</h1>



<select

className="w-full p-3 rounded-lg text-black mb-6"

value={serviceName}

onChange={(e)=>setServiceName(e.target.value)}

>


<option value="">
Select Service
</option>


<option>
General Service
</option>


<option>
Consultation
</option>


<option>
Payment
</option>


<option>
Support
</option>


</select>



<button

onClick={handleJoin}

disabled={loading}

className="w-full bg-cyan-500 py-3 rounded-lg font-bold"

>
{

loading ?

<div className="flex items-center justify-center gap-3">

    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"/>

    Joining Queue...

</div>

:

"Join Queue"

}
</button>
</div>
</div>

);


}