export interface User {
  id: number;
  username: string;
  password: string;
  roleIds: number[] | null;
  roles: string[];
}
