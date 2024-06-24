import React from 'react';
import { Link } from 'react-router-dom';
import personalinfo from '../assets/images/personalinfo.png' 


const Settings = () => {
  return (
        <div className="p-20">
          <p className="text-2xl font-semibold mb-2">Settings Page</p>
          <p className="font-bold">
            <span className='font-light'>
              <Link to="/profile" className="underline font-bold">Go to profile</Link>
            </span>
          </p>
    
          <div className="container mx-auto flex items-row gap-8 mt-10 justify-center w-[100%]">
            <div className="content-card bg-white p-5 my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 mt-5">
              <div className="flex items-center justify-center">
                <div className="rounded-full bg-customOlive w-40 h-18 flex items-center justify-center mb-5 mt-5">
                  <i className="fa-solid fa-users text-customOlive text-3xl"></i>
                </div>
              </div>
              <div className="fixed top-4 left-4 text-gray-600 text-sm z-50">
                  <img src={personalinfo} />
      </div>
              <h3 className="text-xl text-black font-bold mb-5">Personal info</h3>
              <p className="text-customGray">Provide personal details and how we can reach you</p>
            </div>
    
            <div className="content-card bg-white p-5 my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 mt-5">
              <div className="flex items-center justify-center">
                <div className="rounded-full bg-customYellow w-40 h-18 flex items-center justify-center mb-5 mt-5">
                  <i className="fas fa-user-tie text-customYellow text-3xl"></i>
                </div>
              </div>
              <div className="fixed top-4 left-4 text-gray-600 text-sm z-50">
                  <img src={personalinfo} />
      </div>
              <h3 className="text-xl text-customBlue font-bold mb-5">Login & security</h3>
              <p className="text-customGray">Update your password and secure your account</p>
            </div>
    
            <div className="content-card bg-white p-5 my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 mt-5">
              <div className="flex items-center justify-center">
                <div className="rounded-full bg-customOrange w-40 h-18 flex items-center justify-center mb-5 mt-5">
                  <i className="fa-solid fa-book text-customOrange text-3xl"></i>
                </div>
              </div>
              <div className="fixed top-4 left-4 text-gray-600 text-sm z-50">
                  <img src={personalinfo} />
      </div>
              <h3 className="text-xl text-customBlue font-bold mb-5">Audio & Video </h3>
              <p className="text-customGray">Review payments, payouts, coupons, and gift cards</p>
            </div>
          </div>
        </div>
      );
    };
    
    export default Settings;
    
  