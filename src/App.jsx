import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import ProfileSetup1 from './components/ProfileSetup1';
import Settings from './components/Settings';  
import Personalinfo from './components/Personal-info' ;
import Dashboard from './components/Dashboard' ;
import Calendar from './components/MyCalendar' ;
import Community from  './components/Community';
import StudyRooms from  './components/StudyRooms';






const App = () => {
  const location = useLocation();
  const hideHeaderPaths = ['/login', '/ProfileSetup1' , '/settings' , '/Personal-info' , '/Dashboard' , '/calendar' , '/StudyRooms' , '/community'];

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
     

      </Routes>
    </>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
