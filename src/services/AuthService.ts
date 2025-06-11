// AuthService.ts
import axios from './AxiosConfig';  // instancia axios con config global

const API_URL = '/auth';

export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  const token = response.data.token;
  sessionStorage.setItem('token', token);
  return token;
};

export const loginByStorage = async() =>{
  const response = await axios.post(`${API_URL}/refresh`);
  sessionStorage.removeItem('token');
  const token = response.data.token;
  sessionStorage.setItem('token', token);
  return token;
}

export const signUp = async (username: string, password: string) => {
  await axios.post(`${API_URL}/register`, { username, password });
};

export const getToken = () => {
  return sessionStorage.getItem('token');
};

export const isLoggedIn = () => {
  return !!getToken();
};

export const logout = () => {
  sessionStorage.removeItem('token');
};
