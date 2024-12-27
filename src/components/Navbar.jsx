import React from 'react';
import profile from '../assets/images/profile.png';
import DashboardContent from './DashboardContent';
const Navbar = ({sidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? "" : "ml-[263px]"} pl-10 w-full px-4 py-3 flex justify-between`} >
      <div className={`flex item-center text-x1 mr-10`}>
      </div>
      <div className="flex">
    
      <div className="relative inline-block">
        <button className="group hover:shadow-lg hover:shadow-gray-400 active:shadow-none">
        <div className="flex items-center justify-center text-black bg-yellow-200 w-10 h-10 rounded ">
          <i className="fa-regular fa-bell opacity-50"></i>
        </div>
        <div className="absolute hidden group-focus:block p-1 border border-black top-full right-0 bg-white w-[300px]">
          <ul>
            <li className="m-2"><a href="">Notification 1</a></li>
            <li className="m-2"><a href="">Notification 2</a></li>
            <li className="m-2"><a href="">Notification 3</a></li>
          </ul>
        </div>
        </button>
      </div>
      <div className="flex items-center justify-center w-10 h-10 rounded mr-10 ml-5">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="avatar" className="w-full h-full rounded-full" />
      </div>
      </div>  
    </div>
    
    
  );
};

export default Navbar;