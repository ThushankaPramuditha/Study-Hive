// // src/api/authService.js

import axiosInstance from './axiosConfig';

export const register = async (registerData) => {
    try {
        const response = await axiosInstance.post('/register', registerData);
        return response.data;
    } catch (error) {
        console.error('Registration error:', error);
        throw error; // Ensure to handle this in your component
    }
};

export const login = async (loginData) => {
    try {
        const response = await axiosInstance.post('/authenticate', loginData);
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error; // Ensure to handle this in your component
    }
};
