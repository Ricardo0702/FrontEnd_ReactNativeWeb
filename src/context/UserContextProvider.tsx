// UserContextProvider.tsx
import React, { useState, ReactNode } from "react";
import { UserContext } from "./UserContext";
import axios from '../services/AxiosConfig';

interface Props {
  children: ReactNode;
}

const API_URL = '/auth';

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [username, setUsername] = useState<string>("");
  const [authorities, setAuthorities] = useState<string[]>([]);

  const setter = (token: string) => {
    if (!token) {
      setUsername('');
      setAuthorities([]);
      sessionStorage.removeItem('token');
      return;
    }

    sessionStorage.setItem('token', token);
    try {
      const [, payloadBase64] = token.split('.');
      const payload = JSON.parse(atob(payloadBase64));
      setUsername(payload.username);
      setAuthorities(payload.roles || []);
    } catch (e) {
      console.error("Failed to decode token:", e);
      setUsername('');
      setAuthorities([]);
      sessionStorage.removeItem('token');
    }
  };

  const loginByUsername = async (username: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    const token = response.data.token;
    setter(token);
  };

  const loginByStorage = async () => {
    try {
      const response = await axios.post(`${API_URL}/refresh`);
      const token = response.data.token;
      setter(token);
      return token;
    } catch (e) {
      logout();
      return null;
    }
  };

  const signUp = async (username: string, password: string) => {
    await axios.post(`${API_URL}/register`, { username, password });
  };

  const logout = () => {
    setUsername('');
    setAuthorities([]);
    sessionStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ username, authorities, loginByUsername, loginByStorage, logout, signUp }}>
      {children}
    </UserContext.Provider>
  );
};
