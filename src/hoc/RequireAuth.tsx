import { useAuth } from "hooks/useAuth";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface PropsType {
  children?: React.ReactNode;
}

export const RequireAuth: React.FC<PropsType> = ({ children }) => {
  const location = useLocation();

  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};
