import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import ProfileSetup1 from './components/ProfileSetup1';
import Settings from './components/Settings';  
import Personalinfo from './components/Personal-info';
import Dashboard from './components/Dashboard';
import Calendar from './components/MyCalendar';
import Community from './components/Community';
import StudyRooms from './components/StudyRooms';
import Room from './components/Room';
import AdminDashboard from './components/AdminDashboard';
import UserList from './components/UserList';
import Inquiry from './components/Inquiry';
import StudyRoomList from './components/StudyRoomList';
import ForumList from './components/ForumList';
import CommunityList from './components/CommunityList';
import FindPartner from './components/FindPartner';
import ViewPartners from './components/ViewPartners';
import Notification from './components/Notification';
import Performance from './components/PerformanceChart';
import StatisticsCard from './components/StatisticsCard';
import Reminders from './components/Reminders';
import Login from './components/Login';
import Login1 from './components/Login1';
import Forums from './components/Forums';
import ProfileSetup1 from './components/ProfileSetup1';
import SchedulePage from './components/SchedulePage';
import Forums1 from './components/Forums1';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';


const App = () => {
  const location = useLocation();
  const hideHeaderPaths = [
    '/login', 
    '/ProfileSetup1', 
    '/settings', 
    '/Personal-info', 
    '/Dashboard', 
    '/calendar', 
    '/StudyRooms', 
    '/community', 
    '/Room',  
    '/AdminDashboard', 
    '/UserList',
    '/Inquiry',
    '/StudyRoomList',
    '/ForumList',
    '/CommunityList',
    '/FindPartner',
    '/ViewPartners'
  ];

  return (
    <>
      {!hideHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ProfileSetup1" element={<ProfileSetup1 />} />
        <Route path="/settings" element={<Settings />} /> 
        <Route path="/Personal-info" element={<Personalinfo />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/community" element={<Community />} />
        <Route path="/StudyRooms" element={<StudyRooms />} />
        <Route path="/Room" element={<Room />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/UserList" element={<UserList />} />
        <Route path="/Inquiry" element={<Inquiry />} />
        <Route path="/StudyRoomList" element={<StudyRoomList />} />
         <Route path="/ForumList" element={<ForumList />} />
        <Route path="/CommunityList" element={<CommunityList />} /> 
        <Route path="/FindPartner" element={<FindPartner />} /> 
        <Route path="/ViewPartners" element={<ViewPartners />} /> 
      </Routes>
    </>
  );
};

const AppWrapper = () => {
  return (
    <Router>

      <App />
      {/* <SideBar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} /> */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login1" element={<Login1 />} />
          <Route path="/profilesetup1" element={<ProfileSetup1 />} />
          <Route path="/studyrooms" element={<StudyRooms />} />
          <Route path="/studystats" element={<StudyStats />} />
          <Route path="/mycalendar" element={<MyCalendar />} />
          <Route path="/eventcard" element={<Eventcard />} />
          <Route path="/boxcalendar" element={<BoxCalendar />} />
          <Route path="/community" element={<Community />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/statisticscard" element={<StatisticsCard />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/forums1" element={<Forums1 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppWrapper;
