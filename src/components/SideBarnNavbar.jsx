import React from 'react';
import SideBar from './SideBar';
import Navbar from './Navbar';

const SideBarnNavbar = () => {
  return (
    <div className="flex">
      <SideBar />
      <Navbar />
    
      
      {/* Add more sections as needed */}
    </div>
  );
};

export default SideBarnNavbar;
