import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Notification from './Notification';
import Reminder from './Reminders';
import Calendar from './BoxCalendar';
import AdminReports from './AdminReports';
import '../App.css';

const AdminDashboard = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000); 

    return () => clearInterval(intervalId); 
  }, []);

  const formattedDateTime = currentDateTime.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 flex">
        <div className="mt-14 w-[220px] h-[720px] bg-[#CFDCB3] rounded-r-3xl absolute left-[263px] p-4">
          <p className="text-[20px] font-bold text-center mt-4 font-inter">Today Statistics</p>
          <p className="text-[12px] font-medium text-[#717171] text-center">{formattedDateTime}</p>
          <div className="flex flex-col items-center gap-6 mt-8">
            <div className="bg-white h-[120px] w-[180px] rounded-lg shadow-md p-2">
              <p className="text-[14px] font-semibold">New Users</p>
              <div className="flex items-center">
                <p className="text-[36px] font-semibold text-[#D4944C] ml-6">127</p>
                <div className="flex items-center text-[#D4944C] ml-2">
                  <FontAwesomeIcon icon={faArrowDown} className="text-[11px] text-red-600 ml-5 mt-4" />
                  <p className="text-[11px] text-red-600 ml-1 mt-4">1.5%</p>
                </div>
              </div>
              <hr className="w-[135px] mx-auto" />
              <p className="text-[10px] text-[#929292] ml-4 mt-2">Compared to yesterday</p>
            </div>
            <div className="bg-white h-[120px] w-[180px] rounded-lg shadow-md p-2">
              <p className="text-[14px] font-semibold">New Study Rooms</p>
              <div className="flex items-center">
                <p className="text-[36px] font-semibold text-[#D4944C] ml-6">71</p>
                <div className="flex items-center text-[#D4944C] ml-2">
                  <FontAwesomeIcon icon={faArrowUp} className="text-[11px] text-green-600 ml-10 mt-4" />
                  <p className="text-[11px] text-green-600 ml-1 mt-4">0.5%</p>
                </div>
              </div>
              <hr className="w-[135px] mx-auto" />
              <p className="text-[10px] text-[#929292] ml-4 mt-2">Compared to yesterday</p>
            </div>
            <div className="bg-white h-[120px] w-[180px] rounded-lg shadow-md p-2">
              <p className="text-[14px] font-semibold">New Communities</p>
              <div className="flex items-center">
                <p className="text-[36px] font-semibold text-[#D4944C] ml-6">2</p>
                <div className="flex items-center text-[#D4944C] ml-2">
                  <FontAwesomeIcon icon={faArrowDown} className="text-[11px] text-red-600 ml-14 mt-4" />
                  <p className="text-[11px] text-red-600 ml-1 mt-4">1.5%</p>
                </div>
              </div>
              <hr className="w-[135px] mx-auto" />
              <p className="text-[10px] text-[#929292] ml-4 mt-2">Compared to yesterday</p>
            </div>
            <div className="bg-white h-[120px] w-[180px] rounded-lg shadow-md p-2">
              <p className="text-[14px] font-semibold">New Forum Question</p>
              <div className="flex items-center">
                <p className="text-[36px] font-semibold text-[#D4944C] ml-6">321</p>
                <div className="flex items-center text-[#D4944C] ml-2">
                  <FontAwesomeIcon icon={faArrowUp} className="text-[11px] text-green-600 ml-5 mt-4" />
                  <p className="text-[11px] text-green-600 ml-1 mt-4">2.5%</p>
                </div>
              </div>
              <hr className="w-[135px] mx-auto" />
              <p className="text-[10px] text-[#929292] ml-4 mt-2">Compared to yesterday</p>
            </div>
          </div>
        </div>
        <div className="flex-1 ml-[273px] p-4">
          <div className="relative">
            <div className="absolute top-10 right-4 flex flex-col items-end">
              <p className="font-semibold text-[20px] font-inter">Hi, Ameesha!</p>
              <p className="font-semibold text-[14px] font-inter text-[#717171]">Welcome back</p>
            </div>
          </div>
          <div className="relative flex-1 mt-32 ml-[273px]">
            <div className="relative stats-wrapper">
              <div className="relative w-full grid grid-cols-3 gap-10 text-center mr-[48px]">
                <div className="flex flex-col items-center justify-center bg-white rounded-lg h-[100px] w-[180px]" style={{ boxShadow: '0px 8px 24px rgba(38, 45, 118, 0.15)' }}>
                  <h3 className="text-[14px] font-semibold">Total Users</h3>
                  <p className="text-[20px] font-semibold text-[#DF6F79]">356,890</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-lg h-[100px] w-[180px]" style={{ boxShadow: '0px 8px 24px rgba(38, 45, 118, 0.15)' }}>
                  <h3 className="text-[14px] font-semibold">Active Study Groups</h3>
                  <p className="text-[20px] font-semibold text-[#DF6F79]">10,123</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-lg h-[100px] w-[180px]" style={{ boxShadow: '0px 8px 24px rgba(38, 45, 118, 0.15)' }}>
                  <h3 className="text-[14px] font-semibold">Active Communities</h3>
                  <p className="text-[20px] font-semibold text-[#DF6F79]">567</p>
                </div>
              </div>
            </div>
            <div className="mt-14 -ml-10">
              <AdminReports />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-4 mt-4">
          <div className="w-[300px] h-[340px] border-2 border-gray-100 rounded-lg bg-white mb-10 mt-8">
            <Notification />
          </div>
          <div className="w-[300px] h-auto border-2 border-gray-100 rounded-lg bg-white">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
