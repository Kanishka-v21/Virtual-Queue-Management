import API from "../api/axios";


// Join Queue
export const joinQueue = async(queueData)=>{

    const {data}=await API.post(
        "/queue/join",
        queueData
    );

    return data;

};



// Get Queue Position
export const getQueuePosition=async(id)=>{

    const {data}=await API.get(
        `/queue/position/${id}`
    );

    return data;

};


// Get Queue By Token
export const getQueueByToken=async(token)=>{

    const {data}=await API.get(
        `/queue/token/${token}`
    );

    return data;

};


// Get Current Customer
export const getCurrentCustomer=async()=>{

    const {data}=await API.get(
        "/queue/current"
    );

    return data;

};


// Get User Queues
export const getMyQueues=async()=>{

    const {data}=await API.get(
        "/queue/my"
    );

    return data;

};


// Get All Queues (Admin)

export const getAllQueues=async()=>{

    const {data}=await API.get(
        "/queue"
    );

    return data;

};
