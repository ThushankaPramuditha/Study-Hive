// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { register, login } from '../api/authService';
// import loginImage from '../assets/images/login.png';
// import backImage from '../assets/images/back.png';
// import '../App.css';

// const Login = () => {
//  const [isLogin, setIsLogin] = useState(true);
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');
//  const [firstname, setFirstname] = useState('');
//  const [lastname, setLastname] = useState('');
// const [formError, setFormError] = useState('');
//  const [errors, setErrors] = useState({});
//  const navigate = useNavigate();

//  const handleToggle = () => {
//      setIsLogin(!isLogin);
//  };

//  const validateLogin = () => {
//      const errors = {};
//      if (!email) errors.email = 'Email is required';
//      if (!password) errors.password = 'Password is required';
//      return errors;
//  };

//  const validateRegister = () => {
//      const errors = {};
//      if (!firstname) errors.firstname = 'First name is required';
//      if (!lastname) errors.lastname = 'Last name is required';
//      if (!email) errors.email = 'Email is required';
//      if (!password) errors.password = 'Password is required';
//      return errors;
//  };

//  const handleLogin = async (event) => {
//      event.preventDefault();
//      const errors = validateLogin();
//      if (Object.keys(errors).length > 0) {
//          setErrors(errors);
//          return;
//      }
//      try {
//          const response = await login({ email, password });
//          localStorage.setItem('token', response.token);
//         //  navigate('/ProfileSetup1');
//          navigate('/Home');
//      } catch (error) {
//          console.error('Login failed:', error);
//      }
//  };

//  const handleRegister = async (event) => {
//      event.preventDefault();
//      const errors = validateRegister();
//      if (Object.keys(errors).length > 0) {
//          setErrors(errors);
//          return;
//      }
//      try {
//          const response = await register({ email, password, firstname, lastname });
//          localStorage.setItem('token', response.token);
//         //  navigate('/ProfileSetup1');
//          navigate('/login');
//      } catch (error) {
//          console.error('Registration failed:', error);
//      }
//  };

//  return (
//      <div className="w-full min-h-screen flex items-start relative">
//          <div className="absolute top-4 right-4 text-gray-600 text-sm cursor-pointer">
//              <Link to="/" className="flex items-center">
//                  <img src={backImage} alt="Back" className="inline-block w-4 h-4 mr-0.1" />
//                  Back
//              </Link>
//          </div>
//          <div className="relative w-1/2 h-screen flex flex-col">
//              <img src={loginImage} className="w-full h-full object-cover" alt="Login" />
//          </div>
//          <div className="w-1/2 h-full flex justify-center p-20 mt-10">
//              <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md shadow-container" style={{ boxShadow: '0px 8px 24px rgba(38, 45, 118, 0.15)' }}>
//                  <p className="mb-6 text-center text-black font-inter text-lg font-normal">
//                      Welcome to StudyHive
//                  </p>
//                  <div className="flex flex-col items-center mb-6">
//                      <div
//                          className="relative w-60 h-12 bg-[#FDF58B] rounded-full cursor-pointer flex items-center p-2.5"
//                          onClick={handleToggle}
//                      >
//                          <div
//                              className={`absolute left-2 w-28 h-8 bg-yellow-400 rounded-full transition-transform transform ${isLogin ? '' : 'translate-x-full'}`}
//                          ></div>
//                          <div className="w-full flex justify-between text-sm font-bold text-gray-700 z-10">
//                              <span className={`flex-1 text-center ${isLogin ? 'text-black ' : 'font-normal'}`}>Login</span>
//                              <span className={`flex-1 text-center ${isLogin ? 'font-normal' : 'text-black '}`}>Register</span>
//                          </div>
//                      </div>
//                  </div>
//                  <p className="mb-6 text-justify font-inter text-sm text-gray-700">
//                      Join the largest global student community online and say goodbye to lack of motivation.
//                  </p>

//                  {isLogin ? (
//                      <form className="transition-opacity duration-500 opacity-100" onSubmit={handleLogin}>
//                          <div className="mb-6">
//                              <label className="block mb-2 text-m font-inter text-black" htmlFor="email">
//                                  Email
//                              </label>
//                              <input
//                                  type="email"
//                                  id="email"
//                                  placeholder="Enter your email"
//                                  className="input-field"
//                                  value={email}
//                                  onChange={(e) => setEmail(e.target.value)}
//                                  required
//                              />
//                              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//                          </div>
//                          <div className="mb-4">
//                              <label className="block mb-2 text-m font-inter text-black" htmlFor="password">
//                                  Password
//                              </label>
//                              <input
//                                  type="password"
//                                  id="password"
//                                  placeholder="Enter your password"
//                                  className="input-field"
//                                  value={password}
//                                  onChange={(e) => setPassword(e.target.value)}
//                                  required
//                              />
//                              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//                              <div className="flex justify-between items-center mt-4">
//                                  <div className="flex items-center">
//                                      <input type="checkbox" id="remember" className="h-4 w-4 text-blue-500 focus:ring-blue-300 border-gray-300 rounded" />
//                                      <label htmlFor="remember" className="ml-2 text-xs text-gray-600">Remember me</label>
//                                  </div>
//                                  <a href="#" className="text-xs text-gray-600 hover:text-gray-800 focus:outline-none">Forgot password?</a>
//                              </div>
//                          </div>
//                          <div className="mt-6 flex justify-end">
//                              <button className="px-4 py-2 text-black font-inter bg-yellow-400 rounded-full hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 font-bold w-40 h-12">
//                                  Login
//                              </button>
//                          </div>
//                      </form>
//                  ) : (
//                      <form className="transition-opacity duration-500 opacity-100" onSubmit={handleRegister}>
//                          <div className="mb-6">
//                              <label className="block mb-2 text-m font-inter text-black" htmlFor="firstname">
//                                  First Name
//                              </label>
//                              <input
//                                  type="text"
//                                  id="firstname"
//                                  placeholder="Enter your first name"
//                                  className="input-field"
//                                  value={firstname}
//                                  onChange={(e) => setFirstname(e.target.value)}
//                                  required
//                              />
//                              {errors.firstname && <p className="text-red-500 text-xs mt-1">{errors.firstname}</p>}
//                          </div>
//                          <div className="mb-6">
//                              <label className="block mb-2 text-m font-inter text-black" htmlFor="lastname">
//                                  Last Name
//                              </label>
//                              <input
//                                  type="text"
//                                  id="lastname"
//                                  placeholder="Enter your last name"
//                                  className="input-field"
//                                  value={lastname}
//                                  onChange={(e) => setLastname(e.target.value)}
//                                  required
//                              />
//                              {errors.lastname && <p className="text-red-500 text-xs mt-1">{errors.lastname}</p>}
//                          </div>
//                          <div className="mb-6">
//                              <label className="block mb-2 text-m font-inter text-black" htmlFor="email">
//                                  Email
//                              </label>
//                              <input
//                                  type="email"
//                                  id="email"
//                                  placeholder="Enter your email"
//                                  className="input-field"
//                                  value={email}
//                                  onChange={(e) => setEmail(e.target.value)}
//                                  required
//                              />
//                              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//                          </div>
//                          <div className="mb-4">
//                              <label className="block mb-2 text-m font-inter text-black" htmlFor="password">
//                                  Password
//                              </label>
//                              <input
//                                  type="password"
//                                  id="password"
//                                  placeholder="Enter your password"
//                                  className="input-field"
//                                  value={password}
//                                  onChange={(e) => setPassword(e.target.value)}
//                                  required
//                              />
//                              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//                          </div>
//                          <div className="mt-6 flex justify-end">
//                          <button className="px-4 py-2 text-black font-inter bg-yellow-400 rounded-full hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 font-bold w-40 h-12">
//                                  Register
//                              </button>
//                          </div>
//                      </form>
//                  )}
//              </div>
//          </div>
//      </div>
//  );
// };

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register, login } from "../api/authService";
import loginImage from "../assets/images/login.png";
import backImage from "../assets/images/back.png";
import "../App.css";
import { profileService } from "../api/profileService";
import { userFname, userId } from "./const";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormError(""); // Clear form error when toggling between login and register
  };

  const validateLogin = () => {
    const errors = {};
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    return errors;
  };

  const validateRegister = () => {
    const errors = {};
    if (!firstname.trim()) errors.firstname = "First name is required";
    if (!lastname.trim()) errors.lastname = "Last name is required";
    if (!email.trim()) errors.email = "Email is required";
    if (!password.trim()) errors.password = "Password is required";
    if (password && password.length < 6)
      errors.password = "Password must be at least 6 characters long";
    return errors;
  };

  // const handleLogin = async (event) => {
  //     event.preventDefault();
  //     const errors = validateLogin();
  //     if (Object.keys(errors).length > 0) {
  //         setErrors(errors);
  //         return;
  //     }
  //     try {
  //         const response = await login({ email, password });
  //         localStorage.setItem('token', response.token);
  //         navigate('/ProfileSetup1');
  //     } catch (error) {
  //         setFormError('Login failed. Please check your credentials and try again.');
  //     }
  // };

  const handleLogin = async (event) => {
    event.preventDefault();
    const errors = validateLogin();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      const response = await login({ email, password });

      // Save the token to localStorage
      localStorage.setItem("token", response.token);
      // navigate('/home');

      // Extract userId and profileExists from the response
      const { profileExists } = response;
      console.log("User First Name:", userFname);
      console.log("User ID:", userId);

      // Redirect based on the `profileExists` field
      if (profileExists) {
        navigate("/home"); // Redirect to the home page
      } else {
        navigate(`/ProfileSetup1?userId=${userId}`); // Redirect to profile setup with userId as query param
      }
    } catch (error) {
      setFormError(
        "Login failed. Please check your credentials and try again."
      );
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const errors = validateRegister();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    try {
      const response = await register({ email, password, firstname, lastname });
      localStorage.setItem("token", response.token);
      window.location.reload();
      navigate("/login");
      //  navigate('/login1');
      setIsLogin(true);
    } catch (error) {
      setFormError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-start relative">
      <div className="absolute top-4 right-4 text-gray-600 text-sm cursor-pointer">
        <Link to="/" className="flex items-center">
          <img
            src={backImage}
            alt="Back"
            className="inline-block w-4 h-4 mr-0.1"
          />
          Back
        </Link>
      </div>
      <div className="relative w-1/2 h-screen flex flex-col">
        <img
          src={loginImage}
          className="w-full h-full object-cover"
          alt="Login"
        />
      </div>
      <div className="w-1/2 h-full flex justify-center p-20 mt-10">
        <div
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md shadow-container"
          style={{ boxShadow: "0px 8px 24px rgba(38, 45, 118, 0.15)" }}
        >
          <p className="mb-6 text-center text-black font-inter text-lg font-normal">
            Welcome to StudyHive
          </p>
          <div className="flex flex-col items-center mb-6">
            <div
              className="relative w-60 h-12 bg-[#FDF58B] rounded-full cursor-pointer flex items-center p-2.5"
              onClick={handleToggle}
            >
              <div
                className={`absolute left-2 w-28 h-8 bg-yellow-400 rounded-full transition-transform transform ${
                  isLogin ? "" : "translate-x-full"
                }`}
              ></div>
              <div className="w-full flex justify-between text-sm font-bold text-gray-700 z-10">
                <span
                  className={`flex-1 text-center ${
                    isLogin ? "text-black " : "font-normal"
                  }`}
                >
                  Login
                </span>
                <span
                  className={`flex-1 text-center ${
                    isLogin ? "font-normal" : "text-black "
                  }`}
                >
                  Register
                </span>
              </div>
            </div>
          </div>
          <p className="mb-6 text-justify font-inter text-sm text-gray-700">
            Join the largest global student community online and say goodbye to
            lack of motivation.
          </p>

          {formError && (
            <p className="text-red-500 text-xs text-center mb-4">{formError}</p>
          )}

          {isLogin ? (
            <form
              className="transition-opacity duration-500 opacity-100"
              onSubmit={handleLogin}
            >
              <div className="mb-6">
                <label
                  className="block mb-2 text-m font-inter text-black"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-m font-inter text-black"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 text-blue-500 focus:ring-blue-300 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember"
                      className="ml-2 text-xs text-gray-600"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-xs text-gray-600 hover:text-gray-800 focus:outline-none"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button className="px-4 py-2 text-black font-inter bg-yellow-400 rounded-full hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 font-bold w-40 h-12">
                  Login
                </button>
              </div>
            </form>
          ) : (
            <form
              className="transition-opacity duration-500 opacity-100"
              onSubmit={handleRegister}
            >
              <div className="mb-6">
                <label
                  className="block mb-2 text-m font-inter text-black"
                  htmlFor="firstname"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="Enter your first name"
                  className="input-field"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
                {errors.firstname && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstname}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-m font-inter text-black"
                  htmlFor="lastname"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  placeholder="Enter your last name"
                  className="input-field"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
                {errors.lastname && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastname}</p>
                )}
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-m font-inter text-black"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-m font-inter text-black"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
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
