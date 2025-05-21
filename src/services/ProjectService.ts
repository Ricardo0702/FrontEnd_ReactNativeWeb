import axios from 'axios';
import type{ Project } from '../types/Project';
import { getToken } from './AuthService';

const API_URL = 'http://localhost:8080/auth/projects';

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
  return response.data;
};

export const createProject = async (name: string) => {
  const token = getToken();
  
  if (!token) {
    throw new Error('Token no disponible. Usuario no autenticado.');
  }

  const response = await axios.post(API_URL,{ name },{
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data;
};

export const deleteProject = async (projectId: number) => {
  const token = getToken();
  
  if (!token) {
    throw new Error('Token no disponible. Usuario no autenticado.');
  }

  await axios.delete(`${API_URL}/${projectId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};