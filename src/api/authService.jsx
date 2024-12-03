// // src/api/authService.js

import axiosInstance from './axiosConfig';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/auth'; 

export const register = async (registerData) => {
    try {
        const response = await axiosInstance.post('/register', registerData);
        return response.data;
    } catch (error) {
        console.error('Registration error:', error);
        throw error; // Ensure to handle this in your component
    }
};

// export const login = async (loginData) => {
//     try {
//         const response = await axiosInstance.post('/authenticate', loginData);
//         return response.data;
//     } catch (error) {
//         console.error('Login error:', error);
//         throw error; // Ensure to handle this in your component
//     }
// };

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/authenticate`, credentials);
        return response.data; // Extract the response containing token, userId, and profileExists
    } catch (error) {
        console.error('Login error:', error);

        if (error.response) {
            if (error.response.status === 423) {
                throw new Error(error.response.data.message || 'Your account is blocked. Please contact support.');
            } else if (error.response.status === 401) {
                throw new Error('Invalid credentials. Please try again.');
            }
        }

        throw new Error('Login failed. Please check your credentials and try again.');
    }
};
    
