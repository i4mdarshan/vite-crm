// src/routes/ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";

const useAuth = () => {
  // Custom hook to manage authentication
  const user = { loggedIn: true }; // Example; replace with real auth logic
  return user && user.loggedIn;
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Navigate to='/login' />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
