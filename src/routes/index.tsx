import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/main/Dashboard";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Auth routes */}
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
          {/* Add more auth routes here */}
        </Route>

        {/* Main application routes with protected access */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path='/' element={<Dashboard />} />
          {/* Add more main application routes here */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
