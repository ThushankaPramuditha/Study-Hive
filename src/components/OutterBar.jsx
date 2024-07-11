import React from 'react';
import homeDoor from '../assets/images/HomeDoor.svg';
import goal from '../assets/images/goal.svg';
import backButton from '../assets/images/backButton.svg'; // Assuming you have an image for the back button

function OutterBar() {
  return (
    <div className="flex">

      <ul className="fixed top-0 left-0 pt-4 bg-amber-300 h-screen w-12">
        <li className="bg-yellow-200 border-black p-2 hover:bg-yellow-200 hover:shadow-md transition duration-300">
          <img src={homeDoor} alt="Home Door" className="h-full" />
        </li>
        <li className="bg-yellow-200 border-black p-2 hover:bg-yellow-200 hover:shadow-md transition duration-300">
          <img src={goal} alt="Goal" />
        </li>
      </ul>


      <div className="flex-grow flex justify-center items-center  mx-12 mt-2   ">
      <div className="bg-white rounded shadow-lg w-full m-2 flex flex-col items-end p-4 pb-12">
          <h1 className="text-4xl font-bold ">Welcome to SpringBoot Study Room</h1>
          <p className="text-neutral-400">Created by {"Sandun Sanjeewa"}</p>
        </div>
      </div>


      <ul className="fixed top-0 right-0 pt-4  h-screen w-12">
        <li className="bg-yellow-200 border-black p-2 hover:bg-yellow-200 hover:shadow-md transition duration-300 rounded-lg">
          <img src={backButton} alt="Back" className="h-full" />
        </li>
      </ul>
    </div>
  );
}

export default OutterBar;
