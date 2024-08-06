import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import AdminCard from "../components/AdminCard";
import Chart from "../components/Chart";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [bookingsData, setBookingsData] = useState([]);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsAuthenticated(!!token);
  }, []);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchData = async () => {
        const data = [
          { month: "February", bookings: 59, passengers: 110, revenue: 150 },
          { month: "March", bookings: 80, passengers: 150, revenue: 120 },
          { month: "April", bookings: 81, passengers: 160, revenue: 130 },
          { month: "May", bookings: 56, passengers: 100, revenue: 150 },
          { month: "June", bookings: 55, passengers: 90, revenue: 80 },
          { month: "July", bookings: 40, passengers: 70, revenue: 60 },
          { month: "Augest", bookings: 40, passengers: 12, revenue: 109 },
        ];
        setBookingsData(data);
      };

      fetchData();
    }
  }, [isAuthenticated]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-20">
      <AdminCard />
      {bookingsData.length > 0 ? (
        <Chart bookingsData={bookingsData} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Dashboard;
