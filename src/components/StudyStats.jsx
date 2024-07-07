import React from 'react';
import SideBarnNavbar from './SideBarnNavbar';
import PerformanceChart from './PerformanceChart';

const StudyStats = () => {
  return (
    <div className="">
      <SideBarnNavbar />
      <div className="xl:flex
    mt-2 ml-[263px]">
      <div className="xl:w-[75%]">
        <div className="ml-10 ">
          <p className="text-blue-900  text-4xl font-bold">Your Study Statistics</p>
          <div className="xl:grid xl:grid-cols-3 flex flex-col justifi-center items-center mt-6xl: mr-10">
            <div className="flex place-self-center rounded-[20px] w-[280px] h-[120px] shadow-md">
              <div className="flex items-center justify-center m-7">
                <div className="flex items-center justify-center clock-color1 rounded-[100%] w-[60px] h-[60px] text-xl ">
                  <i className="fa-regular fa-clock"></i>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-2xl font-bold">120 hrs+</p>
                <p className="text-sm">Total Study Hours</p>
              </div>
            </div>
            <div className="flex place-self-center rounded-[20px] w-[280px] h-[120px] shadow-md">
              <div className="flex items-center justify-center m-7">
                <div className="flex items-center justify-center clock-color2 rounded-[100%] w-[60px] h-[60px] text-xl ">
                  <i className="fa-regular fa-clock"></i>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-2xl font-bold">20 hrs+</p>
                <p className="text-sm">Average Study Hours</p>
              </div>
            </div>
            <div className="flex place-self-center rounded-[20px] w-[280px] h-[120px] shadow-md">
              <div className="flex items-center justify-center m-7">
                <div className="flex items-center justify-center rank-color1 rounded-[100%] w-[60px] h-[60px] text-xl ">
                  <i class="fa-solid fa-ranking-star"></i>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-2xl font-bold">220</p>
                <p className="text-sm">Rank</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" m-10 rounded-[20px] shadow-lg">
        <div className="flex justify-between ">
          <p className="pl-[5%] mb-2 mt-5  text-gray-500 font-semibold text-lg">Performance</p>
          <button className="pl-[10%] mt-5 mb-2 text-gray-500  text-s mr-10 text-xl"><i class="fa-solid fa-ellipsis"></i></button>
        </div>
        <div className="mr-20">
          <div className="ml-[10%] h-[400px]">
            <PerformanceChart/>
          </div>
        </div>
        </div>
      </div>
      <div className="h-100 border border-gray-200 hidden xl:block">
      </div>
      <div className="xl:w-[25%]">
        <div className="">
          <div>
            <p className="m-10 mb-4 font-semibold text-2xl">Your Badges</p>
          </div>
          <div className="flex flex-col items-center ml-2">
            <div className="flex items-center xl:w-[90%] w-[350px] h-auto bg-gray-100 rounded-[10px] justify-between m-2 p-2">
            <div className="flex items-center">
              <div className="ml-3 mr-2">
                <div className="w-[50px] h-[50px] rounded-full badge-color1">
              </div>
              </div>
              <div className="flex flex-col ml-2">
                <p className="text-lg font-semibold ">Nerd</p>
                <p className="opacity-40 text-sm">2 Days Ago</p>
              </div>
            </div>
              <div className="mr-5 opacity-40">
                <i class="fa-solid fa-exclamation text-xl"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center ml-2">
            <div className="flex items-center xl:w-[90%] w-[350px] h-auto bg-gray-100 rounded-[10px] justify-between m-2 p-2">
            <div className="flex items-center">
              <div className="ml-3 mr-2">
                <div className="w-[50px] h-[50px] rounded-full badge-color2">
              </div>
              </div>
              <div className="flex flex-col ml-2">
                <p className="text-lg font-semibold ">Performer</p>
                <p className="opacity-40 text-sm">12 Days Ago</p>
              </div>
            </div>
              <div className="mr-5 opacity-40">
                <i class="fa-solid fa-exclamation text-xl"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center ml-2">
            <div className="flex items-center xl:w-[90%] w-[350px] h-auto bg-gray-100 rounded-[10px] justify-between m-2 p-2">
            <div className="flex items-center">
              <div className="ml-3 mr-2">
                <div className="w-[50px] h-[50px] rounded-full badge-color3">
              </div>
              </div>
              <div className="flex flex-col ml-2">
                <p className="text-lg font-semibold ">Acrobat</p>
                <p className="opacity-40 text-sm">20 Days Ago</p>
              </div>
            </div>
              <div className="mr-5 opacity-40">
                <i class="fa-solid fa-exclamation text-xl"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center ml-2">
            <div className="flex items-center xl:w-[90%] w-[350px] h-auto bg-gray-100 rounded-[10px] justify-between m-2 p-2">
            <div className="flex items-center">
              <div className="ml-3 mr-2">
                <div className="w-[50px] h-[50px] rounded-full badge-color4">
              </div>
              </div>
              <div className="flex flex-col ml-2">
                <p className="text-lg font-semibold ">Newbie</p>
                <p className="opacity-40 text-sm">30 Days Ago</p>
              </div>
            </div>
              <div className="mr-5 opacity-40">
                <i class="fa-solid fa-exclamation text-xl"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <p className="m-10 mb-4 font-semibold text-2xl">Leaderboard</p>
          </div>
          <div className="flex justify-between justify-center items-center mt-14 m-5">
            <div className="flex flex-col justigy-center items-center">
              <div>
                <div className="flex justify-center items-center bg-black rounded-[100%] w-[60px] h-[60px] border border-4 rank-border">
                  <div className="h-[80px] flex flex-col justify-between justify-center items-center ">
                    <div></div>
                    <div className="flex justify-center items-center bg-amber-400  rounded-[100%] w-[20px] h-[20px]">
                      <p className="text-sm text-white self-center">2</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-semibold mt-3">Thushanka</p>
              <div className="flex">
                <div><i class="fa-solid fa-dumbbell dumble rotate-45 text-sm"></i></div>
                <p className="flex items-center ml-2">42</p>
                <p className="flex items-center ml-1 text-sm">Hours</p>
              </div>
            </div>
            <div className="flex flex-col justigy-center items-center mt-[-30px] ml-2 mr-2">
              <div>
                <div className="flex justify-center items-center bg-black rounded-[100%] w-[70px] h-[70px] border border-4 rank-border">
                  <div className="h-[90px] flex flex-col justify-between justify-center items-center ">
                    <i class="fa-solid fa-crown text-2xl text-amber-400 mt-[-10px]"></i>
                    <div className="flex justify-center items-center bg-amber-400  rounded-[100%] w-[20px] h-[20px]">
                      <p className="text-sm text-white self-center">1</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-semibold mt-3">Mahoga</p>
              <div className="flex">
                <div><i class="fa-solid fa-dumbbell dumble rotate-45 text-sm"></i></div>
                <p className="flex items-center ml-2">46</p>
                <p className="flex items-center ml-1 text-sm">Hours</p>
              </div>
            </div>
            <div className="flex flex-col justigy-center items-center">
              <div>
                <div className="flex justify-center items-center bg-black rounded-[100%] w-[60px] h-[60px] border border-4 rank-border">
                  <div className="h-[80px] flex flex-col justify-between justify-center items-center ">
                    <div></div>
                    <div className="flex justify-center items-center bg-amber-400  rounded-[100%] w-[20px] h-[20px]">
                      <p className="text-sm text-white self-center">3</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-semibold mt-3">Kasun</p>
              <div className="flex">
                <div><i class="fa-solid fa-dumbbell dumble rotate-45"></i></div>
                <p className="flex items-center ml-2">43 Hours</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center ml-2">
            <div className="flex items-center xl:w-[80%] w-[350px] h-auto bg-gray-100 rounded-[10px] justify-between m-2 p-2">
            <div className="flex items-center">
              <div className="ml-2">
                <p className="text-md font-semibold">4</p>
              </div>
              <div className="ml-3 mr-2">
                <div className="w-[40px] h-[40px] rounded-full bg-black">
              </div>
              </div>
              <div className="flex flex-col ml-2">
                <p className="">Thushanka Thenuwara</p>
              </div>
            </div>
              <div className="opacity-40">
                <p className="text-sm">36 Hours</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center ml-2">
            <div className="flex items-center xl:w-[80%] w-[350px] h-auto bg-gray-100 rounded-[10px] justify-between m-2 p-2 bg-yellow-100">
            <div className="flex items-center">
              <div className="ml-2">
                <p className="text-md font-semibold">5</p>
              </div>
              <div className="ml-3 mr-2">
                <div className="w-[40px] h-[40px] rounded-full bg-black">
              </div>
              </div>
              <div className="flex flex-col ml-2">
                <p className="text-md">Pramukha Thenuwara</p>
              </div>
            </div>
              <div className="opacity-40">
                <p className="text-sm">35 Hours</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center ml-2">
            <div className="flex items-center xl:w-[80%] w-[350px] h-auto bg-gray-100 rounded-[10px] justify-between m-2 p-2">
            <div className="flex items-center">
              <div className="ml-2">
                <p className="text-md font-semibold">6</p>
              </div>
              <div className="ml-3 mr-2">
                <div className="w-[40px] h-[40px] rounded-full bg-black">
              </div>
              </div>
              <div className="flex flex-col ml-2">
                <p className="text-md">Dinushanka Shyamal</p>
              </div>
            </div>
              <div className="opacity-40">
                <p className="text-sm">36 Hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      </div>
    </div>
  );
};

export default StudyStats;
