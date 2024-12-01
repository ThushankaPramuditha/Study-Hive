import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import SideBarnNavbar from './SideBarnNavbar';
import { fetchUserRole } from "../api/fetchUserRole";



const StudyRooms = () => {

  const navigate = useNavigate();

  const [userId, setUserId] = useState(null);
  const [userStatus, setUserStatus] = useState(null);
  const [isPop, setIsPop] = useState(false);
  const [count, setCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [studyRooms, setStudyRooms] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [joinRoomData, setJoinRoomData] = useState(null);
  const [createRoomTerms, setCreateRoomTerms] = useState(false);
  const [roomKey, setRoomKey] = useState("");
  const [popularStudyRooms, setPopularStudyRooms] = useState([]);
  const [userFname, setUserFname] = useState("");
  const [userLname, setUserLname] = useState("");


  useEffect(() => {
    const fetchRole = async () => {
      try {
        const response = await fetchUserRole();
        console.log(response);

        if (response && response.id) {
          setUserId(response.id);
          setUserStatus(response.status);
          setUserFname(response.firstname);
          setUserLname(response.lastname);

        } else {
          console.error("Invalid user data received:", response);
        }
      } catch (error) {
        console.error("Error fetching user role:", error.message);
      }
    };

    fetchRole();
    fetchpopularStudyRoom();

  }, []);

  useEffect(() => {
    if (userId) {
      console.log("Fetching study rooms for user:", userId);
      fetchGroup(userId);
    }
  }, [userId]);

  const createRoom = () => {
    setIsPop(!isPop);
  };

  const creategroupStudyRoom = async () => {
    const roomName = document.querySelector("input[placeholder='Enter your Study Room name']").value;
    const description = document.querySelector("textarea[placeholder='Let Others Know About Your Study Room']").value;
    const participantCount = count;
    const isPublic = isChecked;
    const acceptTerms = createRoomTerms;
    const ownerId = userId;

    if (!roomName || !description || participantCount <= 0 || !acceptTerms || !roomKey) {
      alert("Please fill in all fields correctly, accept the terms, and provide a room key.");
      return;
    }

    const studyRoomData = {
      roomName,
      description,
      participantCount,
      isPublic,
      acceptTerms,
      ownerId,
      roomKey,
    };

    try {
      const response = await fetch("http://localhost:8090/api/studyrooms/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studyRoomData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Study room created successfully!");
        setIsPop(false);
        fetchGroup(userId);
        console.log("Created room:", data);
      } else {
        const errorData = await response.json();
        alert(`Failed to create study room: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error creating study room:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleDelete = async (roomId) => {
    try {
      const response = await fetch(`http://localhost:8090/api/studyrooms/${roomId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Room deleted successfully!');
        setStudyRooms(studyRooms.filter((room) => room.id !== roomId));
      } else {
        alert('Failed to delete room');
      }
    } catch (error) {
      console.error('Error deleting room:', error);
      alert('An error occurred while deleting the room');
    }
  };

  const fetchGroup = async (userId) => {
    console.log("Fetching study rooms for user:", userId);
    try {
      const response = await fetch(`http://localhost:8090/api/studyrooms/user/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Study rooms:", data);
        setStudyRooms(data);
      } else {
        const errorData = await response.json();
        alert(`Failed to fetch study rooms: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error fetching study rooms:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleJoinRoom = (room) => {
    setJoinRoomData({
      roomId: room.id,
      roomName: room.roomName,
      isAllow: false,
      roomKey: "",
    });
  };

  const closeJoinRoom = () => {
    setJoinRoomData(null);
  };

  const handleAllow = (e) => {
    if (joinRoomData) {
      setJoinRoomData(prev => ({ ...prev, isAllow: e.target.checked }));
    } else {
      setCreateRoomTerms(e.target.checked);
    }
  };

  const joinStudyRoom = async () => {
    if (!joinRoomData.isAllow) {
      alert("Please accept the terms and conditions.");
      return;
    }

    if (!joinRoomData.roomKey) {
      alert("Please enter the Study Room Key.");
      return;
    }

    try {
      const url = `http://localhost:8090/api/studyrooms/${joinRoomData.roomId}/join?userId=${userId}&roomKey=${joinRoomData.roomKey}&acceptTerms=${joinRoomData.isAllow}`;

      const response = await fetch(url, { method: 'POST' });

      if (response.ok) {
        const data = await response.json();
        console.log("Joined successfully:", data);
        alert("Successfully joined the room!");
        navigate(`/virtualroom/${joinRoomData.roomId}/${userId}`);

        closeJoinRoom();
        fetchGroup(userId);
      } else {
        const errorData = await response.text();
        console.error("Error:", errorData);
        alert("Failed to join room: " + errorData);
      }
    } catch (error) {
      console.error("Error joining room:", error);
      alert("An error occurred while joining the room.");
    }
  };

  const fetchpopularStudyRoom = async () => {
    try {
      const response = await fetch("http://localhost:8090/api/studyrooms", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        //for popular community study rooms
        const popularStudyRooms = data.filter((room) => room.participantCount > 50);

        console.log("Popular study rooms:", popularStudyRooms);
        setPopularStudyRooms(popularStudyRooms);
      } else {
        const errorData = await response.json();
        alert(`Failed to fetch study rooms: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error fetching study rooms:", error);
      alert("An error occurred. Please try again later.");
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

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };




  return (
    <div className="">
      <SideBarnNavbar />
      <div className="xl:flex
    mt-2 xl:ml-[263px] ml-[60px]">
        <div className="xl:w-[75%]">
          <div className="ml-10">
            <p className="text-blue-900  text-4xl font-bold">Let's Get Back To Work</p>
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={createRoom}
                className="bg-custom-color1 p-2 m-2 text-lg w-10 rounded-[50px] w-[300px] hover:shadow-lg hover:shadow-gray-400 active:shadow-none"
              >
                Create Group Study Room
              </button>
              <div className="relative flex items-center">
                <i class="fa-solid fa-magnifying-glass absolute ml-5 pointer-events-none"></i>
                <input className="bg-search  border-none pr-3 pl-12  xl:w-[390px] h-[35px] rounded-[40px] mr-20 placeholder-black" name="search" placeholder="Search Study Rooms" autocomplete="off" aria-label="Search Study Rooms"></input>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="pl-[10%] mt-10 mb-2 text-gray-500 text-lg">My Study Rooms</p>
            <button
              onClick={toggleShowAll}
              className="pl-[10%] mt-10 mb-2 text-yellow-500 text-s mr-20"
            >
              {showAll ? "Show Less" : "See All"}
            </button>
          </div>

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyRooms.length > 0 ? (
                (showAll ? studyRooms : studyRooms.slice(0, 3)).map((room) => (
                  <div
                    key={room.id}
                    className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                  >
                    {/* Header Bar */}
                    <div className="h-12 bg-gradient-to-r from-yellow-500 to-yellow-400 relative">
                      <button
                        onClick={() => handleDelete(room.id)}
                        className="absolute top-3 right-3 text-white hover:text-gray-200 transition-colors"
                        aria-label="Delete room"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 bg-gradient-to-b from-yellow-50 to-white">
                      <div className="min-h-[180px] flex flex-col justify-between">
                        {/* Room Info */}
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-gray-900 text-center">
                            {room.roomName || "Room Name"}
                          </h3>
                          <p className="text-gray-600 text-center text-sm">
                            {room.description || "Description"}
                          </p>
                        </div>

                        {/* User Info */}
                        <div className="flex flex-col items-center gap-4 mt-6">
                          <div className="flex items-center gap-2 text-gray-600">
                            <i className="fa-solid fa-user text-sm"></i>
                            <span className="text-sm">{`${userFname} ${userLname}`}</span>
                          </div>

                          {/* Join Button */}
                          <button
                            onClick={() => handleJoinRoom(room)}
                            className="w-full max-w-[200px] bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                          >
                            Join Room
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-gray-600">No study rooms available.</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between">
            <p className="pl-[10%] mt-10 mb-2 text-gray-500  text-lg">Community Popular Study Rooms</p>
            <button className="pl-[10%] mt-10 mb-2 text-yellow-500  text-s mr-20">See all</button>
          </div>
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularStudyRooms.length > 0 ? (
                (showAll ? popularStudyRooms : popularStudyRooms.slice(0, 3)).map((room) => (
                  <div
                    key={room.id}
                    className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                  >
                    {/* Header Bar */}
                    <div className="h-12 bg-gradient-to-r from-yellow-500 to-yellow-400 relative">
                      <button
                        onClick={() => handleDelete(room.id)}
                        className="absolute top-3 right-3 text-white hover:text-gray-200 transition-colors"
                        aria-label="Delete room"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 bg-gradient-to-b from-yellow-50 to-white">
                      <div className="min-h-[180px] flex flex-col justify-between">
                        {/* Room Info */}
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-gray-900 text-center">
                            {room.roomName || "Room Name"}
                          </h3>
                          <p className="text-gray-600 text-center text-sm">
                            {room.description || "Description"}
                          </p>
                        </div>

                        {/* User Info */}
                        <div className="flex flex-col items-center gap-4 mt-6">
                          <div className="flex items-center gap-2 text-gray-600">
                            <i className="fa-solid fa-user text-sm"></i>
                            <span className="text-sm">{`${userFname} ${userLname}`}</span>
                          </div>

                          {/* Join Button */}
                          <button
                            onClick={() => handleJoinRoom(room)}
                            className="w-full max-w-[200px] bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                          >
                            Join Room
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-gray-600">No study rooms available.</p>
                </div>
              )}
            </div>
          </div>

          {isPop && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg h-auto w-[400px]">
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-xl font-semibold mb-1">
                    Let’s Create Your Room
                  </h2>
                  <div className="h-[2px] w-[100px] bg-questions"></div>
                </div>
                <div className="mt-10">
                  <p className="text-sm font-semibold">Study Room Name</p>
                  <input
                    type="text"
                    className="border questions rounded p-3 pl-6 w-[100%] mt-3 text-xs rounded-3xl"
                    placeholder="Enter your Study Room name"
                  ></input>
                </div>
                <div className="mt-5">
                  <p className="text-sm font-semibold">About the Study Room</p>
                  <textarea
                    className="border questions rounded rounded-3xl mt-3 w-[100%] h-[100px] text-xs p-3 pl-6 resize-none textarea-hide-scrollbar"
                    placeholder="Let Others Know About Your Study Room"
                  ></textarea>
                </div>
                <div>
                  <div className="flex justify-between h-[40px] w-auto member_count items-center rounded rounded-xl mt-5">
                    <div className="">
                      <p className="text-xs align-center ml-3">
                        Number of Participants
                      </p>
                    </div>
                    <div className="mr-3">
                      <input
                        type="text"
                        onChange={handleInputChange}
                        value={count}
                        className="border member_count rounded text-center text-sm w-10 h-7"
                      />
                      <button onClick={increment} className="text-black ml-3 hover:shadow-lg hover:shadow-gray-400 active:shadow-none">
                        <i class="fa-solid fa-plus text-sm"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-sm font-semibold">Study Room Key</p>
                  <input
                    type="text"
                    className="border questions rounded p-3 pl-6 w-[100%] mt-3 text-xs rounded-3xl"
                    placeholder="Enter your Study Room key"
                    value={roomKey}
                    onChange={(e) => setRoomKey(e.target.value)}
                  />
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
                        checked={createRoomTerms}
                        onChange={handleAllow}
                      />
                      <span className="text-xs ">Accept terms and connditions</span>
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

                  {createRoomTerms && (
                    <button
                      onClick={creategroupStudyRoom}
                      className="px-4 py-2 w-[100px] bg-questions text-black text-xs font-semibold rounded hover:shadow-lg hover:shadow-gray-400 active:shadow-none"
                    >
                      <p>Let's Go</p>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
          {joinRoomData && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg h-auto w-[400px]">
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-xl font-semibold mb-1">Join Your Room</h2>
                  <div className="h-[2px] w-[100px] bg-questions"></div>
                </div>
                <div className="mt-10">
                  <p className="text-sm font-semibold">Study Room Name</p>
                  <input
                    type="text"
                    value={joinRoomData.roomName}
                    readOnly
                    className="border questions rounded p-3 pl-6 w-[100%] mt-3 text-xs rounded-3xl"
                  />
                </div>
                <div className="mt-5">
                  <p className="text-sm font-semibold">Study Room Key</p>
                  <input
                    type="text"
                    value={joinRoomData.roomKey}
                    onChange={(e) => setJoinRoomData(prev => ({ ...prev, roomKey: e.target.value }))}
                    className="border questions rounded p-3 pl-6 w-[100%] mt-3 text-xs rounded-3xl"
                    placeholder="Enter your Study Room key"
                  />
                </div>

                <div className="flex justify-center space-x-4 mr-2">
                  <label className="flex items-start space-x-2 mt-5">
                    <input
                      type="checkbox"
                      className="square-radio"
                      checked={joinRoomData.isAllow}
                      onChange={handleAllow}
                    />
                    <span className="text-xs ">Accept terms and conditions</span>
                  </label>
                </div>
                <div className="flex space-x-[150px] mt-5">
                  <button
                    onClick={closeJoinRoom}
                    className="px-4 py-2 border border-[2px] questions text-white rounded hover:shadow-lg hover:shadow-gray-400 active:shadow-none"
                  >
                    <p className="logo1">Cancel</p>
                  </button>
                  {joinRoomData.isAllow && (
                    <button
                      onClick={joinStudyRoom}
                      className="px-4 py-2 w-[100px] bg-questions text-black text-xs font-semibold rounded hover:shadow-lg hover:shadow-gray-400 active:shadow-none"
                    >
                      <p>Let's Go</p>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
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

