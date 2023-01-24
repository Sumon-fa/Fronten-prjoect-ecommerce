import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHook';

const ProtectedRoute = ({ children, isAdmin }: any) => {
  const { token, currentUser } = useAppSelector((state) => state.auth);

  if (token) {
    return children;
  }

  return <Navigate to="/" replace />;
};
export default ProtectedRoute;
