import React from 'react';
import logo from '../assets/images/logo.png';  // Update the path to your logo

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-4 flex flex-col items-center py-8">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="logo w-25 h-25">
          <img src={logo} alt="StudyHive" className="w-full h-auto" />
        </div>
        <h2 className="text-[20px] text-customYellow font-bold mt-4 md:mt-0 md:ml-4 text-center md:text-left">
          Your All in One Platform for<br />
          <span className="text-[20px] text-white font-bold"> Collaborative Learning</span>
        </h2>
      </div>
      <div className="container flex flex-col md:flex-col items-center justify-center gap-4 mt-4">
        <p className="text-white text-lg text-center md:text-left">Subscribe to get our Newsletter</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input type="email" placeholder="Enter your email" className="bg-gray-800 text-white py-2 px-4 rounded-lg mt-2 md:mt-0" />
          <button className="bg-custom-color text-white hover:bg-white hover:text-customGray py-2 px-4 rounded-[80px] mt-2 md:mt-0 md:ml-4">Subscribe</button>
        </div>
      </div>

      <div className="container flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
        <p className="text-white text-lg text-center md:text-left">Follow Us</p>
        <div className="flex items-center justify-center gap-4">
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
    </footer>
  );
};

export default Footer;
