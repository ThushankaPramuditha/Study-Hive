import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown , faArrowUp } from '@fortawesome/free-solid-svg-icons';

const AdminDashboard = () => {

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(intervalId); // Clean up interval on component unmount
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
      <div className="flex-1 flex relative">
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
              <hr className=" w-[135px] mx-auto" />
              <p className="text-[10px] text-[#929292] ml-4 mt-2 ">Compared to yesterday</p>
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
              <hr className=" w-[135px] mx-auto" />
              <p className="text-[10px] text-[#929292] ml-4 mt-2 ">Compared to yesterday</p>
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
              <hr className=" w-[135px] mx-auto" />
              <p className="text-[10px] text-[#929292] ml-4 mt-2 ">Compared to yesterday</p>
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
              <hr className=" w-[135px] mx-auto" />
              <p className="text-[10px] text-[#929292] ml-4 mt-2 ">Compared to yesterday</p>
            </div>
          </div>
          {/* Additional content for the green box */}
        </div>
        <div className="flex-1 p-4">
          {/* Content for the main dashboard area */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
