import React from 'react';
import ucsc from '../assets/images/ucsc.png';
import ieee from '../assets/images/ieee.png';
import rotaract from '../assets/images/rotaract.png';
import SideBar from './SideBarnNavbar';
import Notification from './Notification';
import Reminder from './Reminders';
import Calendar from './BoxCalendar';
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const communities = [
    {
      name: "UCSC 19",
      description: "Official StudyHive Community of UCSC 19 batch",
      members: 235,
      image: ucsc,
      imageStyle: "h-24 w-24 mx-auto",
    },
    {
      name: "UCSC IEEE",
      description: "Official StudyHive Community of UCSC IEEE",
      members: 235,
      image: ieee,
      imageStyle: "h-24 w-32 mx-auto",
    },
    {
      name: "ROTARACT UCSC",
      description: "Official StudyHive Community of Rotaract UCSC",
      members: 235,
      image: rotaract,
      imageStyle: "h-24 w-30 mx-auto",
    },
  ];

  const popularCommunities = [
    {
      name: "UOC Science",
      description: "Official StudyHive Community of Faculty of Science",
      members: 235,
      image: ucsc,
    },
    {
      name: "UOC Faculty of Management & Finance",
      description: "Official StudyHive Community of Faculty of Management & Finance",
      members: 235,
      image: ieee,
    },
    {
      name: "UOC UCSC",
      description: "Official StudyHive Community of UCSC",
      members: 235,
      image: rotaract,
    },
  ];
  
  const CommunityPage = () => {
    return (
      <div className="">
      <SideBar />
      <div className="min-h-screen p-6 flex flex-row"> 
        <div className="max-w-4xl mx-auto mt-5 xl:ml-[263px] ml-[60px]">
          <div className="bg-white p-6 rounded-xl shadow-lg mb-6  w-[90%] ml-[30px]">
            <div className="flex justify-between items-center mb-4">
            <div className="flex-grow flex flex-row justify-between items-center">
                <h2 className="text-[18px] font-semibold mb-2">Create a New Community</h2>
                <button className="bg-custom-color text-white px-3 py-1 rounded-lg ml-auto text-[14px]">Let's Go</button>
                </div>

            </div>
            <p className="text-[14px]  mb-2 text-[#11181C]">Create a new community for collaborative learning and unlock the power of shared knowledge and mutual growth</p>
          </div>
          <div className="relative mb-6 ml-[150px]">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ">
        <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search Communities"
        className="bg-orange-100 pl-10 pr-4 py-2 w-[520px] h-[40px] text-black rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px]"
      />
    </div>

          <h3 className="text-xl font-semibold mb-4">Your Communities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-[40px] mr-[50px]">
            {communities.map((community, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col ">
               
                <h4 className="text-[14px] font-semibold mb-2">{community.name}</h4>
                <p className="text-gray-600 mb-2 text-[11px]">{community.description}</p>
                <div className="text-gray-400 text-[11px] mb-4"> <i className="fas fa-users mr-2"></i>{community.members}</div>
                <img src={community.image} alt={community.name} className={`mb-4 ${community.imageStyle}`} />
              </div>
            ))}
          </div>


          <h3 className="text-xl font-semibold mb-4 mt-10">Popular Communities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ml-[40px] mr-[50px]">
            {popularCommunities.map((community, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col">
                    <h4 className="text-[14px] font-semibold mb-2">{community.name}</h4>
                    <p className="text-gray-600 mb-2 text-[11px]">{community.description}</p>
                    <div className="text-gray-400 text-[11px] mb-4"> <i className="fas fa-users mr-2"></i>{community.members}</div>
                    <button className="bg-white text-customOlive font-bold rounded-lg align w-20 text-[14px] border border-custom-color hover:bg-custom-color hover:text-green-700"style={{ borderColor: 'custom-color', borderWidth: '1px', borderStyle: 'solid' }}>Join</button>

                   
                </div>
                ))}
            </div>
        </div>
       <div classname="flex flex-col ">
       <div className="ml-3 w-[300px] h-[340px] border-2 border-gray-100 rounded-lg bg-white">
          <Notification />
        </div>

        <div className="ml-3 w-[300px] h-[370px] border-2 border-gray-100 rounded-lg mt-4 bg-white">
          <Reminder />
        </div>
        

        <div className="ml-3 w-[300px] h-auto border-2 border-gray-100 rounded-lg mt-4 bg-white">
          <Calendar />
        </div>
       </div>
        
      </div>
      </div>
    );
  };
  
  export default CommunityPage;