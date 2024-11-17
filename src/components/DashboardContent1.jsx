import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import solo from "../assets/images/Solostudy.png";
import group from "../assets/images/Groupstudy.png";
import User1 from "../assets/images/user1.jpg";
import User2 from "../assets/images/user2.jpeg";
import User3 from "../assets/images/women.png";
import User4 from "../assets/images/profile.png";
import Calendar from "./BoxCalendar";

const DashboardContent = () => {
  const navigate = useNavigate();

  const Find = (event) => {
    event.preventDefault();
    navigate('/findpartner');
  };

  // State for create room popup
  const [isPop, setIsPop] = useState(false);
  const [roomName, setRoomName] = useState('');
  const [roomDescription, setRoomDescription] = useState('');
  const [count, setCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [isAllow, setIsAllow] = useState(false);

  const createRoom = async () => {
    if (!roomName || !roomDescription || !isAllow) {
      console.error('Please fill all required fields and accept terms');
      return;
    }

    const roomData = {
      name: roomName,
      description: roomDescription,
      participantCount: count,
      isPublic: isChecked,
      acceptedTerms: isAllow,
    };

    try {
      const response = await fetch('/api/study-rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(roomData),
      });

      if (response.ok) {
        const data = await response.json();
        setIsPop(false);
        navigate(`/videocall?roomID=${data.roomID}`);
      } else {
        console.error('Failed to create the study room');
      }
    } catch (error) {
      console.error('Error creating room:', error);
    }
  };

  // State for join room popup
  const [isPopjoin, setIsPopjoin] = useState(false);
  const [roomKey, setRoomKey] = useState('');

  const joinRoom = async () => {
    if (!roomKey || !isAllow) {
      console.error('Please provide room key and accept terms');
      return;
    }

    try {
      const response = await fetch('/api/join-room', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ roomKey, acceptedTerms: isAllow }),
      });

      if (response.ok) {
        const data = await response.json();
        setIsPopjoin(false);
        navigate(`/videocall?roomID=${data.roomID}`);
      } else {
        console.error('Failed to join the study room');
      }
    } catch (error) {
      console.error('Error joining room:', error);
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setCount(Number(value));
    }
  };

  const increment = () => {
    setCount(count + 1);
  };

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleAllow = (e) => {
    setIsAllow(e.target.checked);
  };


  return (
    <div className="xl:flex mt-2 xl:ml-[263px] ml-[60px]">
      <div className="xl:w-[75%] w-[100%]">
      <div className="ml-10">
          <p className="text-blue-900  text-2xl">Welcome, Sadun S.</p>
          <p className="text-gray-400">Have a good day!</p>
        </div>
        <div className="mt-10 w-[100%]">
          <div className="flex justify-center items-center mb-4">
            <p className="text-blue-900 text-4xl text-center mr-8">
              Let's Find a Study Partner
            </p>
            <button
              className="bg-[#F6CA30] text-m text-black rounded-[50px] w-[100px] h-[40px] hover:shadow-lg hover:shadow-gray-400 active:shadow-none"
              onClick={Find}
            >
              Let's Go
            </button>
          </div>
          <div className="xl:flex xl:felx-col xl:justify-between pl-[10%] pr-[10%] pt-[3%] ">
            <div
              className="flex flex-col justify-center border-2 w-[420px] h-[340px] rounded-[50px] items-center"
              style={{ backgroundImage: `url(${solo})` }}
            >
              <p className="text-2xl text-white text-center pb-6 font-bold">
                Solo Study
              </p>
              <button className="bg-custom-color p-3 m-3 text-xl text-white w-15 rounded-[50px] w-[200px] justify-center hover:shadow-lg hover:shadow-gray-400 active:shadow-none">
                Start Solo Study
              </button>
            </div>

            <div
              className="flex flex-col justify-center items-center border-2 w-[420px] h-[340px] rounded-[50px]"
              style={{ backgroundImage: `url(${group})` }}
            >
              <p className="text-2xl text-white text-center pb-6 font-bold">
                Group Study
              </p>
              <button
                onClick={joinRoom}
                className="bg-custom-color p-3 m-3 text-xl text-white w-15 rounded-[50px] w-[300px] hover:shadow-lg hover:shadow-gray-400 active:shadow-none"
              >
                Join a Group Study Room
              </button>
              <button
                onClick={createRoom}
                className="bg-custom-color1 p-3 m-3 text-xl w-15 rounded-[50px] w-[300px] hover:shadow-lg hover:shadow-gray-400 active:shadow-none"
              >
                Create Group Study Room
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="pl-[10%] mt-10 mb-1 text-gray-500  text-lg">
            My Study Rooms
          </p>
          <p className="mt-10 mb-1 text-yellow-500  text-md mr-20 hover:text-yellow-700 active:text-yellow-500 cursor-pointer">
            See all
          </p>
        </div>
        <div className="mr-20">
          <div className="ml-[10%] xl:grid xl:grid-cols-3">
            <div className="flex flex-col items-center xl:m-4 m-3 xl:w-[90%] w-[100%]">
              <div className="h-[10px] xl:w-[100%] w-[300px]   bg-yellow-600 rounded-t-[50px]"></div>
              <div className="h-auto xl:w-[100%] w-[300px]   bg-yellow-100 rounded-b-[30px]">
                <p className="font-bold text-xl m-4">Pure Math</p>
                <p className="ml-4 opacity-60">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officiis illum ex iure incidunt laudan
                </p>
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
                    <div className="">
                      <img src={User1} alt="User" className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black" />
                    </div>
                    <div className="ml-[-15px]">
                      <img src={User3} alt="User" className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black" />
                    </div>
                    <div className="ml-[-15px]">
                      <img src={User2} alt="User" className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black" />
                    </div>
                    <div className="ml-[-15px]">
                      <img src={User4} alt="User" className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black" />
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
              <div className="h-[10px] xl:w-[100%] w-[300px]   bg-yellow-600 rounded-t-[50px]"></div>
              <div className="h-auto xl:w-[100%] w-[300px]   bg-yellow-100 rounded-b-[30px]">
                <p className="font-bold text-xl m-4">Pure Math</p>
                <p className="ml-4 opacity-60">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officiis illum ex iure incidunt laudan
                </p>
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
                    <div className="">
                      <img src={User1} alt="User" className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black" />
                    </div>
                    <div className="ml-[-15px]">
                      <img src={User3} alt="User" className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black" />
                    </div>
                    <div className="ml-[-15px]">
                      <img src={User4} alt="User" className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black" />
                    </div>
                    <div className="ml-[-15px]">
                      <img src={User2} alt="User" className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black" />
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
              <div className="h-[10px] xl:w-[100%] w-[300px]   bg-yellow-600 rounded-t-[50px]"></div>
              <div className="h-auto xl:w-[100%] w-[300px]   bg-yellow-100 rounded-b-[30px]">
                <p className="font-bold text-xl m-4">Pure Math</p>
                <p className="ml-4 opacity-60">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officiis illum ex iure incidunt laudan
                </p>
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
                    <div className="">
                      <img src={User3} alt="User" className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black" />
                    </div>
                    <div className="ml-[-15px]">
                      <img src={User1} alt="User" className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black" />
                    </div>
                    <div className="ml-[-15px]">
                      <img src={User2} alt="User" className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black" />
                    </div>
                    <div className="ml-[-15px]">
                      <img src={User4} alt="User" className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black" />
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
              <div className="h-[10px] xl:w-[100%] w-[300px]   bg-yellow-600 rounded-t-[50px]"></div>
              <div className="h-auto xl:w-[100%] w-[300px]   bg-yellow-100 rounded-b-[30px]">
                <p className="font-bold text-xl m-4">Pure Math</p>
                <p className="ml-4 opacity-60">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officiis illum ex iure incidunt laudan
                </p>
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
                    <div className="">
                      <img src={User1} alt="User" className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black" />
                    </div>
                    <div className="ml-[-15px]">
                      <img src={User2} alt="User" className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black" />
                    </div>
                    <div className="ml-[-15px]">
                      <img src={User3} alt="User" className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black" />
                    </div>
                    <div className="ml-[-15px]">
                      <img src={User4} alt="User" className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black" />
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
              <div className="h-[10px] xl:w-[100%] w-[300px]   bg-yellow-600 rounded-t-[50px]"></div>
              <div className="h-auto xl:w-[100%] w-[300px]   bg-yellow-100 rounded-b-[30px]">
                <p className="font-bold text-xl m-4">Pure Math</p>
                <p className="ml-4 opacity-60">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officiis illum ex iure incidunt laudan
                </p>
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
                    <div className="">
                      <img src={User4} alt="User" className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black" />
                    </div>
                    <div className="ml-[-15px]">
                      <img src={User3} alt="User" className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black" />
                    </div>
                    <div className="ml-[-15px]">
                      <img src={User2} alt="User" className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black" />
                    </div>
                    <div className="ml-[-15px]">
                      <img src={User1} alt="User" className="w-[40px] h-[40px] rounded-[100%] border-2 border-white bg-black" />
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
      {isPop && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg h-auto w-[400px]">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-xl font-semibold mb-1">Let's Create Your Room</h2>
              <div className="h-[2px] w-[100px] bg-questions"></div>
            </div>
            <div className="mt-10">
              <p className="text-sm font-semibold">Study Room Name</p>
              <input
                type="text"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                className="border questions rounded p-3 pl-6 w-[100%] mt-3 text-xs rounded-3xl"
                placeholder="Enter your Study Room name"
              />
            </div>
            <div className="mt-5">
              <p className="text-sm font-semibold">About the Study Room</p>
              <textarea
                value={roomDescription}
                onChange={(e) => setRoomDescription(e.target.value)}
                className="border questions rounded rounded-3xl mt-3 w-[100%] h-[100px] text-xs p-3 pl-6 resize-none textarea-hide-scrollbar"
                placeholder="Let Others Know About Your Study Room"
              />
            </div>
            <div>
              <div className="flex justify-between h-[40px] w-auto member_count items-center rounded rounded-xl mt-5">
                <div className="">
                  <p className="text-xs align-center ml-3">Number of Participants</p>
                </div>
                <div className="mr-3">
                  <input
                    type="text"
                    onChange={handleInputChange}
                    value={count}
                    className="border member_count rounded text-center text-sm w-10 h-7"
                  />
                  <button onClick={increment} className="text-black ml-3 hover:shadow-lg hover:shadow-gray-400 active:shadow-none">
                    <i className="fa-solid fa-plus text-sm"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <div></div>
              <div className="bg-gray-100 flex items-center justify-center space-x-4 mr-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="square-radio"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <span className="text-xs ">Anyone can join</span>
                </label>
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <div className="bg-gray-100 flex items-center justify-center space-x-4 mr-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="square-radio"
                    checked={isAllow}
                    onChange={(e) => setIsAllow(e.target.checked)}
                  />
                  <span className="text-xs ">Accept terms and conditions</span>
                </label>
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <button
                onClick={() => setIsPop(false)}
                className="px-4 py-2 border border-[2px] questions text-white rounded hover:shadow-lg hover:shadow-gray-400 active:shadow-none"
              >
                <p className="logo1">Cancel</p>
              </button>
              <button
                onClick={createRoom}
                className="px-4 py-2 w-[100px] bg-questions text-black text-xs font-semibold rounded hover:shadow-lg hover:shadow-gray-400 active:shadow-none"
                disabled={!isAllow || !roomName || !roomDescription}
              >
                <p>Let's Go</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {isPopjoin && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg h-auto w-[400px]">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-xl font-semibold mb-1">Join Your Room</h2>
              <div className="h-[2px] w-[100px] bg-questions"></div>
            </div>
            <div className="mt-10">
              <p className="text-sm font-semibold">Study Room Key</p>
              <input
                type="text"
                value={roomKey}
                onChange={(e) => setRoomKey(e.target.value)}
                className="border questions rounded p-3 pl-6 w-[100%] mt-3 text-xs rounded-3xl"
                placeholder="Enter your Study Room key"
              />
            </div>
            <div className="flex justify-between mt-10">
              <div className="bg-gray-100 flex items-center justify-center space-x-4 mr-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="square-radio"
                    checked={isAllow}
                    onChange={(e) => setIsAllow(e.target.checked)}
                  />
                  <span className="text-xs ">Accept terms and conditions</span>
                </label>
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <button
                onClick={() => setIsPopjoin(false)}
                className="px-4 py-2 border border-[2px] questions text-white rounded hover:shadow-lg hover:shadow-gray-400 active:shadow-none"
              >
                <p className="logo1">Cancel</p>
              </button>
              <button
                onClick={joinRoom}
                className="px-4 py-2 w-[100px] bg-questions text-black text-xs font-semibold rounded hover:shadow-lg hover:shadow-gray-400 active:shadow-none"
                disabled={!isAllow || !roomKey}
              >
                <p>Let's Go</p>
              </button>
            </div>
          </div>
        </div>
      )}

        <div className="h-100 border border-gray-200 hidden xl:block"></div>
        <div className="xl:w-[25%] flex flex-col items-center ">
          <div className="xl:h-[30%] xl:w-[90%] flex justify-center items-center w-[400px] h-[500px] p-2">
            <Calendar />
          </div>
          <div className="">
            <div>
              <p className="m-10 ml-4 mb-4 font-bold text-2xl">Schedule</p>
            </div>
            <div className="flex flex-col items-center ">
              <div className="flex justify-between items-center xl:w-[100%] w-[300px] h-auto bg-gray-100 rounded-[10px] m-2 p-1">
                <div className="xl:ml-3 ml-7 w-2 h-2 bg-yellow-600 rounded"></div>
                <div className="flex flex-col">
                  <p className="text-xl font-bold mb-3">English Classes</p>
                  <p className="opacity-40">Tika sarak s.pd</p>
                </div>
                <div className="mr-10 opacity-40">
                  <i className="fa-solid fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default DashboardContent;