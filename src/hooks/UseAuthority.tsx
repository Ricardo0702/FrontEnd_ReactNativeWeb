export const hasAuthority = (authorities: string[] | undefined, authority: Authority): boolean => {
  return authorities?.includes(authority) ?? false;
};

export enum Authority {
  ROLE_USER = "ROLE_USER",
  ROLE_ADMIN = "ROLE_ADMIN",
  ROLE_PEOPLE = "ROLE_PEOPLE",
  ROLE_PROJECTS = "ROLE_PROJECTS",
  ROLE_ADDRESSES = "ROLE_ADDRESSES"
}
