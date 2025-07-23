import axios from './AxiosConfig'; 
import type { BaseColor } from '../types/IBaseColor';

const API_URL = '/auth/baseColors';

export const fetchBaseColors = async (): Promise<BaseColor[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchBaseColor = async (baseColorId: number): Promise<BaseColor> => {
  const response = await axios.get(`${API_URL}/${baseColorId}`);
  return response.data;
};

export const createBaseColor = async (color:string) => {
  const response = await axios.post(API_URL, {color});
  return response.data;
};

export const deleteBaseColor = async (baseColorId: number) => {
  await axios.delete(`${API_URL}/${baseColorId}`);
};

export const associateUser = async (baseColorId: number, userId: number | undefined) => {
  await axios.put(`${API_URL}/${baseColorId}/usuario/${userId}`, {});
};

export const removeUser = async (baseColorId: number, userId: number) => {
  await axios.put(`${API_URL}/${baseColorId}/remove/person/${userId}`, {});
};

export const updateBaseColor = async (baseColorId: number, color:string) => {
  const response = await axios.put(`${API_URL}/${baseColorId}`, {color});
  return response.data;
};
