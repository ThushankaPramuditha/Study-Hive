import React from 'react';
import SideBarnNavbar from './SideBarnNavbar';

const StudyRooms = () => {
  return (
    <div className="">
      <SideBarnNavbar />
      <div className="xl:flex
    mt-2 xl:ml-[263px] ml-[60px]">
      <div className="xl:w-[75%]">
        <div className="ml-3">
          <div className="flex justify-between mt-5">
            <div>
              <div className="flex catergoryselect w-[115px] h-[40px] rounded-[20px] justify-center items-center text-sm"><p>General</p></div>
            </div>
            <div>
              <div className="flex catergory w-[115px] h-[40px] rounded-[20px] justify-center items-center text-sm">Computer S.</div>
            </div>
            <div>
              <div className="flex catergory w-[115px] h-[40px] rounded-[20px] justify-center items-center text-sm">Law</div>
            </div>
            <div>
              <div className="flex catergory w-[115px] h-[40px] rounded-[20px] justify-center items-center text-sm">Biology</div>
            </div>
            <div>
              <div className="flex catergory w-[115px] h-[40px] rounded-[20px] justify-center items-center text-sm">Chemistry</div>
            </div>
            <div>
              <div className="flex catergory w-[115px] h-[40px] rounded-[20px] justify-center items-center text-sm">Engineering</div>
            </div>
            <div>
              <div className="flex catergory w-[115px] h-[40px] rounded-[20px] justify-center items-center text-sm">Medicine</div>
            </div>
            <div className="flex justify-center items-center mr-2">
              <p className="catergoryarrow"><i class="fa-solid fa-angle-right text-3xl"></i></p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-12 ml-12">
            <div className="relative flex items-center">
            <i class="fa-solid fa-magnifying-glass absolute ml-5 pointer-events-none text-xl"></i>
            <input className="bg-search  border-none pr-3 pl-14  xl:w-[700px] h-[50px] rounded-[40px] mr-20 placeholder-black text-lg" name="search" placeholder="Search Questions" autocomplete="off" aria-label="Search Study Rooms"></input>
            </div>
          </div>
        </div>
        <div className="ml-20 mr-20 mt-12">
          <div className="flex shadow-lg rounded-[20px] w-[100%] h-[350px]">

          </div>
        </div>
      </div>
      <div className="h-100 border border-gray-200 hidden xl:block">
      </div>
      <div className="xl:w-[25%]">
        <div className="">
          <div>
            <p className="m-10 mb-4 font-semibold text-2xl">Notifications</p>
          </div>
          <div className="flex flex-col items-center ml-2">
            <div className="flex items-center xl:w-[90%] w-[350px] h-auto bg-gray-100 rounded-[10px] justify-between m-2 p-2">
              <div className="flex items-center">
              <div>
              <div className="ml-4 w-2 h-2 bg-gray-400 rounded">
              </div>
              </div>
              <div>
              <div className="ml-3 w-[52px] h-[52px] border-2 border-yellow-400 rounded-full bg-black">
              </div>
              </div>
              <div className="flex flex-col ml-2">
                <p className="text-lg font-semibold ">Pramukha Thenuwara</p>
                <p className="opacity-40">added a comment 
                to your post.</p>
              </div>
              </div>
            </div>
            <div className="flex items-center xl:w-[90%] w-[350px] h-auto bg-gray-100 rounded-[10px] justify-between m-2 p-2">
              <div className="flex items-center">
              <div>
              <div className="ml-4 w-2 h-2 bg-gray-400 rounded">
              </div>
              </div>
              <div>
              <div className="ml-3 w-[52px] h-[52px] border-2 border-yellow-400 rounded-full bg-black">
              </div>
              </div>
              <div className="flex flex-col ml-2">
                <p className="text-lg font-semibold ">Thushanka Pramuditha</p>
                <p className="opacity-40">added a comment 
                to your post.</p>
              </div>
              </div>
            </div>
            <div className="flex items-center xl:w-[90%] w-[350px] h-auto bg-gray-100 rounded-[10px] justify-between m-2 p-2">
              <div className="flex items-center">
              <div>
              <div className="ml-4 w-2 h-2 bg-gray-400 rounded">
              </div>
              </div>
              <div>
              <div className="ml-3 w-[52px] h-[52px] border-2 border-yellow-400 rounded-full bg-black">
              </div>
              </div>
              <div className="flex flex-col ml-2">
                <p className="text-lg font-semibold ">Dinushanka Shyamal</p>
                <p className="opacity-40">added a comment 
                to your post.</p>
              </div>
              </div>
            </div>
            <div className="flex items-center xl:w-[90%] w-[350px] h-auto bg-gray-100 rounded-[10px] justify-between m-2 p-2">
              <div className="flex items-center">
              <div>
              <div className="ml-4 w-2 h-2 bg-gray-400 rounded">
              </div>
              </div>
              <div>
              <div className="ml-3 w-[52px] h-[52px] border-2 border-yellow-400 rounded-full bg-black">
              </div>
              </div>
              <div className="flex flex-col ml-2">
                <p className="text-lg font-semibold ">Kasun Udara</p>
                <p className="opacity-40">added a comment 
                to your post.</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      </div>
    </div>
  );
};

export default StudyRooms;
