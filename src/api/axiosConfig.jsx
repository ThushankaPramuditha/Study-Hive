// src/api/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8090/api/v1/auth',
    headers: {
        'Content-Type': 'application/json',
    },
    // withCredentials: true,
});

export default axiosInstance;
