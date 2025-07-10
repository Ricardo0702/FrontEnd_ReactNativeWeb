import axios from './AxiosConfig'; // usa la instancia con interceptor
import type { Address } from '../types/IAddress';

const API_URL = '/auth/addresses';

export const fetchAddresses = async (): Promise<Address[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchAddress = async (addressId: number): Promise<Address> => {
  const response = await axios.get(`${API_URL}/${addressId}`);
  return response.data;
};

export const createAddress = async (street: string, city: string) => {
  const response = await axios.post(API_URL, { street, city });
  return response.data;
};

export const deleteAddress = async (addressId: number) => {
  await axios.delete(`${API_URL}/${addressId}`);
};

export const associatePerson = async (addressId: number, personId: number | undefined) => {
  await axios.put(`${API_URL}/${addressId}/persona/${personId}`, {});
};

export const removePerson = async (addressId: number, personId: number) => {
  await axios.put(`${API_URL}/${addressId}/remove/person/${personId}`, {});
};

export const updateAddress = async (addressId: number, street: string, city: string) => {
  const response = await axios.put(`${API_URL}/${addressId}`, { street, city });
  return response.data;
};
