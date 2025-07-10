import axios from './AxiosConfig';
import type { Project } from '../types/IProject';

const API_URL = '/auth/projects';

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchProject = async (projectId: number): Promise<Project> => {
  const response = await axios.get(`${API_URL}/${projectId}`);
  return response.data;
};

export const createProject = async (name: string) => {
  const response = await axios.post(API_URL, { name });
  return response.data;
};

export const deleteProject = async (projectId: number) => {
  await axios.delete(`${API_URL}/${projectId}`);
};

export const updateProject = async (projectId: number, name: string) => {
  await axios.put(`${API_URL}/${projectId}`, { name });
};
