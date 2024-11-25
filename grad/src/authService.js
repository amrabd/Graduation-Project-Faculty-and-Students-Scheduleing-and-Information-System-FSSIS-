// authService.js
import axios from 'axios';

const BASE_URL = 'https://localhost:44377/api/Login/Login';

const authService = {
    login: async (ssn, password) => {
        const response = await axios.post(BASE_URL, { ssn, password });
        return response.data;
    },
    // Function to set the authorization header for Axios
    setAuthHeader: (token) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    removeAuthHeader: () => {
        delete axios.defaults.headers.common['Authorization'];
    },
};

export default authService;
