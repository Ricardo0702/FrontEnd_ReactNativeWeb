import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const AdminRoutes: React.FC = () => {
  const { authorities, username } = useContext(UserContext);
  if (!username) return <Navigate to="/" />;
  const isAdmin = authorities.includes('ROLE_ADMIN');
  return isAdmin ? <Outlet /> : <Navigate to="/auth/dashboard" />;
};

export default AdminRoutes;
