import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://kanban-2.onrender.com/api",
    withCredentials: true
})

export default axiosInstance;