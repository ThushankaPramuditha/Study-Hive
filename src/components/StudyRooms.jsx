import React from 'react';
import SideBarnNavbar from './SideBarnNavbar';

const StudyRooms = () => {
  return (
    <div className="">
      <SideBarnNavbar />
      <div className="xl:flex
    mt-2 xl:ml-[263px] ml-[60px]">
      <div className="xl:w-[75%]">
        <div className="ml-10">
          <p className="text-blue-900  text-4xl font-bold">Let's Get Back To Work</p>
          <div className="flex items-center justify-between mt-6">
            {/* <button className="flex items-center bg-custom-color p-2 text-sm text-white rounded-[40px] w-[170px] justify-center">Create a New Room<i class="fa-solid fa-plus text-yellow-400 ml-2"></i></button> */}
            <a href="/videocall" className="flex items-center bg-custom-color p-2 text-sm text-white rounded-[40px] w-[170px] justify-center">Create a New Room<i class="fa-solid fa-plus text-yellow-400 ml-2"></i></a>

            <div className="relative flex items-center">
            <i class="fa-solid fa-magnifying-glass absolute ml-5 pointer-events-none"></i>
            <input className="bg-search  border-none pr-3 pl-12  xl:w-[390px] h-[35px] rounded-[40px] mr-20 placeholder-black" name="search" placeholder="Search Study Rooms" autocomplete="off" aria-label="Search Study Rooms"></input>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="pl-[10%] mt-10 mb-2 text-gray-500  text-lg">My Study Rooms</p>
          <button className="pl-[10%] mt-10 mb-2 text-yellow-500  text-s mr-20">See all</button>
        </div>
        <div className="mr-20">
          <div className="ml-[10%] xl:grid xl:grid-cols-3">
            <div className="flex flex-col items-center m-4">
              <div className="h-[10px] xl:w-[100%] w-[300px] bg-yellow-600 rounded-t-[50px]">
              </div>
              <div className="h-auto xl:w-[100%] w-[300px] bg-yellow-100 rounded-b-[30px]">
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
            <div className="flex flex-col items-center m-4">
              <div className="h-[10px] xl:w-[100%] w-[300px] bg-yellow-600 rounded-t-[50px]">
              </div>
              <div className="h-auto xl:w-[100%] w-[300px] bg-yellow-100 rounded-b-[30px]">
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
            <div className="flex flex-col items-center m-4">
              <div className="h-[10px] xl:w-[100%] w-[300px] bg-yellow-600 rounded-t-[50px]">
              </div>
              <div className="h-auto xl:w-[100%] w-[300px] bg-yellow-100 rounded-b-[30px]">
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
        <div className="flex justify-between">
          <p className="pl-[10%] mt-10 mb-2 text-gray-500  text-lg">Community Popular Study Rooms</p>
          <button className="pl-[10%] mt-10 mb-2 text-yellow-500  text-s mr-20">See all</button>
        </div>
        <div className="mr-20">
          <div className="ml-[10%] xl:grid xl:grid-cols-3">
            <div className="flex flex-col items-center m-4">
              <div className="h-[10px] xl:w-[100%] w-[300px] bg-yellow-600 rounded-t-[50px]">
              </div>
              <div className="h-auto xl:w-[100%]  w-[300px] bg-yellow-100 rounded-b-[30px]">
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
            <div className="flex flex-col items-center m-4">
              <div className="h-[10px] xl:w-[100%] w-[300px] bg-yellow-600 rounded-t-[50px]">
              </div>
              <div className="h-auto xl:w-[100%]  w-[300px] bg-yellow-100 rounded-b-[30px]">
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
            <div className="flex flex-col items-center m-4">
              <div className="h-[10px] xl:w-[100%] w-[300px] bg-yellow-600 rounded-t-[50px]">
              </div>
              <div className="h-auto xl:w-[100%]  w-[300px] bg-yellow-100 rounded-b-[30px]">
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
      <div className="xl:w-[25%]">
        <div className="">
          <div className="m-10 xl:mt-20 relative flex items-center">
            <i class="fa-solid fa-magnifying-glass absolute ml-5 pointer-events-none"></i>
            <input className="bg-search  border-none pr-3 pl-12  w-[330px] h-[35px] rounded-[40px] mr-20 placeholder-black" name="search" placeholder="Search Your Friends" autocomplete="off" aria-label="Search Your Friends"></input>
          </div>
          <div>
            <p className="m-10 mb-4 font-bold text-2xl">Your Friends</p>
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
                <p className="opacity-40">Offline</p>
              </div>
              </div>
              <div className="mr-5 opacity-40">
                <i class="fa-solid fa-angle-right"></i>
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
                <p className="opacity-40">Offline</p>
              </div>
              </div>
              <div className="mr-5 opacity-40">
                <i class="fa-solid fa-angle-right"></i>
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
                <p className="opacity-40">Offline</p>
              </div>
              </div>
              <div className="mr-5 opacity-40">
                <i class="fa-solid fa-angle-right"></i>
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
                <p className="text-lg font-semibold ">Mahoga Harith</p>
                <p className="opacity-40">Offline</p>
              </div>
              </div>
              <div className="mr-5 opacity-40">
                <i class="fa-solid fa-angle-right"></i>
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