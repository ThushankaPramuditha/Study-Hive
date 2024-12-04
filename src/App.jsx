import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import RequireAuth from "./api/requireAuth";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

// Public components
import Home from "./components/Home";
import BoxCalendar from "./components/BoxCalendar";
import AdminLogin from "./components/AdminLogin";
import Login1 from "./components/Login1";

// Admin components
import AdminDashboard from "./components/AdminDashboard";
import UserList from "./components/UserList";
import CommunityList from "./components/CommunityList";
import ForumList from "./components/ForumList";
import StudyRoomList from "./components/StudyRoomList";
import Inquiry from "./components/Inquiry";
import AdminSetting from "./components/AdminSetting";
import AdminCalendar from "./components/AdminCalendar";

// User components
import Dashboard from "./components/Dashboard";
import StudyRooms from "./components/StudyRooms";
import StudyStats from "./components/StudyStats";
import MyCalendar from "./components/MyCalendar";
import Eventcard from "./components/Eventcard";
import Community from "./components/Community";
import Notification from "./components/Notification";
import Performance from "./components/PerformanceChart";
import StatisticsCard from "./components/StatisticsCard";
import Reminders from "./components/Reminders";
import Forums from "./components/Forums";
import Logout from "./components/Logout";
import ProfileSetup1 from "./components/ProfileSetup1";
import FindPartner from "./components/FindPartner";
import Settings from "./components/Settings";
import Viewpartner from "./components/ViewPartners";
import VideoCall from "./components/VideoCall";
import Studyroomcreate from "./components/Studyroomcreate";
import Personalinfo from "./components/Personal-info";
import Chat from "./components/Chat";
import VirtualRoom from "./components/VirtualRoom";
import StudyPartnerSearch from "./components/StudyPartnerSearch";
import SoloStudyRoom from "./components/SoloStudyRoom";
import CommunityPage from "./pages/CommunityPage";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/boxcalendar" element={<BoxCalendar />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/login" element={<Login1 />} />

            {/* Admin Routes */}
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

            {/* User Routes */}
            <Route element={<RequireAuth allowedRoles={["USER"]} />}>
              <Route path="/home" element={<Dashboard />} />
              <Route path="/studyrooms" element={<StudyRooms />} />
              <Route path="/studystats" element={<StudyStats />} />
              <Route path="/mycalendar" element={<MyCalendar />} />
              <Route path="/eventcard" element={<Eventcard />} />
              <Route path="/community" element={<Community />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/statisticscard" element={<StatisticsCard />} />
              <Route path="/reminders" element={<Reminders />} />
              <Route path="/forums" element={<Forums />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/profilesetup1" element={<ProfileSetup1 />} />
              <Route path="/findpartner" element={<FindPartner />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/ViewPartners" element={<Viewpartner />} />
              <Route path="/VideoCall" element={<VideoCall />} />
              <Route path="/studyroomcreate" element={<Studyroomcreate />} />
              <Route path="/personalinfo" element={<Personalinfo />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/virtualroom/:roomId/:userId" element={<VirtualRoom />} />
              <Route path="/studypartnersearch" element={<StudyPartnerSearch />} />
              <Route path="/solostudyroom" element={<SoloStudyRoom />} />
              <Route path="/communitypage" element={<CommunityPage />} />
            </Route>
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;

