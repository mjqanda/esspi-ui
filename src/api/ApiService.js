import axios from 'axios';

const API_URL = 'http://localhost:8080/esspi/api';

// Axios instance default configuration
const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const login = async (username, password) => {
    try {
        const response = await axiosInstance.post('/login', {
            username,
            password,
        });
        return response.data; 
    } catch (error) {
        throw error.response ? error.response.data : 'An error occurred';
    }
};

export const getLoginRecords = async () => {
    try {
        const response = await axiosInstance.get('/login-records');
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'An error occurred';
    }
};
