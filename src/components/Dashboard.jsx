import React from 'react';
import SideBarnNavbar from './SideBarnNavbar';
import DashboardContent from './DashboardContent';

const Dashboard = () => {
  const [sidebarToggle, setSidebarToggle] = React.useState(false);
  return (
    <div className="">
      <SideBarnNavbar sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}/>
      <DashboardContent sidebarToggle={sidebarToggle}/>
    </div>
  );
};

export default Dashboard;
