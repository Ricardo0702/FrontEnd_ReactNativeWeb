import axios from 'axios';
import i18n from '../types/I18n';
import { logout } from './AuthService'; 

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081',
});

axiosInstance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers['Accept-Language'] = i18n.language || 'en';
  return config;
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      logout();
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
