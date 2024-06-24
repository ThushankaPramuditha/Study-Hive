import React from 'react';
import logo from '../assets/images/logo.png'; 
const SideBar = () => {
  return (
      <div className="fixed top-0 bottom-0 lg:left-0 p-2  w-[263px] h-full text-center bg-yellow-200">
        <div className="mt-1 mr-8 flex items-center">
          <img src={logo} alt="StudyHive" className="w-full h-auto ml-5" />
        </div>
        <div className="p-2.5 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white ">
          <i className="fa-solid fa-house opacity-50"></i>
          <span className="text-[18px] ml-4 opacity-50">Home</span>
        </div>
        <div className="p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white">
          <i className="fa-solid fa-calendar-days opacity-50"></i>
          <span className="text-[18px] ml-5 opacity-50">Study Rooms</span>
        </div>
        <div className="p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white">
          <i className="fa-solid fa-chart-simple opacity-50"></i>
          <span className="text-[18px] ml-4 opacity-50">Study Status</span>
        </div>
        <div className="p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white">
          <i className="fa-solid fa-envelope opacity-50"></i>
          <span className="text-[18px] ml-4 opacity-50">Forums</span>
        </div>
        <div className="p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white">
          <i className="fa-solid fa-users opacity-50 text-[15px]"></i>
          <span className="text-[18px] ml-3 opacity-50">Community</span>
        </div>
        <div className="p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white">
          <i className="fa-solid fa-inbox opacity-50"></i>
          <span className="text-[18px] ml-4 opacity-50">Inbox</span>
        </div>
        <div className="p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white">
          <i className="fa-solid fa-gear opacity-50"></i>
          <span className="text-[18px] ml-4 opacity-50">Settings</span>
        </div>
        <div className="p-2.5 mt-[220px] ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white">
          <i className="fa-solid fa-right-from-bracket opacity-50"></i>
          <span className="text-[18px] ml-4  opacity-50">Logout</span>
        </div>
      </div>
  );
};

export default SideBar;
