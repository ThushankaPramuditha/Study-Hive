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
        const response = await axios.post(`${API_URL}/authenticate`, credentials); // Correct endpoint for login
        return response.data; // Extract the response containing token, userId, and profileExists
    } catch (error) {
        console.error('Login error:', error);
        // throw new Error('Login failed'); // Throw error to handle it in the component

        if (error.response && error.response.status === 403) {
            // If account is blocked, throw a specific error message
            throw new Error('Your account is blocked. Please contact support.');
        }
        

        // For all other errors (incorrect credentials, etc.), throw a generic error
        throw new Error('Login failed. Please check your credentials and try again.');
    
    }
};