import React from 'react';
import SideBar from './SideBar';
import Navbar from './Navbar';

const SideBarnNavbar = () => {
  const [sidebarToggle, setSidebarToggle] = React.useState(false);
  return (
    <div className="flex">
      <SideBar sidebarToggle={sidebarToggle} 
      setSidebarToggle={setSidebarToggle}/>
      <Navbar sidebarToggle={sidebarToggle}/>

    
      
      {/* Add more sections as needed */}
    </div>
  );
};

export default SideBarnNavbar;
