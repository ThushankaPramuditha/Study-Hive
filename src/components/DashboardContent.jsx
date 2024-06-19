import React from 'react';
import solo from '../assets/images/Solostudy.png';
import group from '../assets/images/Groupstudy.png';

const DashboardContent = () => {
  return (
    <div className="flex
    mt-2 ml-[263px]">
      <div className="w-[75%]">
        <div className="ml-10">
        <p className="text-blue-900  text-2xl">Welcome, Sadun S.</p>
        <p className="text-gray-400" >Have a good day!</p>
        </div>
        <div className="mt-10 w-[100%]">
        <p className="text-blue-900  text-4xl text-center">Let's Find a Study Partner</p>
        <div className="flex justify-between pl-[10%] pr-[10%] pt-[3%]">
          <div className="flex flex-col justify-center border-2 w-[460px] h-[386px] rounded-[50px] items-center" style={{ backgroundImage: `url(${solo})` }}>
            <p className="text-2xl text-white text-center pb-6 font-bold">Solo Study</p>
            <button className="bg-custom-color p-3 m-3 text-xl text-white w-15 rounded-[50px] w-[200px] justify-center">Start Solo Study</button>
          </div>

          <div className="flex flex-col justify-center items-center border-2 w-[460px] h-[386px] rounded-[50px]" style={{ backgroundImage: `url(${group})` }}>
          <p className="text-2xl text-white text-center pb-6 font-bold">Group Study</p>
          <button className="bg-custom-color p-3 m-3 text-xl text-white w-15 rounded-[50px] w-[300px]">Joing a Group Study Room</button>
          <button className="bg-custom-color1 p-3 m-3 text-xl w-15 rounded-[50px] w-[300px]">Create Group Study Room</button>
          </div>
        </div>
        </div>
      </div>
      <div>


      </div>
    
    </div>
  );
};

export default DashboardContent;
