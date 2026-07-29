import API from "../api/axios";

// Join Queue
export const joinQueue = async (queueData) => {
    const { data } = await API.post(
        "/queue/join",
        queueData
    );

    return data;
};


// Get Queue Position
export const getQueuePosition = async (id) => {
    const { data } = await API.get(
        `/queue/position/${id}`
    );

    return data;
};


// Get Queue By Token
export const getQueueByToken = async (token) => {
    const { data } = await API.get(
        `/queue/token/${token}`
    );

    return data;
};


// Get Current Serving Customer
export const getCurrentCustomer = async () => {
    const { data } = await API.get(
        "/queue/current"
    );

    return data;
};


// Get Waiting Queue
export const getWaitingQueue = async () => {
    const { data } = await API.get(
        "/queue/waiting"
    );

    return data;
};


// Get Completed Queue
export const getCompletedQueue = async () => {
    const { data } = await API.get(
        "/queue/completed"
    );

    return data;
};


// Get All Queues
export const getAllQueues = async (
    page = 1,
    limit = 10,
    search = "",
    status = "",
    service = "",
    sort = "asc"
) => {

    const { data } = await API.get(
        "/queue",
        {
            params:{
                page,
                limit,
                search,
                status,
                service,
                sort
            }
        }
    );

    return data;
};