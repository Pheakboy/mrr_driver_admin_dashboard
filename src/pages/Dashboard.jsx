// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import AdminCard from "../components/AdminCard";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null indicates loading state

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false); // Explicitly set to false if no token
    }
  }, []);

  // Handle loading state
  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Show loading indicator while checking
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    navigate('/login', { replace: true }); // Use replace to prevent back navigation
    return null; // Optionally return a loading indicator or null while navigating
  }

  // Render dashboard if authenticated
  return (
    <div className="mt-20">
      <AdminCard />
    </div>
  );
};

export default Dashboard;
