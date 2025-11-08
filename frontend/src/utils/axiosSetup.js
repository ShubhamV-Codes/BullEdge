import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://bulledge-1.onrender.com", // 👈 no /api here
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
