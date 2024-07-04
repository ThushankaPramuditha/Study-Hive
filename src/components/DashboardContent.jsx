import React from 'react';
import solo from '../assets/images/Solostudy.png';
import group from '../assets/images/Groupstudy.png';
import Calendar from './BoxCalendar';


const DashboardContent = (sidebarToggle) => {
  return (
    <div className={`${sidebarToggle ? "ml-[263px]" : "ml-[60px]"} xl:flex
    mt-2 `}>
      <div className="xl:w-[75%] w-[100%]">
        <div className="ml-10">
        <p className="text-blue-900  text-2xl">Welcome, Sadun S.</p>
        <p className="text-gray-400" >Have a good day!</p>
        </div>
        <div className="mt-10 w-[100%]">
        <p className="text-blue-900  text-4xl text-center">Let's Find a Study Partner</p>
        <div className="xl:flex xl:felx-col xl:justify-between pl-[10%] pr-[10%] pt-[3%]">
          <div className="flex flex-col justify-center border-2 w-[420px] h-[340px] rounded-[50px] items-center" style={{ backgroundImage: `url(${solo})` }}>
            <p className="text-2xl text-white text-center pb-6 font-bold">Solo Study</p>
            <button className="bg-custom-color p-3 m-3 text-xl text-white w-15 rounded-[50px] w-[200px] justify-center">Start Solo Study</button>
          </div>

          <div className="flex flex-col justify-center items-center border-2 w-[420px] h-[340px] rounded-[50px]" style={{ backgroundImage: `url(${group})` }}>
          <p className="text-2xl text-white text-center pb-6 font-bold">Group Study</p>
          <button className="bg-custom-color p-3 m-3 text-xl text-white w-15 rounded-[50px] w-[300px]">Joing a Group Study Room</button>
          <button className="bg-custom-color1 p-3 m-3 text-xl w-15 rounded-[50px] w-[300px]">Create Group Study Room</button>
          </div>
        </div>
        </div>
        <div className="flex justify-between">
          <p className="pl-[10%] mt-10 mb-1 text-gray-500  text-lg">My Study Rooms</p>
          <p className="pl-[10%] mt-10 mb-1 text-yellow-500  text-s mr-20">See all</p>
        </div>
        <div className="mr-20">
          <div className="ml-[10%] xl:grid xl:grid-cols-3">
            <div className="flex flex-col items-center xl:m-4 m-3 xl:w-[90%] w-[100%]">
              <div className="h-[10px] xl:w-[100%] w-[300px]   bg-yellow-600 rounded-t-[50px]">
              </div>
              <div className="h-auto xl:w-[100%] w-[300px]   bg-yellow-100 rounded-b-[30px]">
                <p className="font-bold text-xl m-4">Pure Math</p>
                <p className="ml-4 opacity-60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis illum ex iure incidunt laudan</p>
                <div className="flex items-center m-4 mt-10">
                    <i class="fa-solid fa-user opacity-30 mr-4"></i>
                    <p className="text-sm opacity-40">Pramukha Thenuwara</p>
                </div>
                <div className="flex justify-between m-4">
                  <div className="flex items-center">
                    <i class="fa-solid fa-note-sticky opacity-30 mr-4"></i>
                    <p className="text-sm opacity-40">B classes</p>
                  </div>
                  <div className="flex items-center mr-20">
                    <i class="fa-solid fa-clock opacity-30"></i>
                    <p className="text-sm opacity-40 ml-4">3 Hours</p>
                  </div>
                </div>
                <div className="flex justify-between m-4 mt-10">
                  <div className="flex">
                    <div className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black">
                    </div>
                    <div className="w-[40px] h-[40px] rounded-[100%] border-2 ml-[-15px] border-white bg-black">
                    </div>
                    <div className="w-[40px] h-[40px] rounded-[100%] border-2 ml-[-15px] border-white bg-black">
                    </div>
                    <div className="w-[40px] h-[40px] rounded-[100%] border-2 ml-[-15px] border-white bg-black">
                    </div>
                  </div>
                  <div className="flex items-center justify-between items-center">
                    <p className="opacity-40">20</p>
                    <i class="fa-regular fa-comments ml-4 opacity-30"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center xl:m-4 m-3 xl:w-[90%] w-[100%]">
              <div className="h-[10px] xl:w-[100%] w-[300px]   bg-yellow-600 rounded-t-[50px]">
              </div>
              <div className="h-auto xl:w-[100%] w-[300px]   bg-yellow-100 rounded-b-[30px]">
                <p className="font-bold text-xl m-4">Pure Math</p>
                <p className="ml-4 opacity-60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis illum ex iure incidunt laudan</p>
                <div className="flex items-center m-4 mt-10">
                    <i class="fa-solid fa-user opacity-30 mr-4"></i>
                    <p className="text-sm opacity-40">Pramukha Thenuwara</p>
                </div>
                <div className="flex justify-between m-4">
                  <div className="flex items-center">
                    <i class="fa-solid fa-note-sticky opacity-30 mr-4"></i>
                    <p className="text-sm opacity-40">B classes</p>
                  </div>
                  <div className="flex items-center mr-20">
                    <i class="fa-solid fa-clock opacity-30"></i>
                    <p className="text-sm opacity-40 ml-4">3 Hours</p>
                  </div>
                </div>
                <div className="flex justify-between m-4 mt-10">
                  <div className="flex">
                    <div className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black">
                    </div>
                    <div className="w-[40px] h-[40px] rounded-[100%] border-2 ml-[-15px] border-white bg-black">
                    </div>
                    <div className="w-[40px] h-[40px] rounded-[100%] border-2 ml-[-15px] border-white bg-black">
                    </div>
                    <div className="w-[40px] h-[40px] rounded-[100%] border-2 ml-[-15px] border-white bg-black">
                    </div>
                  </div>
                  <div className="flex items-center justify-between items-center">
                    <p className="opacity-40">20</p>
                    <i class="fa-regular fa-comments ml-4 opacity-30"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center xl:m-4 m-3 xl:w-[90%] w-[100%]">
              <div className="h-[10px] xl:w-[100%] w-[300px]   bg-yellow-600 rounded-t-[50px]">
              </div>
              <div className="h-auto xl:w-[100%] w-[300px]   bg-yellow-100 rounded-b-[30px]">
                <p className="font-bold text-xl m-4">Pure Math</p>
                <p className="ml-4 opacity-60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis illum ex iure incidunt laudan</p>
                <div className="flex items-center m-4 mt-10">
                    <i class="fa-solid fa-user opacity-30 mr-4"></i>
                    <p className="text-sm opacity-40">Pramukha Thenuwara</p>
                </div>
                <div className="flex justify-between m-4">
                  <div className="flex items-center">
                    <i class="fa-solid fa-note-sticky opacity-30 mr-4"></i>
                    <p className="text-sm opacity-40">B classes</p>
                  </div>
                  <div className="flex items-center mr-20">
                    <i class="fa-solid fa-clock opacity-30"></i>
                    <p className="text-sm opacity-40 ml-4">3 Hours</p>
                  </div>
                </div>
                <div className="flex justify-between m-4 mt-10">
                  <div className="flex">
                    <div className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black">
                    </div>
                    <div className="w-[40px] h-[40px] rounded-[100%] border-2 ml-[-15px] border-white bg-black">
                    </div>
                    <div className="w-[40px] h-[40px] rounded-[100%] border-2 ml-[-15px] border-white bg-black">
                    </div>
                    <div className="w-[40px] h-[40px] rounded-[100%] border-2 ml-[-15px] border-white bg-black">
                    </div>
                  </div>
                  <div className="flex items-center justify-between items-center">
                    <p className="opacity-40">20</p>
                    <i class="fa-regular fa-comments ml-4 opacity-30"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center xl:m-4 m-3 xl:w-[90%] w-[100%]">
              <div className="h-[10px] xl:w-[100%] w-[300px]   bg-yellow-600 rounded-t-[50px]">
              </div>
              <div className="h-auto xl:w-[100%] w-[300px]   bg-yellow-100 rounded-b-[30px]">
                <p className="font-bold text-xl m-4">Pure Math</p>
                <p className="ml-4 opacity-60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis illum ex iure incidunt laudan</p>
                <div className="flex items-center m-4 mt-10">
                    <i class="fa-solid fa-user opacity-30 mr-4"></i>
                    <p className="text-sm opacity-40">Pramukha Thenuwara</p>
                </div>
                <div className="flex justify-between m-4">
                  <div className="flex items-center">
                    <i class="fa-solid fa-note-sticky opacity-30 mr-4"></i>
                    <p className="text-sm opacity-40">B classes</p>
                  </div>
                  <div className="flex items-center mr-20">
                    <i class="fa-solid fa-clock opacity-30"></i>
                    <p className="text-sm opacity-40 ml-4">3 Hours</p>
                  </div>
                </div>
                <div className="flex justify-between m-4 mt-10">
                  <div className="flex">
                    <div className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black">
                    </div>
                    <div className="w-[40px] h-[40px] rounded-[100%] border-2 ml-[-15px] border-white bg-black">
                    </div>
                    <div className="w-[40px] h-[40px] rounded-[100%] border-2 ml-[-15px] border-white bg-black">
                    </div>
                    <div className="w-[40px] h-[40px] rounded-[100%] border-2 ml-[-15px] border-white bg-black">
                    </div>
                  </div>
                  <div className="flex items-center justify-between items-center">
                    <p className="opacity-40">20</p>
                    <i class="fa-regular fa-comments ml-4 opacity-30"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center xl:m-4 m-3 xl:w-[90%] w-[100%]">
              <div className="h-[10px] xl:w-[100%] w-[300px]   bg-yellow-600 rounded-t-[50px]">
              </div>
              <div className="h-auto xl:w-[100%] w-[300px]   bg-yellow-100 rounded-b-[30px]">
                <p className="font-bold text-xl m-4">Pure Math</p>
                <p className="ml-4 opacity-60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis illum ex iure incidunt laudan</p>
                <div className="flex items-center m-4 mt-10">
                    <i class="fa-solid fa-user opacity-30 mr-4"></i>
                    <p className="text-sm opacity-40">Pramukha Thenuwara</p>
                </div>
                <div className="flex justify-between m-4">
                  <div className="flex items-center">
                    <i class="fa-solid fa-note-sticky opacity-30 mr-4"></i>
                    <p className="text-sm opacity-40">B classes</p>
                  </div>
                  <div className="flex items-center mr-20">
                    <i class="fa-solid fa-clock opacity-30"></i>
                    <p className="text-sm opacity-40 ml-4">3 Hours</p>
                  </div>
                </div>
                <div className="flex justify-between m-4 mt-10">
                  <div className="flex">
                    <div className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black">
                    </div>
                    <div className="w-[40px] h-[40px] rounded-[100%] border-2 ml-[-15px] border-white bg-black">
                    </div>
                    <div className="w-[40px] h-[40px] rounded-[100%] border-2 ml-[-15px] border-white bg-black">
                    </div>
                    <div className="w-[40px] h-[40px] rounded-[100%] border-2 ml-[-15px] border-white bg-black">
                    </div>
                  </div>
                  <div className="flex items-center justify-between items-center">
                    <p className="opacity-40">20</p>
                    <i class="fa-regular fa-comments ml-4 opacity-30"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="h-100 border border-gray-200 hidden xl:block">
      </div>
      <div className="xl:w-[25%] flex flex-col items-center">
        <div className="xl:h-[30%] xl:w-[100%] flex justify-center items-center border-black w-[400px] h-[500px]">
          <Calendar/>
        </div>
        <div className="">
          <div>
            <p className="m-10 ml-4 mb-4 font-bold text-2xl">Schedule</p>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex justify-between items-center xl:w-[100%] w-[300px]  h-auto bg-gray-100 rounded-[10px]  m-2 p-1">
              <div className="xl:ml-3 ml-7 w-2 h-2 bg-yellow-600 rounded">
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-bold mb-3">English Classes</p>
                <p className="opacity-40">Tika sarak s.pd</p>
              </div>
              <div className="mr-10 opacity-40">
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
            <div className="flex justify-between items-center xl:w-[100%] w-[300px]  h-auto bg-gray-100 rounded-[10px]  m-2 p-1">
              <div className="xl:ml-3 ml-7 w-2 h-2 bg-yellow-600 rounded">
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-bold mb-3">English Classes</p>
                <p className="opacity-40">Tika sarak s.pd</p>
              </div>
              <div className="mr-10 opacity-40">
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
            <div className="flex justify-between items-center xl:w-[100%] w-[300px]  h-auto bg-gray-100 rounded-[10px]  m-2 p-1">
              <div className="xl:ml-3 ml-7 w-2 h-2 bg-yellow-600 rounded">
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-bold mb-3">English Classes</p>
                <p className="opacity-40">Tika sarak s.pd</p>
              </div>
              <div className="mr-10 opacity-40">
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
            <div className="flex justify-between items-center xl:w-[100%] w-[300px]  h-auto bg-gray-100 rounded-[10px]  m-2 p-1">
              <div className="xl:ml-3 ml-7 w-2 h-2 bg-yellow-600 rounded">
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-bold mb-3">English Classes</p>
                <p className="opacity-40">Tika sarak s.pd</p>
              </div>
              <div className="mr-10 opacity-40">
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default DashboardContent;
