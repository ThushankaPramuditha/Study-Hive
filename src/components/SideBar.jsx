// import React from 'react';
// import logo from '../assets/images/logo.png'; 

// const SideBar = ({sidebarToggle, setSidebarToggle}) => {
//   return (
//       <div className={`${sidebarToggle ? "w-[60px]" : "block"} fixed top-0 bottom-0 xl:left-0 p-2  w-[263px] h-full text-center bg-sidebar`}>
//         <div className={`${sidebarToggle ? "hidden" : "block"} flex`}>
//         <div className="mt-1 mr-8 flex items-center">
//           <img src={logo} alt="StudyHive" className="w-full h-auto ml-7" />
//         </div>
//         <div className={` flex text-xl flex `}>
//         <button onClick={() => setSidebarToggle(!sidebarToggle)}>
//           <i className="flex fa-solid fa-angle-left border-black w-8 h-8 items-center justify-center opacity-50"></i>
//         </button>
//         </div>
//         </div>
//         <div className={`${sidebarToggle ? "" : "hidden"} flex text-xl flex ml-1 mb-24 mt-2`}>
//         <button onClick={() => setSidebarToggle(!sidebarToggle)}>
//           <i className="flex fa-solid fa-angle-right border-black w-8 h-8 items-center justify-center opacity-50"></i>
//         </button>
//         </div>
//         <div className={`${sidebarToggle ? "mt-10 hover:bg-yellow-600 hover:text-white rounded-md p-2.5" :"p-2.5 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white"}`}>
//           <i className={`${sidebarToggle ? "" : ""} fa-solid fa-house opacity-50`}></i>
//           <span className={`${sidebarToggle ? "hidden" : ""} text-[18px] ml-4 opacity-50`}>Home</span>
//         </div>
//         <div className={`${sidebarToggle ? "hover:bg-yellow-600 hover:text-white rounded-md p-2.5 " :"p-2.5 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white"}`}>
//           <i className="fa-solid fa-calendar-days opacity-50"></i>
//           <span className={`${sidebarToggle ? "hidden" : ""} text-[18px] ml-4 opacity-50`}>Study Rooms</span>
//         </div>
//         <div className={`${sidebarToggle ? "hover:bg-yellow-600 hover:text-white rounded-md p-2.5 " :"p-2.5 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white"}`}>
//           <i className="fa-solid fa-chart-simple opacity-50"></i>
//           <span className={`${sidebarToggle ? "hidden" : ""} text-[18px] ml-4 opacity-50`}>Study Status</span>
//         </div>
//         <div className={`${sidebarToggle ? "hover:bg-yellow-600 hover:text-white rounded-md p-2.5 " :"p-2.5 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white"}`}>
//           <i className="fa-solid fa-envelope opacity-50"></i>
//           <span className={`${sidebarToggle ? "hidden" : ""} text-[18px] ml-4 opacity-50`}>Forums</span>
//         </div>
//         <div className={`${sidebarToggle ? "hover:bg-yellow-600 hover:text-white rounded-md p-2.5 " :"p-2.5 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white"}`}>
//           <i className="fa-solid fa-users opacity-50 text-[15px]"></i>
//           <span className={`${sidebarToggle ? "hidden" : ""} text-[18px] ml-4 opacity-50`}>Community</span>
//         </div>

       
//         <div className={`${sidebarToggle ? "hover:bg-yellow-600 hover:text-white rounded-md p-2.5 " :"p-2.5 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white"}`}>
//           <i className="fa-solid fa-calendar-days opacity-50"></i>
//           <span className={`${sidebarToggle ? "hidden" : ""} text-[18px] ml-4 opacity-50`}>Calendar</span>
//         </div>

//         <div className={`${sidebarToggle ? "hover:bg-yellow-600 hover:text-white rounded-md p-2.5 " :"p-2.5 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white"}`}>
//           <i className="fa-solid fa-inbox opacity-50"></i>
//           <span className={`${sidebarToggle ? "hidden" : ""} text-[18px] ml-4 opacity-50`}>Inbox</span>
//         </div>
//         <div className={`${sidebarToggle ? "hover:bg-yellow-600 hover:text-white rounded-md p-2.5 " :"p-2.5 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white"}`}>
//           <i className="fa-solid fa-gear opacity-50"></i>
//           <span className={`${sidebarToggle ? "hidden" : ""} text-[18px] ml-4 opacity-50`}>Settings</span>
//         </div>
//         <div className={`${sidebarToggle ? "mt-[220px] hover:bg-yellow-600 hover:text-white rounded-md p-2.5 " :"p-2.5 ml-8 mr-8 mt-[220px] flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black  hover:text-white"}`}>
//           <i className="fa-solid fa-right-from-bracket opacity-50"></i>
//           <span className={`${sidebarToggle ? "hidden" : ""} text-[18px] ml-4 opacity-50`}>Logout</span>
//         </div>
//       </div>
//   );
// };

// export default SideBar;

import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png'; 
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom'; 

const SideBar = ({ sidebarToggle, setSidebarToggle }) => {

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setSidebarToggle(true);
      } else {
        setSidebarToggle(false);
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
    <div className={`${sidebarToggle ? "w-[60px]" : "w-[263px]"} fixed top-0 bottom-0 xl:left-0 p-2 h-full text-center bg-sidebar transition-width duration-300`}>
      <div className={`${sidebarToggle ? "hidden" : "block"} flex`}>
        <div className="mt-1 mr-8 flex items-center">
          <img src={logo} alt="StudyHive" className="w-full h-auto ml-7" />
        </div>
        <div className="flex text-xl">
          <button onClick={() => setSidebarToggle(!sidebarToggle)}>
            <i className="flex fa-solid fa-angle-left border-black w-8 h-8 items-center justify-center opacity-50"></i>
          </button>
        </div>
      </div>
      <div className={`${sidebarToggle ? "" : "hidden"} flex text-xl ml-1 mb-24 mt-2`}>
        <button onClick={() => setSidebarToggle(!sidebarToggle)}>
          <i className="flex fa-solid fa-angle-right border-black w-8 h-8 items-center justify-center opacity-50"></i>
        </button>
      </div>
      {[
        { icon: "fa-house", label: "Home", path: "/home" },
        { icon: "fa-calendar-days", label: "Study Rooms", path: "/studyrooms"},
        { icon: "fa-chart-simple", label: "Study Status", path: "/studystats"},
        { icon: "fa-envelope", label: "Forums" },
        { icon: "fa-users", label: "Community" },
        { icon: "fa-calendar-days", label: "Calendar" },
        { icon: "fa-inbox", label: "Inbox" },
        { icon: "fa-gear", label: "Settings" },
        { icon: "fa-right-from-bracket", label: "Logout", marginTop: "mt-[220px]" },
      ].map((item, index) => (
        <Link to={item.path} key={index}>
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
