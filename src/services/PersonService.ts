import axios from 'axios';
import { getToken } from './AuthService';
import { Person } from '../types/IPerson';

const API_URL = 'http://localhost:8081/auth';


export const createEmptyPerson = (): Person => ({
  id: 0,
  name: '',
  age: 0,
  directionIds: [],
  streets: [],
  cities: [],
  projectIds: [],
  projectNames: []
});


export const fetchPeople = async () => {
  const token = getToken(); // Asegúrate de obtener el token con getToken()
  
  if (!token) {
    throw new Error('Token no disponible. Usuario no autenticado.');
  }
  
  const response = await axios.get(`${API_URL}/person`, {
    headers: {
      Authorization: `Bearer ${token}`, // Agregar token en los encabezados
    },
  });
  return response.data;
};

export const fetchPerson = async (personId: number) => {
  const token = getToken(); // Asegúrate de obtener el token con getToken()
  
  if (!token) {
    throw new Error('Token no disponible. Usuario no autenticado.');
  }
  
  const response = await axios.get<Person>(`${API_URL}/person/${personId}`, {
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

export const associateProject = async (personId: number, projectId: number | undefined) => {
  const token = getToken();
  
  if (!token) {
    throw new Error('Token no disponible. Usuario no autenticado.');
  }

  const response = await axios.put(
    `${API_URL}/person/${personId}/associate/project/${projectId}`,
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

export const removeProject = async (personId: number, projectId: number) => {
  const token = getToken();
  
  if (!token) {
    throw new Error('Token no disponible. Usuario no autenticado.');
  }

  const response = await axios.put(
    `${API_URL}/person/${personId}/remove/project/${projectId}`,
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

export const updatePerson = async(personId: number, name: string, age: number) => {
  const token = getToken();

  if (!token) {
  throw new Error('Token no disponible. Usuario no autenticado.');
  }
  await axios.put(`${API_URL}/person/${personId}`, {name, age},{
    headers: {
      Authorization:  `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};