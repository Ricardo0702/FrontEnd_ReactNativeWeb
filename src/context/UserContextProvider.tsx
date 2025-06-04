import React, { useState, ReactNode } from "react";
import { UserContext } from "./UserContext";

interface Props {
  children: ReactNode;
}

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [username, setUsername] = useState<string>("");

  const login = (name: string) => {
    setUsername(name);
  };

  const logout = () => {
    setUsername("");
  };

  return (
    <UserContext.Provider value={{ username, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
