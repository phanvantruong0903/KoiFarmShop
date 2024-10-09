import axios from 'axios';


// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000',
});
    function refreshAccessToken() {
    const refreshToken = localStorage.getItem('refreshToken');  
    if (!refreshToken) {
        return Promise.reject('No refresh token stored');
    }
    console.log('Refreshing access token...');
    return axiosInstance.post('/users/refresh-token', { refresh_token: refreshToken })
}

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
axiosInstance.interceptors.response.use(
    (response) => {
        return response; 
    },
    async (error) => {
        const originalRequest = error.config;

        
        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true; 

            try {
                const response = await refreshAccessToken(); 
                console.log('New access token:', response.data.result.access_token);
                const { access_token, refresh_token } = response.data.result; 
                localStorage.setItem('accessToken', access_token); 
                localStorage.setItem('refreshToken', refresh_token); 
                originalRequest.headers['Authorization'] = `Bearer ${access_token}`; 
                return axiosInstance(originalRequest); 
            } catch (refreshError) {
                console.error('Could not refresh token:', refreshError);
                
                return Promise.reject(refreshError); 
            }
        }

        return Promise.reject(error); 
    }
);

export default axiosInstance;
