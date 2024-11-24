import axiosInstance from './axiosConfig';



export const findMatchingPartners = async (profileData, username) => {
    try {
        const response = await axiosInstance.post('/profiles/match', { ...profileData, username });
        return response.data;
    } catch (error) {
        console.error('Error finding matching partners:', error);
        throw error;
    }
};