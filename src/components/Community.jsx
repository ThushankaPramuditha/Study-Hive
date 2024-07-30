import React from 'react';
import ucsc from '../assets/images/ucsc.png';
import ieee from '../assets/images/ieee.png';
import rotaract from '../assets/images/rotaract.png';
import SideBar from './SideBar';
import Notification from './Notification';
import Reminder from './Reminders';
import Calendar from './BoxCalendar';



const communities = [
    {
      name: "UCSC 19",
      description: "Official StudyHive Community of UCSC 19 batch",
      members: 235,
      image: ucsc,
    },
    {
      name: "UCSC IEEE",
      description: "Official StudyHive Community of UCSC IEEE",
      members: 235,
      image: ieee,
    },
    {
      name: "ROTARACT UCSC",
      description: "Official StudyHive Community of Rotaract UCSC",
      members: 235,
      image: rotaract,
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
        // <SideBar />
      <div className="min-h-screen bg-gray-100 p-6 flex flex-row"> 
      <div>
      {/* <SideBar /> */}
      </div>
        <div className="max-w-4xl mx-auto mt-5 ml-[273px]">
          <div className="bg-white p-6 rounded-xl shadow-md mb-6">
            <div className="flex justify-between items-center mb-4">
            <div className="flex-grow flex flex-row justify-between items-center">
                <h2 className="text-2xl font-semibold mb-2">Create a New Community</h2>
                <button className="bg-custom-color text-white px-4 py-2 rounded-lg ml-auto">Let's Go</button>
                </div>

            </div>
            <p>Create a new community for collaborative learning and unlock the power of shared knowledge and mutual growth</p>
          </div>
  
          <div className="relative mb-6">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              placeholder="Search Communities"
              className="bg-orange-100 w-full p-4 pl-12 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <h3 className="text-xl font-semibold mb-4">Your Communities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map((community, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                <img src={community.image} alt={community.name} className="h-24 mb-4" />
                <h4 className="text-lg font-semibold mb-2">{community.name}</h4>
                <p className="text-gray-600 mb-4">{community.description}</p>
                <div className="text-gray-400"> <i className="fas fa-users mr-2"></i>{community.members}</div>
              </div>
            ))}
          </div>


          <h3 className="text-xl font-semibold mb-4 mt-10">Popular Communities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCommunities.map((community, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                    <h4 className="text-lg font-semibold mb-2">{community.name}</h4>
                    <p className="text-gray-600 mb-4">{community.description}</p>
                    <div className="text-gray-400"> <i className="fas fa-users mr-2"></i>{community.members}</div>
                    <button className="bg-white text-customOlive font-bold px-5 py-2 rounded-lg align items-center mt-5 border border-custom-color hover:bg-custom-color hover:text-green-700"style={{ borderColor: 'custom-color', borderWidth: '1px', borderStyle: 'solid' }}>Join</button>

                   
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
    );
  };
  
  export default CommunityPage;