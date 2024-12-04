import React, { useEffect, useRef } from 'react';
import logo from '../assets/images/logo.png'; 
import 'tailwindcss/tailwind.css';
import { Link, useNavigate } from 'react-router-dom'; 
import { logout } from '../api/authService';
import axios from 'axios';

const SideBar = ({ sidebarToggle, setSidebarToggle }) => {
  const divRef1 = useRef(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const message = await logout();
      console.log(message);
      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setSidebarToggle(true);
        if (divRef1.current) divRef1.current.style.display = 'block';
      } else {
        setSidebarToggle(false);
        if (divRef1.current) divRef1.current.style.display = 'none';
      }
    };

    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the sidebar state based on initial window size
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setSidebarToggle]);

  const menuItems = [
    { icon: "fa-house", label: "Home", path: "/home" },
    { icon: "fa-calendar-days", label: "Study Rooms", path: "/studyrooms" },
    { icon: "fa-chart-simple", label: "Study Status", path: "/studystats" },
    { icon: "fa-envelope", label: "Forums", path: "/forums" },
    { icon: "fa-inbox", label: "Inbox", path: "/chat" },
    { icon: "fa-users", label: "Community", path: "/communitypage" },
    { icon: "fa-gear", label: "Settings", path: "/settings" },
    { icon: "fa-right-from-bracket", label: "Logout", marginTop: "", isLogout: true },
  ];

  return (
    <div className={`${sidebarToggle ? "w-[60px]" : "w-[263px]"} fixed top-0 bottom-0 xl:left-0 p-2 h-auto text-center bg-sidebar transition-width duration-300`}>
      <div className={`${sidebarToggle ? "hidden" : "block"} flex`}>
        <div className="mt-1 mr-8 flex items-center">
          <img src={logo} alt="StudyHive" className="w-full h-auto ml-7" />
        </div>
        <button onClick={() => setSidebarToggle(!sidebarToggle)}>
          <div ref={divRef1} className="flex text-xl">
            <i className="flex fa-solid fa-angle-left border-black w-8 h-8 items-center justify-center opacity-50"></i>
          </div>
        </button>
      </div>
      <button onClick={() => setSidebarToggle(!sidebarToggle)}>
        <div className={`${sidebarToggle ? "" : "hidden"} flex text-xl ml-1 mb-24 mt-2`}>
          <i className="flex fa-solid fa-angle-right border-black w-8 h-8 items-center justify-center opacity-50"></i>
        </div>
      </button>
      {menuItems.map((item, index) => (
        <Link to={item.path || "#"} key={index}>
          <div 
            className={`${sidebarToggle ? `hover:bg-yellow-600 hover:text-white rounded-md p-2.5 ${item.marginTop || ""}` : `p-2.5 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-600 text-black hover:text-white ${item.marginTop || ""}`}${location.pathname === item.path ? "bg-yellow-600 text-white" : "hover:bg-yellow-600 hover:text-white"}`}
            onClick={item.isLogout ? handleLogout : undefined}
          >
            <i className={`fa-solid ${item.icon} opacity-50`}></i>
            <span className={`${sidebarToggle ? "hidden" : "text-[18px] ml-4 opacity-50"}`}>{item.label}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
