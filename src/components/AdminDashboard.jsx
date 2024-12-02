import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Notification from './Notification';
import Calendar from './BoxCalendar';
import AdminReports from './AdminReports';
import '../App.css';

const AdminDashboard = () => {
  const [dashboardStats, setDashboardStats] = useState({
    newUsersToday: 0,
    newStudyRoomsToday: 0,
    newForumQuestionsToday: 0,
    totalUsers: 0,
    totalStudyRooms: 0,
    totalForumQuestions: 0,
  });
  const [loading, setLoading] = useState(true);

  // Format the current date and time
  const formattedDateTime = new Date().toLocaleString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const response = await fetch('http://localhost:8090/api/admin/dashboard-stats');
        const data = await response.json();
        console.log('Fetched data:', data); // Log the fetched data
        setDashboardStats(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        setLoading(false);
      }
    };

    fetchDashboardStats();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display a loading state until data is fetched
  }

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
                <p className="text-[36px] font-semibold text-[#D4944C] ml-16">
                  {dashboardStats.newUsersToday}
                </p>
      
              </div>
              <p className="text-[10px] text-[#929292] ml-4 mt-2">Today</p>
            </div>
            <div className="bg-white h-[120px] w-[180px] rounded-lg shadow-md p-2">
              <p className="text-[14px] font-semibold">New Study Rooms</p>
              <div className="flex items-center">
                <p className="text-[36px] font-semibold text-[#D4944C] ml-16">
                  {dashboardStats.newStudyRoomsToday}
                </p>
              
              </div>
              <p className="text-[10px] text-[#929292] ml-4 mt-2">Today</p>
            </div>
            <div className="bg-white h-[120px] w-[180px] rounded-lg shadow-md p-2">
              <p className="text-[14px] font-semibold">New Forum Questions</p>
              <div className="flex items-center">
                <p className="text-[36px] font-semibold text-[#D4944C]  ml-16">
                  {dashboardStats.newForumQuestionsToday}
                </p>
            
              </div>
              <p className="text-[10px] text-[#929292] ml-4 mt-2">Today</p>
            </div>
          </div>
        </div>
        <div className="flex-1 ml-[263px] p-4">
          <div className="relative flex-1 mt-32 ml-[273px]">
            <div className="relative stats-wrapper">
              <div className="relative w-full grid grid-cols-3 gap-10 text-center mr-[48px]">
                <div className="flex flex-col items-center justify-center bg-white rounded-lg h-[100px] w-[180px]" style={{ boxShadow: '0px 8px 24px rgba(38, 45, 118, 0.15)' }}>
                  <h3 className="text-[14px] font-semibold">Total Users</h3>
                  <p className="text-[20px] font-semibold text-[#DF6F79]">{dashboardStats.totalUsers}</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-lg h-[100px] w-[180px]" style={{ boxShadow: '0px 8px 24px rgba(38, 45, 118, 0.15)' }}>
                  <h3 className="text-[14px] font-semibold">Total Study Rooms</h3>
                  <p className="text-[20px] font-semibold text-[#DF6F79]">{dashboardStats.totalStudyRooms}</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-lg h-[100px] w-[180px]" style={{ boxShadow: '0px 8px 24px rgba(38, 45, 118, 0.15)' }}>
                  <h3 className="text-[14px] font-semibold">Total Forum Questions</h3>
                  <p className="text-[20px] font-semibold text-[#DF6F79]">{dashboardStats.totalForumQuestions}</p>
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