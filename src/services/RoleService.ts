import  axios  from './AxiosConfig';
import { Role } from '../types/IRole';

const API_URL = '/auth/role';

export const fetchRoles = async (): Promise<Role[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchRole = async (roleId: number): Promise<Role> => {
  const response = await axios.get(`${API_URL}/${roleId}`);
  return response.data;
};

export const createRole = async (name: string, description: string) => {
  const response = await axios.post(API_URL, { name, description });
  return response.data;
};

export const deleteRole = async (roleId: number) => {
  await axios.delete(`${API_URL}/${roleId}`);
};

export const updateRole = async (roleId: number, name: string, description: string) => {
  await axios.put(`${API_URL}/${roleId}`, { name, description });
};