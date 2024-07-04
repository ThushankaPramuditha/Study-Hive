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
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';



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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
