import API from "../api/axios";

export const joinQueue = async (queueData) => {
    const { data } = await API.post("/queue/join", queueData);
    return data;
};


export const getQueuePosition = async (id) => {
    const { data } = await API.get(`/queue/position/${id}`);
    return data;
};


export const getQueueByToken = async (token) => {
    const { data } = await API.get(`/queue/token/${token}`);
    return data;
};


export const getCurrentCustomer = async () => {
    const { data } = await API.get("/queue/current");
    return data;
};


export const deleteQueue = async (id) => {
    const { data } = await API.delete(`/queue/${id}`);
    return data;
};