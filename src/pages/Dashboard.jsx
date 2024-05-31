import React from "react";
import Map from "../components/Map";
import AdminCard from "../components/AdminCard";

const Dashboard = () => {
  return (
    <div className="mt-20">
      <AdminCard />
      <Map />
    </div>
  );
};

export default Dashboard;
