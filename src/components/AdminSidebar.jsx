import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const AdminSidebar = () => {
  const location = useLocation();
  console.log('Current Path:', location.pathname);

  const isActive = (path) => {
    const isActivePath = location.pathname.startsWith(path);
    console.log(`Path: ${path}, Is Active: ${isActivePath}`);
    return isActivePath
      ? 'bg-yellow-600 text-white'
      : 'text-black opacity-50 hover:bg-yellow-600 hover:text-white';
  };
  return (
    <div className="fixed top-0 bottom-0 w-[263px] h-full text-center bg-[#FDF9C4]">
      <div className="mt-1 mr-8 flex items-center">
        <img src={logo} alt="StudyHive" className="w-full h-auto ml-5" />
      </div>
      <div className={`p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/AdminDashboard')}`}>
        <i className="fa-solid fa-chart-line"></i>
        <a href='/AdminDashboard' className="text-[18px] ml-4">Dashboard</a>
      </div>
      <div className={`p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/UserList')}`}>
        <i className="fa fa-user"></i>
        <a href='/UserList' className="text-[18px] ml-5">Users</a>
      </div>
      <div className={`p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/studyrooms')}`}>
        <i className="fa-solid fa-calendar-days"></i>
        <a href='/studyrooms' className="text-[18px] ml-5">Study Rooms</a>
      </div>
      <div className={`p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/forums')}`}>
        <i className="fa-solid fa-envelope"></i>
        <a href='/forums' className="text-[18px] ml-4">Forums</a>
      </div>
      <div className={`p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/community')}`}>
        <i className="fa-solid fa-users text-[15px]"></i>
        <a href='/community' className="text-[18px] ml-3">Community</a>
      </div>
      <div className={`p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/inquiries')}`}>
        <i className="fa-solid fa-message"></i>
        <a href='/Inquiry' className="text-[18px] ml-4">Inquiries</a>
      </div>
      <div className={`p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/calendar')}`}>
        <i className="fa-solid fa-calendar-days"></i>
        <a href='/calendar' className="text-[18px] ml-5">Calendar</a>
      </div>
      <div className={`p-2.5 mt-3 ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/settings')}`}>
        <i className="fa-solid fa-gear"></i>
        <a href='/settings' className="text-[18px] ml-4">Settings</a>
      </div>
      <div className={`p-2.5 mt-[220px] ml-8 mr-8 flex items-center rounded-md px-4 duration-300 cursor-pointer ${isActive('/logout')}`}>
        <i className="fa-solid fa-right-from-bracket"></i>
        <a href='/logout' className="text-[18px] ml-4">Logout</a>
      </div>
    </div>
  );
};

export default AdminSidebar;
