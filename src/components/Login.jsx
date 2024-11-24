// Login.jsx
import React, { useState } from 'react';
import login from '../assets/images/login.png';
import back from '../assets/images/back.png'; // Example PNG import
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'; // Import the CSS file

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsLogin(!isLogin); 
  };

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/ProfileSetup1');
  };

  return (
    <div className="w-full min-h-screen flex items-start relative">
      <div className="absolute top-4 right-4 text-gray-600 text-sm cursor-pointer">
        <Link to="/" className="flex items-center">
          <img src={back} alt="Back" className="inline-block w-4 h-4 mr-0.1" />
          Back
        </Link>
      </div>

      <div className="relative w-1/2 h-screen flex flex-col">
        <img src={login} className="w-full h-full object-cover" alt="Login" />
      </div>


      <div className="w-1/2 h-full flex justify-center p-20 mt-10">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md shadow-container" style={{ boxShadow: '0px 8px 24px rgba(38, 45, 118, 0.15)' }}>
          <p className="mb-6 text-center text-black font-inter text-lg font-normal">
            Welcome to StudyHive
          </p> 
          <div className="flex flex-col items-center mb-6">
            <div 
              className="relative w-60 h-12 bg-[#FDF58B] rounded-full cursor-pointer flex items-center p-2.5"
              onClick={handleToggle}
            >
              <div
                className={`absolute left-2 w-28 h-8 bg-yellow-400 rounded-full transition-transform transform ${isLogin ? '' : 'translate-x-full'}`}
              ></div>
              <div className="w-full flex justify-between text-sm font-bold text-gray-700 z-10">
                <span className={`flex-1 text-center ${isLogin ? 'text-black ' : 'font-normal'}`}>Login</span>
                <span className={`flex-1 text-center ${isLogin ? 'font-normal' : 'text-black '}`}>Register</span>
              </div>
            </div>
          </div>
          <p className="mb-6 text-justify font-inter text-sm text-gray-700">
            Join the largest global student community online and say goodbye to lack of motivation.
          </p>

          {isLogin ? (
            <form className="transition-opacity duration-500 opacity-100" onSubmit={handleLogin}>
              <div className="mb-6">
                <label className="block mb-2 text-m font-inter text-black" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  className="input-field"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-m font-inter text-black" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="input-field"
                />
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center">
                    <input type="checkbox" id="remember" className="h-4 w-4 text-blue-500 focus:ring-blue-300 border-gray-300 rounded" />
                    <label htmlFor="remember" className="ml-2 text-xs text-gray-600">Remember me</label>
                  </div>
                  <a href="#" className="text-xs text-gray-600 hover:text-gray-800 focus:outline-none">Forgot password?</a>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button className="px-4 py-2 text-black font-inter bg-yellow-400 rounded-full hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 font-bold w-40 h-12">
                  Login
                </button>
              </div>
            </form>
          ) : (
            <form className="transition-opacity duration-500 opacity-100">
              <div className="mb-6">
                <label className="block mb-2 text-m font-inter text-black" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="input-field"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-m font-inter text-black" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  className="input-field"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-m font-inter text-black" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="input-field"
                />
              </div>
              <div className="mt-6 flex justify-end">
                <button className="px-4 py-2 text-black font-inter bg-yellow-400 rounded-full hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 font-bold w-40 h-12">
                  Register
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;