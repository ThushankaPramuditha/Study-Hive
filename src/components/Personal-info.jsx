// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import SideBarnNavbar from './SideBarnNavbar';
// import infoPrivacy from '../assets/images/infoPrivacy.png';
// import infoEdit from '../assets/images/infoEdit.png';
// import infoShared from '../assets/images/infoShared.png';
// import axios from 'axios';

// const Personalinfo = () => {

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

//   return (
//     <div className="">
//       <SideBarnNavbar />
//       {error && <p>{error}</p>}
//       {profile ? (
//         <div className="ml-[300px] mt-[20px] flex-1 p-5">
//           <span>
//             <h1 className="text-[12px] mb-2">
//               <Link to="/settings" className="text-[12px] mb-2">Settings</Link> {'>'} Personal info
//             </h1>
//           </span>
//           <p className="text-2xl font-semibold mb-5">Personal Info</p>
//           <div className="grid grid-cols-3 gap-20 w-[90%]">
//             <div className="col-span-2 bg-white p-5">
//               <div className="flex justify-between">
//                 <p>User Name</p>
//                 <Link to="/Edit" className="underline font-semibold text-[14px]">Edit</Link>
//               </div>
//               <p className='text-[#717171] text-[14px]'>{profile.username}</p>
//               <hr className="my-4 mb-5" />

//               <div className="flex justify-between ">
//                 <p>Gender</p>
//                 <Link to="/Edit" className="underline font-semibold text-[14px]">Edit</Link>
//               </div>
//               <p className='text-[#717171] text-[14px]'>{profile.gender}</p>
//               <hr className="my-4 mb-5" />

//               <div className="flex justify-between ">
//                 <p>University</p>
//                 <Link to="/Edit" className="underline font-semibold text-[14px]">Edit</Link>
//               </div>
//               <p className='text-[#717171] text-[14px]'>{profile.university}</p>
//               <hr className="my-4 mb-5" />

//               <div className="flex justify-between ">
//                 <p>Studying for</p>
//                 <Link to="/Edit" className="underline font-semibold text-[14px]">Edit</Link>
//               </div>
//               <p className='text-[#717171] text-[14px]'>{profile.studyingFor}</p>
//               <hr className="my-4 mb-5" />

//               <div className="flex justify-between ">
//                 <p>Adaptability</p>
//                 <Link to="/Edit" className="underline font-semibold text-[14px]">Edit</Link>
//               </div>
//               <p className='text-[#717171] text-[14px]'>{profile.adaptability}</p>
//               <hr className="my-4 mb-5" />

//               <div className="flex justify-between ">
//                 <p>Language</p>
//                 <Link to="/Edit" className="underline font-semibold text-[14px]">Edit</Link>
//               </div>
//               <p className='text-[#717171] text-[14px]'>{profile.preferredLanguages}</p>
//               <hr className="my-4 mb-5" />

//               <div className="flex justify-between ">
//                 <p>Study Goal</p>
//                 <Link to="/Edit" className="underline font-semibold text-[14px]">Edit</Link>
//               </div>
//               <p className='text-[#717171] text-[14px]'>{profile.studyGoal}</p>
//               <hr className="my-4 mb-5" />

//               <div className="flex justify-between ">
//                 <p>About Yourself</p>
//                 <Link to="/Edit" className="underline font-semibold text-[14px]">Edit</Link>
//               </div>
//               <p className='text-[#717171] text-[14px]'>{profile.aboutMe}</p>
//               <hr className="my-4 mb-5" />

//               <div className="flex justify-between ">
//                 <p>Phone number</p>
//                 <Link to="/Edit" className="underline font-semibold text-[14px]">Add</Link>
//               </div>
//               <p className='text-[#717171] text-[14px]'>{profile.phoneNumber}</p>
//               <hr className="my-4 mb-5" />

//               <div className="flex justify-between ">
//                 <p>Emergency contact</p>
//                 <Link to="/Edit" className="underline font-semibold text-[14px]">Add</Link>
//               </div>
//               <p className='text-[#717171] text-[14px]'>{profile.emergencyContact}</p>
//               <hr className="my-4 mb-5" />
//             </div>
//             <div className="col-span-1 bg-white p-5 rounded-lg shadow-xl relative">
//               <div className="flex items-start">
//                 <img src={infoPrivacy} alt="info Privacy" className='w-6 h-6 mb-4' />
//               </div>
//               <div>
//                 <p className='font-bold mb-4'>Why isn’t my info shown here?</p>
//                 <p className='text-[#717171] text-[14px]'>We’re hiding some account details to protect your identity.</p>
//                 <hr className="my-4 mb-5" />
//               </div>

//               <div className="flex items-start">
//                 <img src={infoEdit} alt="info Privacy" className='w-6 h-6 mb-4' />
//               </div>
//               <div>
//                 <p className='font-bold mb-4'>Which details can be edited?</p>
//                 <p className='text-[#717171] text-[14px]'>Details which uses to verify your identity can’t be changed. Contact info and some personal details can be edited, but we may ask you verify your identity the next time.</p>
//                 <hr className="my-4 mb-5" />
//               </div>

//               <div className="flex items-start">
//                 <img src={infoShared} alt="info Privacy" className='w-6 h-6 mb-4' />
//               </div>
//               <div>
//                 <p className='font-bold mb-4'>What info is shared with others?</p>
//                 <p className='text-[#717171] text-[14px]'>We are only releasing contact information for Registered Users.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p>Loading profile...</p>
//       )}
//     </div>
//   );
// };

// export default Personalinfo;




// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import SideBarnNavbar from './SideBarnNavbar';
// import axios from 'axios';

// const PersonalInfo = () => {
//   const [profile, setProfile] = useState(null);
//   const [error, setError] = useState(null);
//   const [editField, setEditField] = useState(null); // Field currently being edited
//   const [formData, setFormData] = useState({}); // Temp data for editing

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const fetchProfile = async () => {
//     try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//             console.log("No token found");
//             setError('No authentication token found');
//             return;
//         }

//         const response = await axios.get('http://localhost:8080/api/profiles/me', {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });

//         console.log(response.data); // Debug the response
//         setProfile(response.data); // Ensure userId is part of this data
//     } catch (err) {
//         console.error('Error fetching profile:', err);
//         setError('Error fetching profile');
//     }
// };

//   const handleEdit = (field) => {
//     setEditField(field); // Set the current field for editing
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//             setError('No authentication token found');
//             return;
//         }

//         if (!profile || !profile.userId) {
//             setError('User ID is missing in profile data');
//             return;
//         }

//         const response = await axios.put(
//             `http://localhost:8080/api/profiles/${profile.userId}`, // Use userId from profile
//             profile,
//             {
//                 headers: { Authorization: `Bearer ${token}` },
//             }
//         );

//         console.log('Profile updated:', response.data);
//         setProfile(response.data);
//     } catch (err) {
//         console.error('Error updating profile:', err);
//         setError('Error updating profile');
//     }
// };

  

//   if (error) return <p>{error}</p>;
//   if (!profile) return <p>Loading profile...</p>;

//   return (
//     <div className="">
//       <SideBarnNavbar />
//       <div className="ml-[300px] mt-[20px] flex-1 p-5">
//         <h1 className="text-[12px] mb-2">
//           <Link to="/settings" className="text-[12px] mb-2">Settings</Link> {'>'} Personal info
//         </h1>
//         <p className="text-2xl font-semibold mb-5">Personal Info</p>

//         <div className="grid grid-cols-3 gap-20 w-[90%]">
//           <div className="col-span-2 bg-white p-5">
//             {Object.keys(profile).map((key) => (
//               <div key={key}>
//                 <div className="flex justify-between">
//                   <p>{key}</p>
//                   {editField === key ? (
//                     <button
//                       onClick={() => handleSubmit(key)}
//                       className="underline font-semibold text-[14px]"
//                     >
//                       Save
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => handleEdit(key)}
//                       className="underline font-semibold text-[14px]"
//                     >
//                       Edit
//                     </button>
//                   )}
//                 </div>

//                 {editField === key ? (
//                   <input
//                     type="text"
//                     name={key}
//                     value={formData[key] || ''}
//                     onChange={handleInputChange}
//                     className="border rounded p-2 text-[14px] w-full"
//                   />
//                 ) : (
//                   <p className="text-[#717171] text-[14px]">{profile[key]}</p>
//                 )}
//                 <hr className="my-4 mb-5" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PersonalInfo;


// 
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // useNavigate for React Router v6
// import SideBarnNavbar from './SideBarnNavbar';
// import infoPrivacy from '../assets/images/infoPrivacy.png';
// import infoEdit from '../assets/images/infoEdit.png';
// import infoShared from '../assets/images/infoShared.png';
// import axios from 'axios';

// const Personalinfo = () => {
//   const [profile, setProfile] = useState(null);
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editProfile, setEditProfile] = useState({});
//   const navigate = useNavigate(); // Replaces useHistory

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const fetchProfile = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         setError('No authentication token found');
//         return;
//       }
//       const response = await axios.get('http://localhost:8080/api/profiles/me', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setProfile(response.data);
//       setEditProfile(response.data); // Initialize edit state with profile data
//     } catch (err) {
//       console.error('Error fetching profile:', err);
//       setError('Error fetching profile');
//     }
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditProfile({ ...editProfile, [name]: value });
//   };

//   const handleSaveChanges = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         setError('No authentication token found');
//         return;
//       }
//       const response = await axios.put('http://localhost:8080/api/profiles/me', editProfile, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setProfile(response.data);
//       setIsEditing(false); // Exit edit mode after saving changes
//     } catch (err) {
//       console.error('Error saving profile:', err);
//       setError('Error saving profile');
//     }
//   };

//   return (
//     <div>
//       <SideBarnNavbar />
//       {error && <p className="text-red-500">{error}</p>}
//       {profile ? (
//         <div className="ml-[300px] mt-[20px] flex-1 p-5">
//           <span>
//             <h1 className="text-[12px] mb-2">
//               <Link to="/settings" className="text-[12px] mb-2">Settings</Link> {'>'} Personal info
//             </h1>
//           </span>
//           <p className="text-2xl font-semibold mb-5">Personal Info</p>
//           <div className="grid grid-cols-3 gap-20 w-[90%]">
//             <div className="col-span-2 bg-white p-5">
//               {[
//                 'username', 'gender', 'university', 'studyingFor', 'adaptability',
//                 'preferredLanguages', 'studyGoal', 'aboutMe', 'phoneNumber', 'emergencyContact'
//               ].map((field) => (
//                 <div key={field} className="mb-4">
//                   <div className="flex justify-between">
//                     <p>{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}</p>
//                     {!isEditing && (
//                       <button
//                         onClick={() => setIsEditing(true)}
//                         className="underline font-semibold text-[14px]"
//                       >
//                         Edit
//                       </button>
//                     )}
//                   </div>
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       name={field}
//                       value={editProfile[field] || ''}
//                       onChange={handleEditChange}
//                       className="text-[#717171] text-[14px] w-full mt-2"
//                     />
//                   ) : (
//                     <p className="text-[#717171] text-[14px]">{profile[field]}</p>
//                   )}
//                   <hr className="my-4 mb-5" />
//                 </div>
//               ))}
//               {isEditing && (
//                 <button
//                   onClick={handleSaveChanges}
//                   className="bg-blue-500 text-white py-2 px-4 rounded"
//                 >
//                   Save Changes
//                 </button>
//               )}
//             </div>
//             <div className="col-span-1 bg-white p-5 rounded-lg shadow-xl relative">
//               <div className="flex items-start">
//                 <img src={infoPrivacy} alt="info Privacy" className="w-6 h-6 mb-4" />
//               </div>
//               <p className="font-bold mb-4">Why isn’t my info shown here?</p>
//               <p className="text-[#717171] text-[14px]">We’re hiding some account details to protect your identity.</p>
//               <hr className="my-4 mb-5" />
//               <div className="flex items-start">
//                 <img src={infoEdit} alt="info Edit" className="w-6 h-6 mb-4" />
//               </div>
//               <p className="font-bold mb-4">Which details can be edited?</p>
//               <p className="text-[#717171] text-[14px]">Some personal details can be edited, but verification may be required.</p>
//               <hr className="my-4 mb-5" />
//               <div className="flex items-start">
//                 <img src={infoShared} alt="info Shared" className="w-6 h-6 mb-4" />
//               </div>
//               <p className="font-bold mb-4">What info is shared with others?</p>
//               <p className="text-[#717171] text-[14px]">We only release contact info for registered users.</p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p>Loading profile...</p>
//       )}
//     </div>
//   );
// };

// export default Personalinfo;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SideBarnNavbar from './SideBarnNavbar';
import infoPrivacy from '../assets/images/infoPrivacy.png';
import infoEdit from '../assets/images/infoEdit.png';
import infoShared from '../assets/images/infoShared.png';
import axios from 'axios';

const Personalinfo = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [editProfile, setEditProfile] = useState({});
  const [editableField, setEditableField] = useState(null); // Track the editable field
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No authentication token found');
        return;
      }
      const response = await axios.get('http://localhost:8080/api/profiles/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(response.data);
      setEditProfile(response.data);
    } catch (err) {
      console.error('Error fetching profile:', err);
      setError('Error fetching profile');
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditProfile({ ...editProfile, [name]: value });
  };

  const handleSaveChanges = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No authentication token found');
        return;
      }
      const response = await axios.put('http://localhost:8080/api/profiles/me', editProfile, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(response.data);
      setEditableField(null); // Exit edit mode after saving
    } catch (err) {
      console.error('Error saving profile:', err);
      setError('Error saving profile');
    }
  };

  return (
    <div>
      <SideBarnNavbar />
      {error && <p className="text-red-500">{error}</p>}
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
              {[
                'username', 'gender', 'university', 'studyingFor', 'adaptability',
                'preferredLanguages', 'studyGoal', 'aboutMe', 'phoneNumber', 'emergencyContact'
              ].map((field) => (
                <div key={field} className="mb-4">
                  <div className="flex justify-between">
                    <p>{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}</p>
                    {editableField !== field && (
                      <button
                        onClick={() => setEditableField(field)} // Set the editable field
                        className="underline font-semibold text-[14px]"
                      >
                        Edit
                      </button>
                    )}
                  </div>
                  {editableField === field ? (
                    <input
                      type="text"
                      name={field}
                      value={editProfile[field] || ''}
                      onChange={handleEditChange}
                      className="text-[#717171] text-[14px] w-full mt-2"
                    />
                  ) : (
                    <p className="text-[#717171] text-[14px]">{profile[field]}</p>
                  )}
                  {editableField === field && (
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={handleSaveChanges}
                        className="  italic font-semibold text-[14px]"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditableField(null)}
                        className="  italic font-semibold text-[14px]"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                  <hr className="my-4 mb-5" />
                </div>
              ))}
            </div>
            <div className="col-span-1 bg-white p-5 rounded-lg shadow-xl relative">
              <div className="flex items-start">
                <img src={infoPrivacy} alt="info Privacy" className="w-6 h-6 mb-4" />
              </div>
              <p className="font-bold mb-4">Why isn’t my info shown here?</p>
              <p className="text-[#717171] text-[14px]">We’re hiding some account details to protect your identity.</p>
              <hr className="my-4 mb-5" />
              <div className="flex items-start">
                <img src={infoEdit} alt="info Edit" className="w-6 h-6 mb-4" />
              </div>
              <p className="font-bold mb-4">Which details can be edited?</p>
              <p className="text-[#717171] text-[14px]">Some personal details can be edited, but verification may be required.</p>
              <hr className="my-4 mb-5" />
              <div className="flex items-start">
                <img src={infoShared} alt="info Shared" className="w-6 h-6 mb-4" />
              </div>
              <p className="font-bold mb-4">What info is shared with others?</p>
              <p className="text-[#717171] text-[14px]">We only release contact info for registered users.</p>
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
