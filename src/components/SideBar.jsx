import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/images/logo.png'; 
<<<<<<< HEAD

const SideBar = () => {
  return (  
      <div className="fixed top-0 bottom-0 lg:left-0 p-2  w-[263px] h-full text-center bg-[#FDF9C4]">
=======
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom'; 

const SideBar = ({ sidebarToggle, setSidebarToggle }) => {
  const divRef1 = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setSidebarToggle(true);
        divRef1.current.style.display = 'block';
      } else {
        setSidebarToggle(false);
        divRef1.current.style.display = 'none';
      }
    };

    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the sidebar state based on initial window size
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setSidebarToggle]);

  return (
    <div className={`${sidebarToggle ? "w-[60px]" : "w-[263px]"} fixed top-0 bottom-0 xl:left-0 p-2 h-auto text-center bg-sidebar transition-width duration-300`}>
      <div className={`${sidebarToggle ? "hidden" : "block"} flex`}>
>>>>>>> dev/Pramuka
        <div className="mt-1 mr-8 flex items-center">
          <img src={logo} alt="StudyHive" className="w-full h-auto ml-7" />
        </div>
<<<<<<< HEAD
        <div className="p-2.5 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white ">
          <i className="fa-solid fa-house opacity-50"></i>
          <a href='/Dashboard' className="text-[18px] ml-4 opacity-50">Home</a>
        </div>
        <div className="p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white">
          <i className="fa-solid fa-calendar-days opacity-50"></i>
          <a href="/StudyRooms" className="text-[18px] ml-5 opacity-50">Study Rooms</a>
        </div>
        <div className="p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white">
          <i className="fa-solid fa-chart-simple opacity-50"></i>
          <a href="/study-status" className="text-[18px] ml-4 opacity-50">Study Status</a>
        </div>
        <div className="p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white">
          <i className="fa-solid fa-envelope opacity-50"></i>
          <a href="/forums" className="text-[18px] ml-4 opacity-50">Forums</a>
        </div>
        <div className="p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white">
          <i className="fa-solid fa-users opacity-50 text-[15px]"></i>
          <a href="/community" className="text-[18px] ml-3 opacity-50">Community</a>
        </div>

       
        <div className="p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white">
          <i className="fa-solid fa-calendar-days opacity-50"></i>
          <a href="/calendar" className="text-[18px] ml-5 opacity-50">Calendar</a>
        </div>

        <div className="p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white">
          <i className="fa-solid fa-inbox opacity-50"></i>
          <a href="/inbox" className="text-[18px] ml-4 opacity-50">Inbox</a>
        </div>
        <div className="p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white">
          <i className="fa-solid fa-gear opacity-50"></i>
          <a href="/settings" className="text-[18px] ml-4 opacity-50">Settings</a>
        </div>
        <div className="p-2.5 mt-[220px] ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white">
          <i className="fa-solid fa-right-from-bracket opacity-50"></i>
          <a href="/" className="text-[18px] ml-4 opacity-50">Logout</a>
=======
        <div ref={divRef1} className="flex text-xl">
          <button onClick={() => setSidebarToggle(!sidebarToggle)}>
            <i className="flex fa-solid fa-angle-left border-black w-8 h-8 items-center justify-center opacity-50"></i>
          </button>
>>>>>>> dev/Pramuka
        </div>
      </div>
      <div  className={`${sidebarToggle ? "" : "hidden"} flex text-xl ml-1 mb-24 mt-2`}>
        <button onClick={() => setSidebarToggle(!sidebarToggle)}>
          <i className="flex fa-solid fa-angle-right border-black w-8 h-8 items-center justify-center opacity-50"></i>
        </button>
      </div>
      {[
        { icon: "fa-house", label: "Home", path: "/home" },
        { icon: "fa-calendar-days", label: "Study Rooms", path: "/studyrooms" },
        { icon: "fa-chart-simple", label: "Study Status", path: "/studystats" },
        { icon: "fa-envelope", label: "Forums", path: "/forums" },
        { icon: "fa-users", label: "Community" },
        { icon: "fa-calendar-days", label: "Calendar" },
        { icon: "fa-inbox", label: "Inbox" },
        { icon: "fa-gear", label: "Settings" },
        { icon: "fa-right-from-bracket", label: "Logout", marginTop: "mt-[40%]" },
      ].map((item, index) => (
        <Link to={item.path || "#"} key={index}>
          <div className={`${sidebarToggle ? `hover:bg-yellow-600 hover:text-white rounded-md p-2.5 ${item.marginTop || ""}` : `p-2.5 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black hover:text-white ${item.marginTop || ""}`}`}>
            <i className={`fa-solid ${item.icon} opacity-50`}></i>
            <span className={`${sidebarToggle ? "hidden" : "text-[18px] ml-4 opacity-50"}`}>{item.label}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
