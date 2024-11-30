import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import StudyRooms from "./components/StudyRooms";
import StudyStats from "./components/StudyStats";
import MyCalendar from "./components/MyCalendar";
import Eventcard from "./components/Eventcard";
import BoxCalendar from "./components/BoxCalendar";
import Community from "./components/Community";
import Notification from "./components/Notification";
import Performance from "./components/PerformanceChart";
import StatisticsCard from "./components/StatisticsCard";
import Reminders from "./components/Reminders";
import AdminLogin from "./components/AdminLogin";
import Login1 from "./components/Login1";
import Forums from "./components/Forums";
import Logout from "./components/Logout";
import ProfileSetup1 from "./components/ProfileSetup1";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import FindPartner from "./components/FindPartner";
import Settings from "./components/Settings";
import Viewpartner from "./components/ViewPartners";
import AdminDashboard from "./components/AdminDashboard";
import CommunityList from "./components/CommunityList";
import ForumList from "./components/ForumList";
import UserList from "./components/UserList";
import StudyRoomList from "./components/StudyRoomList";
import Inquiry from "./components/Inquiry";
import AdminSetting from "./components/AdminSetting";
import AdminCalendar from "./components/AdminCalendar";
import VideoCall from "./components/VideoCall";
import Studyroomcreate from "./components/Studyroomcreate";
import RequireAuth from "./api/requireAuth";
import VirtualRoom from "./components/VirtualRoom";

function App() {
  return (
    <Router>
      {/* <SideBar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} /> */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boxcalendar" element={<BoxCalendar />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/login" element={<Login1 />} />
          

          <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/UserList" element={<UserList />} />
            <Route path="/CommunityList" element={<CommunityList />} />
            <Route path="/ForumList" element={<ForumList />} />

            <Route path="/StudyRoomList" element={<StudyRoomList />} />
            <Route path="/Inquiry" element={<Inquiry />} />
            <Route path="/AdminSetting" element={<AdminSetting />} />
            <Route path="/AdminCalendar" element={<AdminCalendar />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={["USER"]} />}>
          <Route path="/VideoCall" element={<VideoCall />} />
          <Route path="/studyroomcreate" element={<Studyroomcreate />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/findpartner" element={<FindPartner />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/ViewPartners" element={<Viewpartner />} />
          <Route path="/profilesetup1" element={<ProfileSetup1 />} />
          <Route path="/community" element={<Community />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/statisticscard" element={<StatisticsCard />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/studyrooms" element={<StudyRooms />} />
          <Route path="/studystats" element={<StudyStats />} />
          <Route path="/mycalendar" element={<MyCalendar />} />
          <Route path="/eventcard" element={<Eventcard />} />
          <Route path="/virtualroom/:roomId/:userId" element={<VirtualRoom />} />
          </Route>

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
