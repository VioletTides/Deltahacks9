import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../pages/AuthContext";



export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;

}