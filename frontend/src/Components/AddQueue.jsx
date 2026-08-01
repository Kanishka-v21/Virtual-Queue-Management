import React,{useState} from "react";
import API from "../Api/axios";
import { successToast } from "../utils/toast";


const AddQueue =()=>{

const [form,setForm]=useState({
    customerName:"",
    customerEmail:"",
    serviceName:""
});


const handleSubmit=async(e)=>{

e.preventDefault();

try{

const response = await API.post("/queue",form);

console.log(response.data);

successToast("Added to queue");

}
catch(error){

console.log(error);

}

}


return(

<form onSubmit={handleSubmit}>

<input 
placeholder="Name"
onChange={(e)=>
setForm({...form,customerName:e.target.value})
}
/>


<input 
placeholder="Email"
onChange={(e)=>
setForm({...form,customerEmail:e.target.value})
}
/>


<input 
placeholder="Service"
onChange={(e)=>
setForm({...form,serviceName:e.target.value})
}
/>


<button>
Join Queue
</button>


</form>

)

}

export default AddQueue;