import axios from 'axios';
import { BASE_URL } from './apiPaths';
// import { response } from 'express';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    }
});


// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        console.log('Making request to:', config.url);
        console.log('Request config:', config);
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        console.error("Request error:", error);
        return Promise.reject(error);
    }
);

// Response Interceptor

axiosInstance.interceptors.response.use(
    (response) => {
        console.log('Response received:', response);
        return response;
    },
    (error) => {
        console.error("Response error:", error);
        if (error.code === "ECONNABORTED") {
            console.error("Request timeout. Please check if the server is running.");
        } else if (error.response) {
            console.error("Error response:", error.response);
            if (error.response.status === 401) {
                window.location.href = '/login';
            } else if (error.response.status === 500) {
                console.error("Server error. Please try again later.");
            }
        } else if (error.request) {
            console.error("No response received. Request details:", error.request);
        }
        return Promise.reject(error);
    }
)

export default axiosInstance