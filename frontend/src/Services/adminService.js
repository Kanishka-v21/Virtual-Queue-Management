import API from "../api/axios";

// Dashboard Statistics
export const getDashboardStats = async () => {
    const { data } = await API.get("/queue/dashboard/stats");
    return data;
};

// Current Serving Customer
export const getCurrentCustomer = async () => {
    const { data } = await API.get("/queue/current");
    return data;
};

// Get Queue
export const getAllQueues = async (
    page = 1,
    limit = 50,
    search = "",
    status = "",
    service = "",
    sort = "asc"
) => {
    const { data } = await API.get("/queue", {
        params: {
            page,
            limit,
            search,
            status,
            service,
            sort,
        },
    });

    return data;
};

// Call Next Customer
export const serveNextCustomer = async () => {
    const { data } = await API.patch("/queue/serve-next");
    return data;
};

// Skip Current Customer
export const skipCustomer = async () => {
    const { data } = await API.patch("/queue/skip");
    return data;
};

// Recall Skipped Customer
export const recallCustomer = async (id) => {
    const { data } = await API.patch(`/queue/recall/${id}`);
    return data;
};

// Update Queue Status
export const updateQueueStatus = async (id, status) => {
    const { data } = await API.put(`/queue/${id}`, {
        status,
    });

    return data;
};

// Delete Customer
export const deleteQueue = async (id) => {
    const { data } = await API.delete(`/queue/${id}`);
    return data;
};

// Reset Queue
export const resetQueue = async () => {
    const { data } = await API.delete("/queue/reset");
    return data;
};

// Waiting Queue
export const getWaitingQueue = async () => {
    const { data } = await API.get("/queue/waiting");
    return data;
};

// Completed Queue
export const getCompletedQueue = async () => {
    const { data } = await API.get("/queue/completed");
    return data;
};

// Queue Position
export const getQueuePosition = async (id) => {
    const { data } = await API.get(`/queue/position/${id}`);
    return data;
};

// Search Queue By Token
export const getQueueByToken = async (token) => {
    const { data } = await API.get(`/queue/token/${token}`);
    return data;
};