import React from "react";
import OutterBar from "./OutterBar";


function SchedulePage() {
  return (
    <div>

      <OutterBar />
      <div className="mx-14 border-2 border-black h-screen py-4 px-14 flex flex-col ">

        <span className=" mb-3 font-bold text-xl">Room Stats</span>

        <div className="mx-10 flex flex-row justify-around">
          <div className="  relative flex flex-col items-center justify-center w-[190px] h-[110px] flex-shrink-0 bg-[#FDF58B] rounded-[12px] shadow-md" style={{ boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.09)' }}>
            <span className="absolute top-2 left-2 text-sm  mb-10 text-neutral-400 ">{"Users"}</span>
            <span className="text-5xl font-bold">{6}</span>
          </div>

          <div className="  relative flex flex-col items-center justify-center w-[190px] h-[110px] flex-shrink-0 bg-[#FDF58B] rounded-[12px] shadow-md" style={{ boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.09)' }}>
            <span className="absolute top-2 left-2 text-sm  mb-10 text-neutral-400 ">{"Total Session HOURS"}</span>
            <span className="text-5xl font-bold">{"12 h"}</span>
          </div>

          <div className=" shadow-sm relative flex flex-col items-center justify-center w-[190px] h-[110px] flex-shrink-0 bg-[#FDF58B] rounded-[12px] shadow-md" style={{ boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.09)' }}>
            <span className="absolute top-2 left-2 text-sm  mb-10 text-neutral-400 ">{"Total Sessions Conducted"}</span>
            <span className="text-5xl font-bold">{7}</span>
          </div>
        </div>

        <hr className="my-4 border-gray-400" />

        <div className="flex flex-row justify-around my-10">
          <div className="flex items-center">
            <span className="mr-8 text-4xl">Start a Session</span>
            <button className="bg-lime-600 text-2xl text-white font-semibold py-2 px-4 rounded-lg hover:bg-lime-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50">
              Start
            </button>
          </div>
          <div className="flex items-center">
            <span className="mr-8 text-4xl">Start a Session</span>
            <button className="bg-lime-600 text-2xl text-white font-semibold py-2 px-4 rounded-lg hover:bg-lime-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50">
              Start
            </button>
          </div>
        </div>
        <hr className="my-4 border-gray-400" />
        <hr className="my-4 border-gray-400" />

      </div>
    </div>

  );


}



export default SchedulePage;