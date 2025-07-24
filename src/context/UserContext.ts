import { createContext } from 'react';

export interface UserContextType {
  loginByUsername: (username: string, password: string) => void;
  loginByStorage: () => void;
  logout: () => void;
  username: string;
  authorities: string[];
  id: number;
  baseColorIds: number[];
  baseColors: string[];
  signUp: (username: string, password: string) => void;
}

export const UserContext = createContext<UserContextType>({} as UserContextType);
