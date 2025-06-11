import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const ProtectedRoutes: React.FC = () => {
  const { username } = useContext(UserContext);
  if (!username) {return <Navigate to="/" replace />;}
  return <Outlet />;
};

export default ProtectedRoutes;
