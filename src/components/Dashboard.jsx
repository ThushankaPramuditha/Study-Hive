import React from 'react';
import SideBarnNavbar from './SideBarnNavbar';
import DashboardContent from './DashboardContent';

const Dashboard = () => {
  return (
    <div className="">
      <SideBarnNavbar />
      <DashboardContent />
      {/* Add more sections as needed */}
    </div>
  );
};

export default Dashboard;
