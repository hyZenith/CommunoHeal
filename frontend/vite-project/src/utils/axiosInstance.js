import axios from 'axios';
import { BASE_URL } from './apiPaths';
// import { response } from 'express';

const axiosInstance = axios.create({
    baseUrl: BASE_URL,
    timeout: 1000,
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    },
});


// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer $(accessToken)`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor

axiosInstance.interceptors.request.use(
    (response) => {
        return response;
    },
    (error) =>{
        // Handle common errors globally
        if (error.response) {
            if (error.response.status == 401){
                // redirect to Login page
                window.location.href = '/login';
            } else if (error.response.status == 500) {
                console.error("Server error. Please try again later.")
            }
        } else if (error.code == "ECONNABORTED") {
            console.error("Request Timeout. please try again.")
        }
        return Promise.reject(error);
    }
)

export default axiosInstance