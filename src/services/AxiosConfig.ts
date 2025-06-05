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

let isRefreshing = false;
let failedQueue: Array<{ resolve: (token: string) => void; reject: (error: any) => void }> = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token!);
    }
  });
  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(token => {
          originalRequest.headers['Authorization'] = 'Bearer ' + token;
          return axiosInstance(originalRequest);
        }).catch(err => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const token = sessionStorage.getItem('token');

      try {
        const response = await axios.post('http://localhost:8081/auth/refresh', null, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const newToken = response.data.token;
        sessionStorage.setItem('token', newToken);
        axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + newToken;
        originalRequest.headers['Authorization'] = 'Bearer ' + newToken;
        processQueue(null, newToken);
        return axiosInstance(originalRequest);
      } catch (err) {
        processQueue(err, null);
        logout();
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
