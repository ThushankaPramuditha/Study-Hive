import React, { useState } from 'react';
import solo from '../assets/images/Solostudy.png';
import group from '../assets/images/Groupstudy.png';
// import Calendar from './BoxCalendar'; 
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const DashboardContent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleCreateGroupClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleRoom = () => {
    navigate('/Room');
  };

  const handlestudy = (event) => {
    event.preventDefault();
    navigate('/Home2');
  };

  return (
    <div className="relative">
      <div className={`flex mt-2 ml-[263px] ${showPopup ? 'blur-md' : ''}`}>
        <div className="w-[75%]">
          <div className="ml-10">
            <p className="text-blue-900 text-2xl">Welcome, Sadun S.</p>
            <p className="text-gray-400">Have a good day!</p>
          </div>
          <div className="mt-10 w-[100%]">
            <p className="text-blue-900 text-4xl text-center">Let's Find a Study Partner</p>
            <div className="flex justify-between pl-[10%] pr-[10%] pt-[3%]">
              <div className="flex flex-col justify-center border-2 w-[420px] h-[340px] rounded-[50px] items-center" style={{ backgroundImage: `url(${solo})` }}>
                <p className="text-2xl text-white text-center pb-6 font-bold">Solo Study</p>
                <button className="bg-custom-color p-3 m-3 text-xl text-white w-15 rounded-[50px] w-[200px] justify-center">Start Solo Study</button>
              </div>
              <div className="flex flex-col justify-center items-center border-2 w-[420px] h-[340px] rounded-[50px]" style={{ backgroundImage: `url(${group})` }}>
                <p className="text-2xl text-white text-center pb-6 font-bold">Group Study</p>
                <button className="bg-custom-color p-3 m-3 text-xl text-white w-15 rounded-[50px] w-[300px]">Join a Group Study Room</button>
                <button className="bg-custom-color p-3 m-3 text-xl text-white w-15 rounded-[50px] w-[300px]" onClick={handleCreateGroupClick}>Create Group Study Room</button>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="pl-[10%] mt-10 mb-1 text-gray-500 text-lg">My Study Rooms</p>
            <p className="pl-[10%] mt-10 mb-1 text-yellow-500 text-s mr-20">See all</p>
          </div>
          <div className="mr-20">
            <div className="ml-[10%] grid grid-cols-3">
              {/* Study Room Cards */}
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex flex-col items-center m-4">
                  <div className="h-[10px] w-[320px] bg-yellow-600 rounded-t-[50px]"></div>
                  <div className="h-[330px] w-[320px] bg-yellow-100 rounded-b-[30px]">
                    <p className="font-bold text-xl m-4">Pure Math</p>
                    <p className="ml-4 opacity-60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis illum ex iure incidunt laudan</p>
                    <div className="flex items-center m-4 mt-10">
                      <i className="fa-solid fa-user opacity-30 mr-4"></i>
                      <p className="text-sm opacity-40">Pramukha Thenuwara</p>
                    </div>
                    <div className="flex justify-between m-4">
                      <div className="flex items-center">
                        <i className="fa-solid fa-note-sticky opacity-30 mr-4"></i>
                        <p className="text-sm opacity-40">B classes</p>
                      </div>
                      <div className="flex items-center mr-20">
                        <i className="fa-solid fa-clock opacity-30"></i>
                        <p className="text-sm opacity-40 ml-4">3 Hours</p>
                      </div>
                    </div>
                    <div className="flex justify-between m-4 mt-10">
                      <div className="flex">
                        {[...Array(4)].map((_, idx) => (
                          <div key={idx} className={`w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black ${idx !== 0 ? 'ml-[-15px]' : ''}`}></div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between items-center">
                        <p className="opacity-40">20</p>
                        <i className="fa-regular fa-comments ml-4 opacity-30"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-100 border border-gray-200 "></div>
        <div className="w-[25%]">
          <div className="border-2 h-[30%] border-black">
            <p className="text-center">Calendar</p>
            {/* <Calendar/> */}
          </div>
          <div>
            <div>
              <p className="m-10 mb-4 font-bold text-2xl">Schedule</p>
            </div>
            <div className="flex flex-col items-center ml-2">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex items-center w-[350px] h-[70px] bg-gray-100 rounded-[10px] justify-between m-2">
                  <div className="ml-7 w-2 h-2 bg-yellow-600 rounded"></div>
                  <div className="ml-[-20%] flex flex-col">
                    <p className="text-xl font-bold mb-3">English Classes</p>
                    <p className="opacity-40">Tika sarak s.pd</p>
                  </div>
                  <div className="mr-10 opacity-40">
                    <i className="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white p-8 rounded-lg z-50 w-[400px]">
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
              onClick={handleClosePopup}
            >
              <FontAwesomeIcon icon={faTimes} className="h-4 w-4" />
            </button>
            <p className="text-xl mb-2 text-center">Let’s Create Your Room</p>
            <hr className="mb-5 w-1/2 ml-20 bg-[#F6CA30] border-0 h-1" />
            <form>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-inter text-black" htmlFor="RoomName">
                  Study Room Name
                </label>
                <input
                  type="text"
                  id="RoomName"
                  placeholder="Enter your Study Room name"
                  className="input-field"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-inter text-black" htmlFor="description">
                  About the Study Room
                </label>
                <textarea
                  id="description"
                  className="input-field block w-full px-4 py-2 text-black font-inter bg-white border border-yellow-400 rounded-[25px] focus:outline-none focus:ring focus:ring-opacity-40"
                  rows="5"
                  placeholder="Let Others Know About Your Study Room"
                ></textarea>
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-inter text-black" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter the Study Room subject"
                  className="input-field"
                />
              </div>
              <div className="flex items-center justify-end">
                <button
                  className="px-4 py-2 text-black font-inter bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 font-bold w-32 h-10"
                  type="button"
                  onClick={handleRoom}
                >
                  Let's Go
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardContent;
