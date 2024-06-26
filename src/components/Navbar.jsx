import React from 'react';
import profile from '../assets/images/profile.png';
const Navbar = () => {
  return (
    <div className=" w-full px-4 py-3 flex justify-between ml-[263px]" >
      <div className="flex item-center text-x1">

      </div>
      <div className="flex">
    
      <div className="flex items-center justify-center text-black bg-yellow-200 w-10 h-10 rounded">
        <i className="fa-regular fa-bell opacity-50"></i>

      </div>
      <div className="flex items-center justify-center w-10 h-10 rounded mr-10 ml-5">
        <img src={profile} alt="Profile" className="w-full h-auto ml-5" />

      </div>
      </div>

    </div>
    
  );
};

export default Navbar;
