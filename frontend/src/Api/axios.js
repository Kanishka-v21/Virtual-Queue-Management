import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});


// Attach JWT automatically
API.interceptors.request.use(
    (config) => {

        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);


// Handle unauthorized requests
API.interceptors.response.use(

    (response) => response,

    (error) => {

        if(error.response?.status === 401){

            localStorage.removeItem("token");
            localStorage.removeItem("userInfo");

        }

        return Promise.reject(error);
    }

);


export default API;