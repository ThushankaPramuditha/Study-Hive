import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideBarnNavbar from './SideBarnNavbar';
import infoPrivacy from '../assets/images/infoPrivacy.png';
import infoEdit from '../assets/images/infoEdit.png';
import infoShared from '../assets/images/infoShared.png';
import axios from 'axios';

const Personalinfo = () => {

  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the profile when the component mounts
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      // Assuming you have the token stored in localStorage or sessionStorage
      const token = localStorage.getItem('token'); // Retrieve token
  
      if (!token) {
        console.log("No token found");
        setError('No authentication token found');
        return;
      }
  
      const response = await axios.get('http://localhost:8080/api/profiles/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      setProfile(response.data); // Set the fetched profile data
    } catch (err) {
      console.error('Error fetching profile:', err);
      setError('Error fetching profile');
    }
  };

  return (
    <div className="">
      <SideBarnNavbar />
      {error && <p>{error}</p>}
      {profile ? (
        <div className="ml-[300px] mt-[20px] flex-1 p-5">
          <span>
            <h1 className="text-[12px] mb-2">
              <Link to="/settings" className="text-[12px] mb-2">Settings</Link> {'>'} Personal info
            </h1>
          </span>
          <p className="text-2xl font-semibold mb-5">Personal Info</p>
          <div className="grid grid-cols-3 gap-20 w-[90%]">
            <div className="col-span-2 bg-white p-5">
              <div className="flex justify-between">
                <p>User Name</p>
                <Link to="/Edit" className="underline font-semibold text-[14px]">Edit</Link>
              </div>
              <p className='text-[#717171] text-[14px]'>{profile.username}</p>
              <hr className="my-4 mb-5" />

              <div className="flex justify-between ">
                <p>Gender</p>
                <Link to="/Edit" className="underline font-semibold text-[14px]">Edit</Link>
              </div>
              <p className='text-[#717171] text-[14px]'>{profile.gender}</p>
              <hr className="my-4 mb-5" />

              <div className="flex justify-between ">
                <p>University</p>
                <Link to="/Edit" className="underline font-semibold text-[14px]">Edit</Link>
              </div>
              <p className='text-[#717171] text-[14px]'>{profile.gender}</p>
              <hr className="my-4 mb-5" />

              <div className="flex justify-between ">
                <p>Studying for</p>
                <Link to="/Edit" className="underline font-semibold text-[14px]">Edit</Link>
              </div>
              <p className='text-[#717171] text-[14px]'>{profile.university}</p>
              <hr className="my-4 mb-5" />

              <div className="flex justify-between ">
                <p>Adaptability</p>
                <Link to="/Edit" className="underline font-semibold text-[14px]">Edit</Link>
              </div>
              <p className='text-[#717171] text-[14px]'>{profile.adaptability}</p>
              <hr className="my-4 mb-5" />

              <div className="flex justify-between ">
                <p>Language</p>
                <Link to="/Edit" className="underline font-semibold text-[14px]">Edit</Link>
              </div>
              <p className='text-[#717171] text-[14px]'>{profile.preferredLanguages}</p>
              <hr className="my-4 mb-5" />

              <div className="flex justify-between ">
                <p>Study Goal</p>
                <Link to="/Edit" className="underline font-semibold text-[14px]">Edit</Link>
              </div>
              <p className='text-[#717171] text-[14px]'>{profile.studyGoal}</p>
              <hr className="my-4 mb-5" />

              <div className="flex justify-between ">
                <p>About Yourself</p>
                <Link to="/Edit" className="underline font-semibold text-[14px]">Edit</Link>
              </div>
              <p className='text-[#717171] text-[14px]'>{profile.aboutMe}</p>
              <hr className="my-4 mb-5" />

              <div className="flex justify-between ">
                <p>Phone number</p>
                <Link to="/Edit" className="underline font-semibold text-[14px]">Add</Link>
              </div>
              <p className='text-[#717171] text-[14px]'>{profile.phoneNumber}</p>
              <hr className="my-4 mb-5" />

              <div className="flex justify-between ">
                <p>Emergency contact</p>
                <Link to="/Edit" className="underline font-semibold text-[14px]">Add</Link>
              </div>
              <p className='text-[#717171] text-[14px]'>{profile.emergencyContact}</p>
              <hr className="my-4 mb-5" />
            </div>
            <div className="col-span-1 bg-white p-5 rounded-lg shadow-xl relative">
              <div className="flex items-start">
                <img src={infoPrivacy} alt="info Privacy" className='w-6 h-6 mb-4' />
              </div>
              <div>
                <p className='font-bold mb-4'>Why isn’t my info shown here?</p>
                <p className='text-[#717171] text-[14px]'>We’re hiding some account details to protect your identity.</p>
                <hr className="my-4 mb-5" />
              </div>

              <div className="flex items-start">
                <img src={infoEdit} alt="info Privacy" className='w-6 h-6 mb-4' />
              </div>
              <div>
                <p className='font-bold mb-4'>Which details can be edited?</p>
                <p className='text-[#717171] text-[14px]'>Details which uses to verify your identity can’t be changed. Contact info and some personal details can be edited, but we may ask you verify your identity the next time.</p>
                <hr className="my-4 mb-5" />
              </div>

              <div className="flex items-start">
                <img src={infoShared} alt="info Privacy" className='w-6 h-6 mb-4' />
              </div>
              <div>
                <p className='font-bold mb-4'>What info is shared with others?</p>
                <p className='text-[#717171] text-[14px]'>We are only releasing contact information for Registered Users.</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Personalinfo;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PersonalInfo = () => {
//   const [profile, setProfile] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch the profile when the component mounts
//     fetchProfile();
//   }, []);

//   const fetchProfile = async () => {
//     try {
//       // Assuming you have the token stored in localStorage or sessionStorage
//       const token = localStorage.getItem('token'); // Retrieve token
  
//       if (!token) {
//         console.log("No token found");
//         setError('No authentication token found');
//         return;
//       }
  
//       const response = await axios.get('http://localhost:8080/api/profiles/me', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
  
//       setProfile(response.data); // Set the fetched profile data
//     } catch (err) {
//       console.error('Error fetching profile:', err);
//       setError('Error fetching profile');
//     }
//   };
  

//   // Render profile data or an error message
//   return (
//     <div>
//       {error && <p>{error}</p>}
//       {profile ? (
//         <div>
//           <h2>{profile.username}</h2>
//           <p>Email: {profile.email}</p>
//           <p>Phone Number: {profile.phoneNumber}</p>
//           <p>Gender: {profile.gender}</p>
//           <p>Study Goal: {profile.studyGoal}</p>
//           {/* Display other profile details as needed */}
//         </div>
//       ) : (
//         <p>Loading profile...</p>
//       )}
//     </div>
//   );
// };

// export default PersonalInfo;
