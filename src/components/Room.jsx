import React from 'react';
import { Link } from 'react-router-dom';
import RoomSideBar from './RoomSideBar';
import infoPrivacy from '../assets/images/infoPrivacy.png';
import infoEdit from '../assets/images/infoEdit.png';
import infoShared from '../assets/images/infoShared.png';

const Room = () => {
  return (
    <div className="flex">
      <RoomSideBar />
      <div className="w-full min-h-screen flex items-start relative">
      <div className="fixed top-4 right-4 z-50 w-full flex justify-end pr-4">
          <div className="text-right">
            <p className="text-[16px] sm:text-[20px] font-semibold  sm:w-full">
              Welcome to SpringBoot Study Room
            </p>
            <p className="text-[10px] sm:text-[12px] text-[#929292]  sm:w-full">
              Created by Sandun Sanjeewa
            </p>
      </div>
      </div>

     
      <div className="relative h-screen flex">
      <p className=' ml-32 mt-20 font-semibold text-[16px] sm:text-[20px] '>Room Stat </p>
    </div>
    </div>
     
    </div>
   
      
  );
};

export default Room;
