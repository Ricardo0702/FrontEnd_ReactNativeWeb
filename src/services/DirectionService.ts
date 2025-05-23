import axios from 'axios';
import type { Direction } from '../types/Direction';
import { getToken } from './AuthService';

const API_URL = 'http://localhost:8080/auth/directions';

export const fetchDirections = async (): Promise<Direction[]> => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
  return response.data;
};

export const createDirection = async (street: string, city: string) => {
  const token = getToken();
  
  if (!token) {
    throw new Error('Token no disponible. Usuario no autenticado.');
  }

  const response = await axios.post(API_URL,{ street, city },{
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data;
};

export const deleteDirection = async (directionId: number) => {
  const token = getToken();
  
  if (!token) {
    throw new Error('Token no disponible. Usuario no autenticado.');
  }

  await axios.delete(`${API_URL}/${directionId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const associatePerson = async (directionId: number, personId: number) => {
  const token = getToken();

  if (!token) {
    throw new Error('Token no disponible. Usuario no autenticado.');
  }
  
  await axios.put(`${API_URL}/${directionId}/persona/${personId}`, {}, {
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
  });
};

export const removePerson = async (directionId: number, personId: number) => {
  const token = getToken();

  if (!token) {
    throw new Error('Token no disponible. Usuario no autenticado.');
  }
  
  await axios.put(`${API_URL}/${directionId}/remove/person/${personId}`, {}, {
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
  });
};

export const updateDirection = async (directionId: number, street: string, city: string) => {
  const token = getToken();

   if (!token) {
    throw new Error('Token no disponible. Usuario no autenticado.');
  } 

  const response = await axios.put(`${API_URL}/${directionId}`, {street, city}, {
    headers: {
      Authorization:  `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};
