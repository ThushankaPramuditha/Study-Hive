import axios from 'axios';

const API_URL = 'http://localhost:8080/api/profiles'; // Adjust the base URL if needed

export const profileService = {
  createProfile: async (profileData) => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }

    try {
      const response = await axios.post(API_URL, profileData, {
        headers: {
            Authorization: `Bearer ${token}`,

        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to set up profile');
    }
  },


  
};

