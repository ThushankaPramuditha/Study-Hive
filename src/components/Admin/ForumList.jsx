import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

const forums = [
    {
      id: 1,
      username: "Dushan Jayalath",
      email: "dushan@mail.com",
      date: "31.07.2024",
      post: "I want to download MongoDB on my iMac. How can I do that? So far, I've tried visiting the official MongoDB website, but I'm unsure about the installation steps. Any help would be greatly appreciated!",
      responses: [
        {
          text: "To install MongoDB on your iMac, download the MongoDB Community Server from the MongoDB website, follow the installation instructions provided, and use Homebrew for easier management.",
          responder: "Puspika Silva"
        },
        {
          text: "You might also want to check out the MongoDB installation guide specific to macOS on their documentation page.",
          responder: "Jeewaka Dias"
        },
        {
          text: "Another option is to use a package manager like MacPorts to install MongoDB.",
          responder: "Randika Alwis"
        }
      ]
    },
    {
      id: 2,
      username: "Puspika Silva",
      email: "puspika@mail.com",
      date: "24.07.2024",
      post: "I am unable to find my course materials on the platform. Could you please help me locate them?",
      responses: [
        {
          text: "Please check the 'Course Materials' section under the 'Resources' tab. If you still can't find them, try contacting the course administrator.",
          responder: "Dushan Jayalath"
        }
      ]
    },
    {
      id: 3,
      username: "Jeewaka Dias",
      email: "jeewaka@mail.com",
      date: "29.07.2024",
      post: "Can anyone explain the concept of imaginary numbers in mathematics? How are they used in real-world applications?",
      responses: [
        {
          text: "Imaginary numbers are used to solve equations that don't have real solutions, like √(-1). They have applications in engineering, signal processing, and quantum mechanics.",
          responder: "Randika Alwis"
        }
      ]
    },
    {
      id: 4,
      username: "Randika Alwis",
      email: "randi@mail.com",
      date: "31.07.2024",
      post: "I'm struggling to understand the differences between classical and quantum mechanics. Can someone break down the key principles of each and how they apply to different physical systems?",
      responses: [
        {
          text: "Classical mechanics deals with macroscopic systems and follows Newton's laws of motion, while quantum mechanics describes microscopic systems and incorporates the principles of wave-particle duality and uncertainty.",
          responder: "Dushan Jayalath"
        },
        {
          text: "In classical mechanics, objects are described by their position and momentum, whereas in quantum mechanics, particles exhibit both wave and particle properties.",
          responder: "Jeewaka Dias"
        }
      ]
    },
  ];
  
  

  const ForumCard = ({ forum }) => {
    const [showDetails, setShowDetails] = useState(false);
  
    return (
      <div className="bg-[#FCFCFC] shadow-md rounded-lg p-4 mb-10 mr-5">
        <div className="grid grid-cols-12 items-center mb-4">
          <div className="col-span-1">
            <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white">
              {forum.username[0]}
            </div>
          </div>
          <div className="col-span-3">
            <h3 className="text-lg font-semibold">{forum.username}</h3>
          </div>
          <div className="col-span-3">
            <p className="text-gray-600">{forum.email}</p>
          </div>
          <div className="col-span-2">
            <p className="text-gray-600">{forum.date}</p>
          </div>
          <div className="col-span-3 flex justify-end gap-12 mr-8">
            <button className="">
              <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
            </button>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="">
          <p className="text-black">{forum.post}</p>
     
          {showDetails && forum.responses.length > 0 && (
            <div className="">
                <hr className="my-4" />
              {forum.responses.map((response, index) => (
                <div key={index} className="mt-4">
                  <p className="text-gray-700 text-sm">{response.text}</p>
                  <p className="text-gray-500 text-xs mt-2">- {response.responder}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {forum.responses.length > 0 && (
            
          <>
          
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-[#717171] text-sm mt-4"
            >
              {showDetails ? 'Show Less ▲' : 'Show responses ▼'}
            </button>
          </>
        )}
      </div>
    );
  };
  
  

  const Forum = () => {
    const [filter, setFilter] = useState('filter by day');
    
    // Function to filter forums
    const filterForums = (forums, filter) => {
      const now = moment();
      return forums.filter(forum => {
        const forumDate = moment(forum.date, "DD.MM.YYYY");
        switch (filter) {
          case 'today':
            return forumDate.isSame(now, 'day');
          case 'yesterday':
            return forumDate.isSame(now.clone().subtract(1, 'day'), 'day');
          case 'lastWeek':
            return forumDate.isBetween(now.clone().subtract(7, 'days'), now, 'day', '[]');
          case 'lastMonth':
            return forumDate.isBetween(now.clone().subtract(1, 'month').startOf('month'), now, 'day', '[]');
          default:
            return true;
        }
      });
    };
  
    const filteredForums = filterForums(forums, filter);
  
    return (
      <div className='flex'>
        <AdminSidebar />
        <div className="flex-1 p-6 ml-[273px] mt-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold mb-4">Forum Posts</h1>
            <div>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-[180px] p-2 border border-gray-300 rounded-md text-[#8B909A] mr-8"
              >
                <option value="">filter by day</option>
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="lastWeek">Last Week</option>
                <option value="lastMonth">Last Month</option>
              </select>
            </div>
          </div>
          {filteredForums.length === 0 ? (
            <p className="text-gray-600">No posts for this period.</p>
          ) : (
            <div>
              {filteredForums.map((forum) => (
                <ForumCard key={forum.id} forum={forum} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Forum;
