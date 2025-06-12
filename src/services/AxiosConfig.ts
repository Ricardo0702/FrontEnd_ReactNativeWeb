import axios from 'axios';
import i18n from '../types/I18n';

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

export default axiosInstance;
