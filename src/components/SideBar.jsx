import React from 'react';
import logo from '../assets/images/logo.png';  
const SideBar = () => {
  return (
    <section className="bg-gray-900 flex flex-col items-center py-8" >
      <div className="w-100">
        <div className="logo w-25 h-25">
          <img src={logo} alt="StudyHive" className="w-full h-auto" />
        </div>
        <div className="">
          <a href="#" className="text-white hover:text-customYellow">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white hover:text-customYellow">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-customYellow">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-white hover:text-customYellow">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
