// utils/axiosSetup.js
import axios from "axios";

// Create axios instance with base configuration
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL ,
    // baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080",

  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - Add token to every request
axiosInstance.interceptors.request.use(
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

// Response interceptor - Handle token expiration
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized errors (token expired/invalid)
    if (error.response?.status === 401) {
      // Clear token and redirect to login
      localStorage.removeItem("token");
      
      // Only redirect if not already on login/signup page
      if (!window.location.pathname.includes("/login") && 
          !window.location.pathname.includes("/signup")) {
        window.location.href = "/login";
      }
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;