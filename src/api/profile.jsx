import axios from 'axios';

const API_URL = 'http://localhost:8080/api/profiles';

export const createProfile = (profileData) => {
  return axios.post(`${API_URL}`, profileData);
};

export const updateProfile = (userId, profileData) => {
  return axios.put(`${API_URL}/${userId}`, profileData);
};

export const getProfile = (userId) => {
  return axios.get(`${API_URL}/${userId}`);
};
