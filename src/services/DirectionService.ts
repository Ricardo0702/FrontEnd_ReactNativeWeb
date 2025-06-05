import axios from './AxiosConfig';  // usa la instancia con interceptor
import type { Direction } from '../types/IDirection';

const API_URL = '/auth/directions';

export const createEmptyDirection = (): Direction => ({
  id: 0,
  street: "",
  city: "",
  personId: 0,
  personName: ""
});

export const fetchDirections = async (): Promise<Direction[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchDirection = async (directionId: number): Promise<Direction> => {
  const response = await axios.get(`${API_URL}/${directionId}`);
  return response.data;
};

export const createDirection = async (street: string, city: string) => {
  const response = await axios.post(API_URL, { street, city });
  return response.data;
};

export const deleteDirection = async (directionId: number) => {
  await axios.delete(`${API_URL}/${directionId}`);
};

export const associatePerson = async (directionId: number, personId: number | undefined) => {
  await axios.put(`${API_URL}/${directionId}/persona/${personId}`, {});
};

export const removePerson = async (directionId: number, personId: number) => {
  await axios.put(`${API_URL}/${directionId}/remove/person/${personId}`, {});
};

export const updateDirection = async (directionId: number, street: string, city: string) => {
  const response = await axios.put(`${API_URL}/${directionId}`, { street, city });
  return response.data;
};
