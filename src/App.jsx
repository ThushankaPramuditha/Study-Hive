import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import StudyRooms from './components/StudyRooms';
import StudyStats from './components/StudyStats';
import MyCalendar from './components/MyCalendar';
import Eventcard from './components/Eventcard';
import BoxCalendar from './components/BoxCalendar';
import Community from './components/Community';
import Notification from './components/Notification';
import Performance from './components/PerformanceChart';
import StatisticsCard from './components/StatisticsCard';
import Reminders from './components/Reminders';
import Login from './components/Login';
import Login1 from './components/Login1';
import Forums from './components/Forums1';
import Logout from './components/Logout';
import ProfileSetup1 from './components/ProfileSetup1';
import Settings from './components/Settings';
import FindPartner from './components/FindPartner';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Viewpartner from './components/ViewPartners';
import AdminDashboard from './components/AdminDashboard';
import CommunityList from './components/CommunityList';
import ForumList from './components/ForumList';
import UserList from './components/UserList';
import StudyRoomList from './components/StudyRoomList';
import Inquiry from './components/Inquiry';
import AdminSetting from './components/AdminSetting';
import AdminCalendar from './components/AdminCalendar';
import Personalinfo from './components/Personal-info';
 import Userinquiries from "./components/userinquiries";
 import { Navigate } from 'react-router-dom';

 const ProtectedRoute = ({ children, requiredRole }) => {
  const role = localStorage.getItem('role');
  
  if (!role || role !== requiredRole) {
      // If no role or role doesn't match, redirect to login
      return <Navigate to="/login" replace />;
  }
  
  return children;
};
 

function App() {
  return (
    <Router>
      {/* <SideBar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} /> */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Dashboard />} />
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
          <Route path="/login" element={<Login />} />
          <Route path="/profilesetup1" element={<ProfileSetup1 />} />
          <Route path="/login1" element={<Login1 />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/findpartner" element={<FindPartner />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/Personalinfo" element={<Personalinfo />} />
          <Route path="/ViewPartners" element={<Viewpartner />} />
          {/* <Route path="/AdminDashboard" element={<AdminDashboard />} /> */}
          {/* <Route path="/CommunityList" element={<CommunityList />} />
          <Route path="/ForumList" element={<ForumList />} />
          <Route path="/UserList" element={<UserList />} />
          <Route path="/StudyRoomList" element={<StudyRoomList />} />
          <Route path="/Inquiry" element={<Inquiry />} />
          <Route path="/AdminSetting" element={<AdminSetting />} />
          <Route path="/AdminCalendar" element={<AdminCalendar />} /> */}
          <Route path="/userinquiries" element={<Userinquiries />} />

          <Route path="/CommunityList" 
                        element={
                            <ProtectedRoute requiredRole="admin">
                                <CommunityList />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/ForumList" 
                        element={
                            <ProtectedRoute requiredRole="admin">
                                <ForumList />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/UserList" 
                        element={
                            <ProtectedRoute requiredRole="admin">
                                <UserList />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/StudyRoomList" element={ <ProtectedRoute requiredRole="admin"><StudyRoomList /></ProtectedRoute>} />
                    <Route path="/Inquiry" 
                        element={
                            <ProtectedRoute requiredRole="admin">
                                <Inquiry />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/AdminSetting" 
                        element={
                            <ProtectedRoute requiredRole="admin">
                                <AdminSetting />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/AdminCalendar" 
                        element={
                            <ProtectedRoute requiredRole="admin">
                                <AdminCalendar />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/userinquiries" 
                        element={
                            <ProtectedRoute requiredRole="admin">
                                <Userinquiries />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/AdminDashboard" 
                        element={
                            <ProtectedRoute requiredRole="admin">
                                <AdminDashboard />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </div>
        </Router>
  );
}

export default App;