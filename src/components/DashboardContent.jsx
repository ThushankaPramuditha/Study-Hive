import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import solo from "../assets/images/Solostudy.png";
import group from "../assets/images/Groupstudy.png";
import Calendar from "./BoxCalendar";
import { fetchUserRole } from "../api/fetchUserRole";

const DashboardContent = ({ userFname, userLname }) => {
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

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const user = await fetchUserRole();
        if (user && user.id) {
          setUserId(user.id);
          setUserStatus(user.status);
        } else {
          console.error("Invalid user data received:", user);
        }
      } catch (error) {
        console.error("Error fetching user role:", error.message);
      }
    };

    fetchRole();
  }, []);

  useEffect(() => {
    if (userId) {
      console.log("Fetching study rooms for user:", userId);
      fetchGroup(userId);
    }
  }, [userId]);

  const Find = (event) => {
    event.preventDefault();
    navigate('/findpartner');
  };

  const handleSoloStudy = () => {
    navigate("/virtualroom");
  };

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
    <div className={`xl:flex mt-2 xl:ml-[263px] ml-[60px]`}>
      <div className="xl:w-[75%] w-[100%]">
        <div className="ml-10">
          <p className="text-blue-900 text-2xl">Welcome, {userFname} {userLname}</p>
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
              <button
                onClick={handleSoloStudy}
                className="bg-custom-color p-3 m-3 text-xl text-white w-15 rounded-[50px] w-[200px] justify-center hover:shadow-lg hover:shadow-gray-400 active:shadow-none"
              >
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
                onClick={createRoom}
                className="bg-custom-color1 p-3 m-3 text-xl w-15 rounded-[50px] w-[300px] hover:shadow-lg hover:shadow-gray-400 active:shadow-none"
              >
                Create Group Study Room
              </button>
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

        <div className="mr-20">
          <div className="ml-[10%] xl:grid xl:grid-cols-3 gap-4">
            {studyRooms.length > 0 ? (
              (showAll ? studyRooms : studyRooms.slice(0, 3)).map((room) => (
                <div
                  key={room.id}
                  className="flex flex-col items-center xl:m-4 m-3 xl:w-[90%] w-[100%]"
                >
                  <div className="relative">
                    <div className="h-[30px] xl:w-[100%] w-[300px] bg-yellow-600 rounded-t-[50px] pb-2">
                      <button
                        onClick={() => handleDelete(room.id)}
                        className="absolute top-2 right-2 text-gray-300"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                    <div className="h-auto xl:w-[100%] w-[300px] bg-yellow-100 rounded-b-[30px]">
                      <p className="font-bold text-lg flex justify-center ">{room.roomName || "Room Name"}</p>
                      <p className="ml-4 opacity-60">{room.description || "Description"}</p>
                      <div className="flex items-center m-4 mt-10">
                        <i className="fa-solid fa-user opacity-30 mr-4"></i>
                        <p className="text-sm opacity-40">{userFname} {userLname}</p>
                      </div>
                      <div className="flex justify-center m-6 mt-10 ">
                        <button
                          onClick={() => handleJoinRoom(room)}
                          className="bg-[#F6CA30] text-black text-xs font-semibold rounded-[50px] w-[100px] h-[30px] hover:shadow-lg hover:shadow-gray-400 active:shadow-none mb-4"
                        >
                          Join
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No study rooms available.</p>
            )}
          </div>
        </div>
      </div>

      {isPop && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg h-auto w-[400px]">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-xl font-semibold mb-1">
                Let's Create Your Room
              </h2>
              <div className="h-[2px] w-[100px] bg-questions"></div>
            </div>
            <div className="mt-10">
              <p className="text-sm font-semibold">Study Room Name</p>
              <input
                type="text"
                className="border questions rounded p-3 pl-6 w-[100%] mt-3 text-xs rounded-3xl"
                placeholder="Enter your Study Room name"
              />
            </div>
            <div className="mt-5">
              <p className="text-sm font-semibold">About the Study Room</p>
              <textarea
                className="border questions rounded rounded-3xl mt-3 w-[100%] h-[100px] text-xs p-3 pl-6 resize-none textarea-hide-scrollbar"
                placeholder="Let Others Know About Your Study Room"
              />
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
                    <i className="fa-solid fa-plus text-sm"></i>
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
                  <span className="text-xs ">Accept terms and conditions</span>
                </label>
              </div>
            </div>

            <div className="flex justify-between mt-5">
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
                <p className="opacity-40"></p>
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
