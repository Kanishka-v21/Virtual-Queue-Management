import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

API.interceptors.request.use(
    (config) => {
        const userInfo = JSON.parse(
            localStorage.getItem("userInfo")
        );

        if (userInfo?.token) {
            config.headers.Authorization = `Bearer ${userInfo.token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


API.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {

        if (error.response?.status === 401) {
            localStorage.removeItem("userInfo");
        }

        return Promise.reject(error);
    }
);


export default API;