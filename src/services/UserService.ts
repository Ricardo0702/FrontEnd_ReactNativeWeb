import  axios  from './AxiosConfig';
import { User } from '../types/IUser';

const API_URL = '/auth/user';

export const fetchUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchUser = async (userId: number) => {
  const response = await axios.get<User>(`${API_URL}/${userId}`);
  return response.data;
};

export const fetchUserByUsername = async (username: string) => {
  const response = await axios.get<User>(`${API_URL}/${username}`);
  return response.data;
};

export const deleteUser = async (userId: number) => {
  await axios.delete(`${API_URL}/${userId}`);
};

export const assignRole = async (userId: number, roleId: number | undefined) => {
  const response = await axios.put(`${API_URL}/${userId}/assign/role/${roleId}`);
  return response.data;
};

export const removeRole = async (userId: number, roleId: number) => {
  const response = await axios.put(`${API_URL}/${userId}/remove/role/${roleId}`);
  return response.data;
};

export const updateUser = async (userId: number, username: string) => {
  await axios.put(`${API_URL}/${userId}`, { username });
};
