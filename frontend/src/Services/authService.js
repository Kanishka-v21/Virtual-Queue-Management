import API from "../api/axios";

export const registerUser = async (userData) => {
    const { data } = await API.post("/auth/register", userData);
    return data;
};

export const loginUser = async (credentials) => {
    const { data } = await API.post("/auth/login", credentials);

    localStorage.setItem("userInfo", JSON.stringify(data));

    return data;
};

export const getUserProfile = async () => {
    const { data } = await API.get("/auth/profile");
    return data;
};

export const logoutUser = () => {
    localStorage.removeItem("userInfo");
};