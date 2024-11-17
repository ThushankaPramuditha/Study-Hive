// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import solo from "../assets/images/Solostudy.png";
// import group from "../assets/images/Groupstudy.png";

// const  Studyroomcreate= () => {

//   const navigate = useNavigate();

//   const [isPop, setIsPop] = useState(false);
//   const [isPopJoin, setIsPopJoin] = useState(false);
//   const [count, setCount] = useState(0);
//   const [isChecked, setIsChecked] = useState(false);
//   const [isAllow, setIsAllow] = useState(false);

//   const togglePopUp = () => {
//     setIsPop(!isPop);
//   };

//   const toggleJoinPopUp = () => {
//     setIsPopJoin(!isPopJoin);
//   };

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     if (!isNaN(value)) {
//       setCount(Number(value));
//     }
//   };

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const handleChange = (e) => {
//     setIsChecked(e.target.checked);
//   };

//   const handleAllow = (e) => {
//     setIsAllow(e.target.checked);
//   };

//   return (
//     <div className="xl:flex xl:flex-col xl:justify-between pl-[10%] pr-[10%] pt-[3%]">
//       {/* Solo Study Section */}
//       <div className="flex flex-col justify-center border-2 w-[420px] h-[340px] rounded-[50px] items-center" style={{ backgroundImage: `url(${solo})` }}>
//         <p className="text-2xl text-white text-center pb-6 font-bold">Solo Study</p>
//         <button className="bg-custom-color p-3 m-3 text-xl text-white rounded-[50px] w-[200px] justify-center hover:shadow-lg hover:shadow-gray-400 active:shadow-none">
//           Start Solo Study
//         </button>
//       </div>

//       {/* Group Study Section */}
//       <div className="flex flex-col justify-center items-center border-2 w-[420px] h-[340px] rounded-[50px]" style={{ backgroundImage: `url(${group})` }}>
//         <p className="text-2xl text-white text-center pb-6 font-bold">Group Study</p>
//         <button onClick={toggleJoinPopUp} className="bg-custom-color p-3 m-3 text-xl text-white rounded-[50px] w-[300px] hover:shadow-lg hover:shadow-gray-400 active:shadow-none">
//           Join a Group Study Room
//         </button>
//         <button onClick={togglePopUp} className="bg-custom-color1 p-3 m-3 text-xl rounded-[50px] w-[300px] hover:shadow-lg hover:shadow-gray-400 active:shadow-none">
//           Create Group Study Room
//         </button>
//       </div>

//       {/* Create Room Popup */}
//       {isPop && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-2xl shadow-lg h-auto w-[400px]">
//             <div className="flex flex-col justify-center items-center">
//               <h2 className="text-xl font-semibold mb-1">Let’s Create Your Room</h2>
//               <div className="h-[2px] w-[100px] bg-questions"></div>
//             </div>
//             <div className="mt-10">
//               <p className="text-sm font-semibold">Study Room Name</p>
//               <input type="text" className="border questions rounded p-3 pl-6 w-[100%] mt-3 text-xs rounded-3xl" placeholder="Enter your Study Room name" />
//             </div>
//             <div className="mt-5">
//               <p className="text-sm font-semibold">About the Study Room</p>
//               <textarea className="border questions rounded-3xl mt-3 w-[100%] h-[100px] text-xs p-3 pl-6 resize-none" placeholder="Let Others Know About Your Study Room"></textarea>
//             </div>
//             <div className="mt-5">
//               <p className="text-xs">Number of Participants</p>
//               <div className="flex items-center mt-2">
//                 <input type="text" value={count} onChange={handleInputChange} className="border text-center w-10 h-7" />
//                 <button onClick={increment} className="ml-3 text-black hover:shadow-lg">
//                   <i className="fa-solid fa-plus"></i>
//                 </button>
//               </div>
//             </div>
//             <div className="mt-5">
//               <label className="flex items-center">
//                 <input type="checkbox" checked={isChecked} onChange={handleChange} />
//                 <span className="text-xs ml-2">Anyone can join</span>
//               </label>
//             </div>
//             <div className="mt-5">
//               <label className="flex items-center">
//                 <input type="checkbox" checked={isAllow} onChange={handleAllow} />
//                 <span className="text-xs ml-2">Accept terms and conditions</span>
//               </label>
//             </div>
//             <div className="flex justify-between mt-10">
//               <button onClick={togglePopUp} className="px-4 py-2 border questions text-white rounded hover:shadow-lg">Cancel</button>
//               {isAllow && <button className="px-4 py-2 bg-questions text-black text-xs font-semibold rounded hover:shadow-lg">Let’s Go</button>}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Join Room Popup */}
//       {isPopJoin && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-2xl shadow-lg h-auto w-[400px]">
//             <div className="flex flex-col justify-center items-center">
//               <h2 className="text-xl font-semibold mb-1">Join Your Room</h2>
//               <div className="h-[2px] w-[100px] bg-questions"></div>
//             </div>
//             <div className="mt-10">
//               <p className="text-sm font-semibold">Study Room Name</p>
//               <input type="text" className="border questions rounded p-3 pl-6 w-[100%] mt-3 text-xs rounded-3xl" placeholder="Enter your Study Room name" />
//             </div>
//             <div className="mt-5">
//               <p className="text-sm font-semibold">Study Room Key</p>
//               <input type="text" className="border questions rounded p-3 pl-6 w-[100%] mt-3 text-xs rounded-3xl" placeholder="Enter your Study Room key" />
//             </div>
//             <div className="mt-5">
//               <label className="flex items-center">
//                 <input type="checkbox" checked={isAllow} onChange={handleAllow} />
//                 <span className="text-xs ml-2">Accept terms and conditions</span>
//               </label>
//             </div>
//             <div className="flex justify-between mt-10">
//               <button onClick={toggleJoinPopUp} className="px-4 py-2 border questions text-white rounded hover:shadow-lg">Cancel</button>
//               {isAllow && <button className="px-4 py-2 bg-questions text-black text-xs font-semibold rounded hover:shadow-lg">Let’s Go</button>}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Studyroomcreate;

// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import solo from "../assets/images/Solostudy.png";
// import group from "../assets/images/Groupstudy.png";

// const Studyroomcreate = () => {
//   const navigate = useNavigate();
//   const [isPop, setIsPop] = useState(false);
//   const [isPopJoin, setIsPopJoin] = useState(false);
//   const [count, setCount] = useState(0);
//   const [isChecked, setIsChecked] = useState(false);
//   const [isAllow, setIsAllow] = useState(false);
//   const [roomName, setRoomName] = useState('');
//   const [description, setDescription] = useState('');

//   const togglePopUp = () => setIsPop(!isPop);
//   const toggleJoinPopUp = () => setIsPopJoin(!isPopJoin);

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     if (!isNaN(value)) setCount(Number(value));
//   };

//   const increment = () => setCount(count + 1);
//   const handleChange = (e) => setIsChecked(e.target.checked);
//   const handleAllow = (e) => setIsAllow(e.target.checked);

//   const createStudyRoom = async () => {
//     const roomData = {
//       roomName,
//       description,
//       participantCount: count,
//       isPublic: isChecked,
//       acceptTerms: isAllow
//     };

//     try {
//       const response = await fetch('/api/studyrooms/create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(roomData),
//       });
//       if (response.ok) {
//         const createdRoom = await response.json();
//         // Navigate to the video call page with the room ID
//         navigate(`/videocall?roomID=${createdRoom.id}`);
//       } else {
//         console.error('Failed to create study room');
//       }
//     } catch (error) {
//       console.error('Error creating study room:', error);
//     }
//   };

//   return (
//     <div className="xl:flex xl:flex-col xl:justify-between pl-[10%] pr-[10%] pt-[3%]">
//       <div className="flex flex-col justify-center border-2 w-[420px] h-[340px] rounded-[50px] items-center" style={{ backgroundImage: `url(${solo})` }}>
//         <p className="text-2xl text-white text-center pb-6 font-bold">Solo Study</p>
//         <button className="bg-custom-color p-3 m-3 text-xl text-white rounded-[50px] w-[200px]">Start Solo Study</button>
//       </div>

//       <div className="flex flex-col justify-center items-center border-2 w-[420px] h-[340px] rounded-[50px]" style={{ backgroundImage: `url(${group})` }}>
//         <p className="text-2xl text-white text-center pb-6 font-bold">Group Study</p>
//         <button onClick={toggleJoinPopUp} className="bg-custom-color p-3 m-3 text-xl text-white rounded-[50px] w-[300px]">Join a Group Study Room</button>
//         <button onClick={togglePopUp} className="bg-custom-color1 p-3 m-3 text-xl rounded-[50px] w-[300px]">Create Group Study Room</button>
//       </div>

//       {isPop && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-2xl shadow-lg h-auto w-[400px]">
//             <h2 className="text-xl font-semibold mb-1">Let’s Create Your Room</h2>
//             <div className="mt-10">
//               <p className="text-sm font-semibold">Study Room Name</p>
//               <input type="text" className="border questions rounded p-3 pl-6 w-[100%] mt-3" placeholder="Enter your Study Room name" value={roomName} onChange={(e) => setRoomName(e.target.value)} />
//             </div>
//             <div className="mt-5">
//               <p className="text-sm font-semibold">About the Study Room</p>
//               <textarea className="border questions rounded-3xl mt-3 w-[100%] h-[100px] text-xs p-3 pl-6 resize-none" placeholder="Let Others Know About Your Study Room" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
//             </div>
//             <div className="mt-5">
//               <p className="text-xs">Number of Participants</p>
//               <div className="flex items-center mt-2">
//                 <input type="text" value={count} onChange={handleInputChange} className="border text-center w-10 h-7" />
//                 <button onClick={increment} className="ml-3 text-black"><i className="fa-solid fa-plus"></i></button>
//               </div>
//             </div>
//             <div className="mt-5">
//               <label className="flex items-center">
//                 <input type="checkbox" checked={isChecked} onChange={handleChange} />
//                 <span className="text-xs ml-2">Anyone can join</span>
//               </label>
//             </div>
//             <div className="mt-5">
//               <label className="flex items-center">
//                 <input type="checkbox" checked={isAllow} onChange={handleAllow} />
//                 <span className="text-xs ml-2">Accept terms and conditions</span>
//               </label>
//             </div>
//             <div className="flex justify-between mt-10">
//               <button onClick={togglePopUp} className="px-4 py-2 border text-white rounded">Cancel</button>
//               {isAllow && <button onClick={createStudyRoom} className="px-4 py-2 bg-questions text-black text-xs font-semibold rounded">Let’s Go</button>}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Studyroomcreate;

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import solo from "../assets/images/Solostudy.png";
import group from "../assets/images/Groupstudy.png";

const Studyroomcreate = () => {
  const navigate = useNavigate();
  const [isPop, setIsPop] = useState(false);
  const [count, setCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [isAllow, setIsAllow] = useState(false);
  const [roomName, setRoomName] = useState('');
  const [description, setDescription] = useState('');

  const togglePopUp = () => {
    setIsPop(!isPop);
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

//   const handleCreateRoom = async () => {
//     if (isAllow) {
//       const studyRoom = {
//         roomName,
//         description,
//         participantCount: count,
//         isPublic: isChecked,
//         acceptTerms: isAllow
//       };

//       try {
//         // Call the backend API to create the study room
//         const response = await fetch('/api/studyrooms/create', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(studyRoom),
//         });

//         const result = await response.json();
//         if (response.ok) {
//           const roomId = result.id;
//           // Navigate to VideoCall.jsx, passing roomId as a query param
//           navigate(`/videocall?roomID=${roomId}`);
//         } else {
//           console.error('Failed to create room:', result);
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     }
//   };
     
// const handleCreateRoom = async () => {
//     if (isAllow) {
//       const studyRoom = {
//         roomName,
//         description,
//         participantCount: count,
//         isPublic: isChecked,
//         acceptTerms: isAllow
//       };

//       try {
//         // Call the backend API to create the study room
//         const response = await fetch('/api/studyrooms/create', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(studyRoom),
//         });

//         // Check if the response status is OK
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const result = await response.json();
//         const roomId = result.id;

//         // Navigate to VideoCall.jsx, passing roomId as a query param
//         navigate(`/videocall?roomID=${roomId}`);
//       } catch (error) {
//         console.error('Error:', error.message);

//         // Handle the specific error of invalid JSON input
//         if (error.message.includes("Unexpected end of JSON input")) {
//           console.error('Received an invalid JSON response from the backend');
//         } else {
//           console.error('Failed to create room:', error.message);
//         }
//       }
//     }
// };
// const handleCreateRoom = async () => {
//     if (isAllow) {
//       const studyRoom = {
//         roomName,
//         description,
//         participantCount: count,
//         isPublic: isChecked,
//         acceptTerms: isAllow
//       };

//       try {
//         // Call the backend API to create the study room
//         const response = await fetch(`http://localhost:8080/api/studyrooms/create`, {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(studyRoom),
//           });
          

//         // Ensure the response is valid and contains JSON
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const result = await response.json(); // Parse the JSON response
//         console.log("Room created:", result);

//         // Check if the room ID is present in the result
//         const roomId = result.id;
//         if (!roomId) {
//           throw new Error('Room ID not found in the response');
//         }

//         // Navigate to VideoCall.jsx, passing roomId as a query param
//         navigate(`/videocall?roomID=${roomId}`);
//       } catch (error) {
//         console.error('Error:', error.message);

//         // Handle specific errors
//         if (error.message.includes("Unexpected end of JSON input")) {
//           console.error('Invalid JSON response from the backend');
//         } else {
//           console.error('Failed to create room:', error.message);
//         }
//       }
//     }
// };
const handleCreateRoom = async () => {
    console.log('Starting handleCreateRoom');
    try {
        const response = await fetch('http://localhost:8080/api/studyrooms/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                roomName: 'Test Room',
                description: 'Test Description',
                participantCount: 5,
                isPublic: true,
                acceptTerms: true,
            }),
        });

        if (!response.ok) {
            console.error('Response not ok:', response.status);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        console.log('Room created:', data);
        // Navigate to VideoCall.jsx with roomId (if necessary)
        if (data && data.id) {
            navigate(`/videocall/${data.id}`);
        } else {
            console.error('Invalid response data:', data);
        }
    } catch (error) {
        console.error('Failed to create room:', error);
    }
};


  return (
    <div className="xl:flex xl:flex-col xl:justify-between pl-[10%] pr-[10%] pt-[3%]">
      {/* Group Study Section */}
      <div className="flex flex-col justify-center items-center border-2 w-[420px] h-[340px] rounded-[50px]" style={{ backgroundImage: `url(${group})` }}>
        <p className="text-2xl text-white text-center pb-6 font-bold">Group Study</p>
        <button onClick={togglePopUp} className="bg-custom-color1 p-3 m-3 text-xl rounded-[50px] w-[300px] hover:shadow-lg hover:shadow-gray-400 active:shadow-none">
          Create Group Study Room
        </button>
      </div>

      {/* Create Room Popup */}
      {isPop && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg h-auto w-[400px]">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-xl font-semibold mb-1">Let’s Create Your Room</h2>
              <div className="h-[2px] w-[100px] bg-questions"></div>
            </div>
            <div className="mt-10">
              <p className="text-sm font-semibold">Study Room Name</p>
              <input
                type="text"
                className="border questions rounded p-3 pl-6 w-[100%] mt-3 text-xs rounded-3xl"
                placeholder="Enter your Study Room name"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <p className="text-sm font-semibold">About the Study Room</p>
              <textarea
                className="border questions rounded-3xl mt-3 w-[100%] h-[100px] text-xs p-3 pl-6 resize-none"
                placeholder="Let Others Know About Your Study Room"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <p className="text-xs">Number of Participants</p>
              <div className="flex items-center mt-2">
                <input type="text" value={count} onChange={handleInputChange} className="border text-center w-10 h-7" />
                <button onClick={increment} className="ml-3 text-black hover:shadow-lg">
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="mt-5">
              <label className="flex items-center">
                <input type="checkbox" checked={isChecked} onChange={handleChange} />
                <span className="text-xs ml-2">Anyone can join</span>
              </label>
            </div>
            <div className="mt-5">
              <label className="flex items-center">
                <input type="checkbox" checked={isAllow} onChange={handleAllow} />
                <span className="text-xs ml-2">Accept terms and conditions</span>
              </label>
            </div>
            <div className="flex justify-between mt-10">
              <button onClick={togglePopUp} className="px-4 py-2 border questions text-white rounded hover:shadow-lg">Cancel</button>
              {isAllow && (
                <button
                  className="px-4 py-2 bg-questions text-black text-xs font-semibold rounded hover:shadow-lg"
                  onClick={handleCreateRoom}
                >
                  Let’s Go
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Studyroomcreate;
