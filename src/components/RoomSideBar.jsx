import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const RoomSideBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 p-2 z-50">
        <button onClick={toggleSidebar} className="text-2xl p-2 bg-[#FFDA56] rounded-md">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <div
        className={`fixed top-0 bottom-0 lg:left-0 p-2 h-full text-center bg-[#FFDA56] transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:w-[80px] w-[250px] lg:p-2 p-4`}
      >
        <div className="mt-4 flex items-center justify-center lg:hidden">
          <button onClick={toggleSidebar} className="text-2xl p-2 bg-[#FFDA56] rounded-md">
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
        <div
          className={`p-3 flex items-center rounded-md duration-300 cursor-pointer ${
            location.pathname === '/Dashboard' ? 'bg-[#FDF58B]' : ''
          }`}
        >
          <Link to="/Dashboard" className="text-[18px] mx-auto lg:ml-1">
            <i className="fa-solid fa-house text-2xl lg:text-xl"></i>
          </Link>
        </div>

        <div
          className={`p-3 flex items-center rounded-md duration-300 cursor-pointer ${
            location.pathname === '/Room' ? 'bg-[#FDF58B]' : ''
          }`}
        >
          <Link to="/Room" className="text-[18px] mx-auto lg:ml-1">
            <i className="fa-solid fa-building-columns text-2xl lg:text-xl"></i>
          </Link>
        </div>

        <div
          className={`p-3 flex items-center rounded-md duration-300 cursor-pointer ${
            location.pathname === '/Goal' ? 'bg-[#FDF58B]' : ''
          }`}
        >
          <Link to="/Goal" className="text-[18px] mx-auto lg:ml-1">
            <i className="fa-solid fa-bullseye text-2xl lg:text-xl"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RoomSideBar;
