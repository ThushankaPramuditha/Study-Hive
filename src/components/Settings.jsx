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
        <p className="text-2xl font-semibold mb-1">Settings</p>
        <p className="font-bold">
          <span className="font-light">
            <Link to="/profile" className="underline font-bold mb-2 text-[12px]">Go to profile</Link>
          </span>
        </p>

        <div className="container mx-auto grid grid-cols-2 gap-4 mt-6 justify-center w-[90%]">
          <Link to="/Personalinfo" className="content-card bg-white p-5 my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 w-full h-40 relative hover:shadow-yellow">
            <div className="absolute top-5 left-5">
              <img src={personalinfo} alt="Personal info" className='w-6 h-6'/>
            </div>
            <h3 className=" text-[#222] font-bold mb-3 mt-9">Personal info</h3>
            <p className="text-[#717171] text-[12px]">Provide personal details and how we can reach you</p>
          </Link>

          <Link to="/settings/login-security" className="content-card bg-white p-5 my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 w-full h-40 relative">
            <div className="absolute top-5 left-5">
              <img src={loginSettings} alt="Login & security" className='w-6 h-6' />
            </div>
            <h3 className=" text-[#222] font-bold mb-3 mt-9">Login & security</h3>
            <p className="text-[#717171] text-[12px]">Update your password and secure your account</p>
          </Link>

        
          <Link to="/settings/study-materials" className="content-card bg-white p-5 my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 w-full h-40 relative">
            <div className="absolute top-5 left-5">
              <img src={studymaterials} alt="Study Materials" className='w-6 h-6' />
            </div>
            <h3 className="text-[#222] font-bold mb-3 mt-9">Study Materials</h3>
            <p className="text-[#717171] text-[12px]">Manage your Study Materials</p>
          </Link>

          <Link to="/settings/notifications" className="content-card bg-white p-5 my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 w-full h-40 relative">
            <div className="absolute top-5 left-5">
              <img src={notifications} alt="Notifications" className='w-6 h-6'/>
            </div>
            <h3 className="text-[#222] font-bold mb-3 mt-9">Notifications</h3>
            <p className="text-[#717171] text-[12px]">Choose notification preferences and how you want to be contacted</p>
          </Link>

          <Link to="/settings/privacy-sharing" className="content-card bg-white p-5 my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 w-full h-40 relative">
            <div className="absolute top-5 left-5">
              <img src={privacy} alt="Privacy & sharing" className='w-6 h-6' />
            </div>
            <h3 className="text-[#222] font-bold mb-3 mt-9">Privacy & sharing</h3>
            <p className="text-[#717171] text-[12px]">Manage your personal data, connected services, data sharing </p>
          </Link>

         
        </div>
      </div>
    </div>
  );
};


export default Settings;