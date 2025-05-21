import axios from 'axios';
import { getToken } from './AuthService';

const API_URL = 'http://localhost:8080/auth';

export const fetchPeople = async () => {
  const token = getToken(); // Asegúrate de obtener el token con getToken()
  
  if (!token) {
    throw new Error('Token no disponible. Usuario no autenticado.');
  }
  
  const response = await axios.get(`${API_URL}/people`, {
    headers: {
      Authorization: `Bearer ${token}`, // Agregar token en los encabezados
    },
  });
  return response.data;
};

export const createPerson = async (name: string, age: number) => {
  const token = getToken();
  
  if (!token) {
    throw new Error('Token no disponible. Usuario no autenticado.');
  }

  const response = await axios.post(
    `${API_URL}/person`,
    { name, age },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data;
};

export const deletePerson = async (personId: number) => {
  const token = getToken();
  
  if (!token) {
    throw new Error('Token no disponible. Usuario no autenticado.');
  }

  await axios.delete(`${API_URL}/person/${personId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const associateProject = async (personId: number, projectId: number) => {
  const token = getToken();
  
  if (!token) {
    throw new Error('Token no disponible. Usuario no autenticado.');
  }

  const response = await axios.put(
    `${API_URL}/person/${personId}/associate/${projectId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data;
};
