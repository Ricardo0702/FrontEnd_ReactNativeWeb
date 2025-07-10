import axios from './AxiosConfig';
import { Person } from '../types/IPerson';

const API_URL = '/auth/person';

export const fetchPeople = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchPerson = async (personId: number) => {
  const response = await axios.get<Person>(`${API_URL}/${personId}`);
  return response.data;
};

export const createPerson = async (name: string, age: number) => {
  const response = await axios.post(API_URL, { name, age });
  return response.data;
};

export const deletePerson = async (personId: number) => {
  await axios.delete(`${API_URL}/${personId}`);
};

export const associateProject = async (personId: number, projectId: number | undefined) => {
  const response = await axios.put(`${API_URL}/${personId}/associate/project/${projectId}`);
  return response.data;
};

export const removeProject = async (personId: number, projectId: number) => {
  const response = await axios.put(`${API_URL}/${personId}/remove/project/${projectId}`);
  return response.data;
};

export const updatePerson = async (personId: number, name: string, age: number) => {
  await axios.put(`${API_URL}/${personId}`, { name, age });
};
