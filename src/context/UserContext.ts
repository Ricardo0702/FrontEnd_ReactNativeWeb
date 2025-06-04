import { createContext } from "react";

export interface UserContextType {
  login: (username: string) => void;
  logout: () => void;
  username: string;
}

export const UserContext = createContext<UserContextType>({
  login: () => {},
  logout: () => {},
  username: "",
});
