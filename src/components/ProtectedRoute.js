import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = ({ user }) => {
  if (!user.username) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
