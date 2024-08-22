import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const AdminSidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname.startsWith(path)
      ? 'bg-yellow-600 text-white'
      : 'text-black opacity-50 hover:bg-yellow-600 hover:text-white';
  };

  return (
    <div className="flex">
    <div className="fixed top-0 bottom-0 w-[263px] h-full text-center bg-[#FDF9C4]">
      
      <div className="mt-1 mr-8 flex items-center">
        <img src={logo} alt="StudyHive" className="w-full h-auto ml-5" />
      </div>
      <div className={`p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/AdminDashboard')}`}>
        <i className="fa-solid fa-chart-line"></i>
        <Link to='/AdminDashboard' className="text-[18px] ml-4">Dashboard</Link>
      </div>
      <div className={`p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/UserList')}`}>
        <i className="fa fa-user"></i>
        <Link to='/UserList' className="text-[18px] ml-5">Users</Link>
      </div>
      <div className={`p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/StudyRoomList')}`}>
        <i className="fa-solid fa-calendar-days"></i>
        <Link to='/StudyRoomList' className="text-[18px] ml-5">Study Rooms</Link>
      </div>
      <div className={`p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/ForumList')}`}>
        <i className="fa-solid fa-envelope"></i>
        <Link to='/ForumList' className="text-[18px] ml-4">Forums</Link>
      </div>
      <div className={`p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/CommunityList')}`}>
        <i className="fa-solid fa-users text-[15px]"></i>
        <Link to='/CommunityList' className="text-[18px] ml-3">Community</Link>
      </div>
      <div className={`p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/Inquiry')}`}>
        <i className="fa-solid fa-message"></i>
        <Link to='/Inquiry' className="text-[18px] ml-4">Inquiries</Link>
      </div>
      <div className={`p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/AdminCalendar')}`}>
        <i className="fa-solid fa-calendar-days"></i>
        <Link to='/AdminCalendar' className="text-[18px] ml-5">Calendar</Link>
      </div>
      <div className={`p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/AdminSetting')}`}>
        <i className="fa-solid fa-gear"></i>
        <Link to='/AdminSetting' className="text-[18px] ml-4">Settings</Link>
      </div>
      <div className={`p-2.5 mt-[220px] ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/logout')}`}>
        <i className="fa-solid fa-right-from-bracket"></i>
        <Link to='/logout' className="text-[18px] ml-4">Logout</Link>
      </div>
    </div>
    </div>
  );
};

export default AdminSidebar;
