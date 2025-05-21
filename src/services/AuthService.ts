import axios from 'axios';

const API_URL = 'http://localhost:8080/auth';

export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  const token = response.data.token;
  sessionStorage.setItem('token', token);
  return token;
};

export const signIn = async (username: string, password: string) =>{
  await axios.post(`${API_URL}/register`, { username, password});
}

export const getToken = () => {
  return sessionStorage.getItem('token');
};

export const isLoggedIn = () => {
  return !!getToken();
};

export const logout = () => {
  sessionStorage.removeItem('token');
};
