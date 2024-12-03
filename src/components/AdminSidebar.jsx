import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const AdminSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname.startsWith(path)
      ? 'bg-yellow-600 text-white'
      : 'text-black opacity-50 hover:bg-yellow-600 hover:text-white';
  };

  const handleResize = () => {
    if (window.innerWidth < 1280) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  };

  useEffect(() => {
    handleResize(); // Set the initial state based on the window size

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`fixed top-0 bottom-0 ${isSidebarOpen ? "w-[263px]" : "w-[60px]"} h-full text-center bg-[#FDF9C4] transition-width duration-300`}>
      <div className="flex items-center justify-center mt-1">
        <img src={logo} alt="StudyHive" className={`${isSidebarOpen ? "w-full" : "w-[50px]"} h-auto ml-5`} />
      </div>
      <div className="flex flex-col mt-3 items-center xl:items-start xl:ml-8 xl:mr-8 xl:mt-3">
        <div className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/AdminDashboard')} ${isSidebarOpen ? "xl:justify-start" : "justify-center"}`}>
          <i className="fa-solid fa-chart-line text-[20px] xl:text-[24px]"></i>
          <Link to='/AdminDashboard' className={`${isSidebarOpen ? "ml-4" : "hidden"} text-[18px] xl:block`}>Dashboard</Link>
        </div>
        <div className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/UserList')} ${isSidebarOpen ? "xl:justify-start" : "justify-center"}`}>
          <i className="fa fa-user text-[20px] xl:text-[24px]"></i>
          <Link to='/UserList' className={`${isSidebarOpen ? "ml-4" : "hidden"} text-[18px] xl:block`}>Users</Link>
        </div>
        <div className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/StudyRoomList')} ${isSidebarOpen ? "xl:justify-start" : "justify-center"}`}>
          <i className="fa-solid fa-calendar-days text-[20px] xl:text-[24px]"></i>
          <Link to='/StudyRoomList' className={`${isSidebarOpen ? "ml-4" : "hidden"} text-[18px] xl:block`}>Study Rooms</Link>
        </div>
        <div className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/ForumList')} ${isSidebarOpen ? "xl:justify-start" : "justify-center"}`}>
          <i className="fa-solid fa-envelope text-[20px] xl:text-[24px]"></i>
          <Link to='/ForumList' className={`${isSidebarOpen ? "ml-4" : "hidden"} text-[18px] xl:block`}>Forums</Link>
        </div>
        <div className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/CommunityList')} ${isSidebarOpen ? "xl:justify-start" : "justify-center"}`}>
          <i className="fa-solid fa-users text-[20px] xl:text-[24px]"></i>
          <Link to='/CommunityList' className={`${isSidebarOpen ? "ml-4" : "hidden"} text-[18px] xl:block`}>Community</Link>
        </div>
        <div className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/Inquiry')} ${isSidebarOpen ? "xl:justify-start" : "justify-center"}`}>
          <i className="fa-solid fa-message text-[20px] xl:text-[24px]"></i>
          <Link to='/Inquiry' className={`${isSidebarOpen ? "ml-4" : "hidden"} text-[18px] xl:block`}>Inquiries</Link>
        </div>
        <div className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/AdminCalendar')} ${isSidebarOpen ? "xl:justify-start" : "justify-center"}`}>
          <i className="fa-solid fa-calendar-days text-[20px] xl:text-[24px]"></i>
          <Link to='/AdminCalendar' className={`${isSidebarOpen ? "ml-4" : "hidden"} text-[18px] xl:block`}>Calendar</Link>
        </div>
        <div className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/AdminSetting')} ${isSidebarOpen ? "xl:justify-start" : "justify-center"}`}>
          <i className="fa-solid fa-gear text-[20px] xl:text-[24px]"></i>
          <Link to='/AdminSetting' className={`${isSidebarOpen ? "ml-4" : "hidden"} text-[18px] xl:block`}>Settings</Link>
        </div>
        <div className={`p-2.5 mt-[40%] flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/logout')} ${isSidebarOpen ? "xl:justify-start" : "justify-center"}`} onClick={() => console.log('Logout')}>
          <i className="fa-solid fa-right-from-bracket text-[20px] xl:text-[24px]"></i>
          <Link to='/logout' className={`${isSidebarOpen ? "ml-4" : "hidden"} text-[18px] xl:block`}>Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
