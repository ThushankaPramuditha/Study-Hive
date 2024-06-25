import React from 'react';
import { Link } from 'react-router-dom';
import personalinfo from '../assets/images/personalinfo.png';
import loginSettings from '../assets/images/loginSettings.png';
import SideBarnNavbar from './SideBarnNavbar';
import audio from '../assets/images/audio.png';
import studymaterials from '../assets/images/studymaterials.png';
import preference from '../assets/images/preference.png';
import notifications from '../assets/images/notifications.png';
import privacy from '../assets/images/privacy.png';
import tools from '../assets/images/tools.png';

const Settings = () => {
  return (
    <div className="">
      <SideBarnNavbar />

      <div className="ml-[300px] mt-[20px] flex-1">
        <p className="text-2xl font-semibold mb-2">Settings Page</p>
        <p className="font-bold">
          <span className="font-light">
            <Link to="/profile" className="underline font-bold mb-4">Go to profile</Link>
          </span>
        </p>

        <div className="container mx-auto grid grid-cols-3 gap-8 mt-10 justify-center w-[90%]">
          <Link to="/settings/personal-info" className="content-card bg-white p-5 my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 w-full h-48 relative">
            <div className="absolute top-2 left-2">
              <img src={personalinfo} alt="Personal info" />
            </div>
            <h3 className="text-xl text-[#222] font-bold mb-5 mt-12">Personal info</h3>
            <p className="text-[#717171]">Provide personal details and how we can reach you</p>
          </Link>

          <Link to="/settings/login-security" className="content-card bg-white p-5 my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 w-full h-48 relative">
            <div className="absolute top-2 left-2">
              <img src={loginSettings} alt="Login & security" />
            </div>
            <h3 className="text-xl text-[#222] font-bold mb-5 mt-12">Login & security</h3>
            <p className="text-[#717171]">Update your password and secure your account</p>
          </Link>

          <Link to="/settings/audio-video" className="content-card bg-white p-5 my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 w-full h-48 relative">
            <div className="absolute top-2 left-2">
              <img src={audio} alt="Audio & Video" />
            </div>
            <h3 className="text-xl text-[#222] font-bold mb-5 mt-12">Audio & Video</h3>
            <p className="text-[#717171]">Review payments, payouts, coupons, and gift cards</p>
          </Link>

          <Link to="/settings/study-materials" className="content-card bg-white p-5 my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 w-full h-48 relative">
            <div className="absolute top-2 left-2">
              <img src={studymaterials} alt="Study Materials" />
            </div>
            <h3 className="text-xl text-[#222] font-bold mb-5 mt-12">Study Materials</h3>
            <p className="text-[#717171]">Manage your Study Materials</p>
          </Link>

          <Link to="/settings/notifications" className="content-card bg-white p-5 my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 w-full h-48 relative">
            <div className="absolute top-2 left-2">
              <img src={notifications} alt="Notifications" />
            </div>
            <h3 className="text-xl text-[#222] font-bold mb-5 mt-12">Notifications</h3>
            <p className="text-[#717171]">Choose notification preferences and how you want to be contacted</p>
          </Link>

          <Link to="/settings/privacy-sharing" className="content-card bg-white p-5 my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 w-full h-48 relative">
            <div className="absolute top-2 left-2">
              <img src={privacy} alt="Privacy & sharing" />
            </div>
            <h3 className="text-xl text-[#222] font-bold mb-5 mt-12">Privacy & sharing</h3>
            <p className="text-[#717171]">Manage your personal data, connected services, data sharing </p>
          </Link>

          <Link to="/settings/global-preferences" className="content-card bg-white p-5 my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 w-full h-48 relative">
            <div className="absolute top-2 left-2">
              <img src={preference} alt="Global preferences" />
            </div>
            <h3 className="text-xl text-[#222] font-bold mb-5 mt-12">Global preferences</h3>
            <p className="text-[#717171]">Set your default language, currency, and timezone</p>
          </Link>

          <Link to="/settings/professional-hosting-tools" className="content-card bg-white p-5 my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 w-full h-48 relative">
            <div className="absolute top-2 left-2">
              <img src={tools} alt="Professional hosting tools" />
            </div>
            <h3 className="text-xl text-[#222] font-bold mb-5 mt-12">Professional hosting tools</h3>
            <p className="text-[#717171]">Get professional tools if you manage several properties on Airbnb</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Settings;
