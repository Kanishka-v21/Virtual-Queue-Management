import API from "../api/axios";


// REGISTER

export const registerUser = async(userData)=>{

    const {data}= await API.post(
        "/auth/register",
        userData
    );


    localStorage.setItem(
        "token",
        data.token
    );


    localStorage.setItem(
        "userInfo",
        JSON.stringify(data.user)
    );


    return data;

};



// LOGIN

export const loginUser = async(userData)=>{


    const {data}=await API.post(
        "/auth/login",
        userData
    );


    localStorage.setItem(
        "token",
        data.token
    );


    localStorage.setItem(
        "userInfo",
        JSON.stringify(data.user)
    );


    return data;

};



// PROFILE

export const getUserProfile=async()=>{

    const {data}=await API.get(
        "/auth/profile"
    );

    return data;

};