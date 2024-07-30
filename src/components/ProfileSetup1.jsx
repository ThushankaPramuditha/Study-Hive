// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import profilesetup from '../assets/images/profilesetup.png';
// import backButton from '../assets/images/backButton.png';
// import nextButton from '../assets/images/nextButton.png';
// import '../App.css';

// const BackButton = ({ onClick }) => (
//   <img src={backButton} alt="Back" className="h-8 w-8 cursor-pointer" onClick={onClick} />
// );


// const NextButton = ({ onClick, imageSrc }) => (
//   <img src={imageSrc} alt="Next" className="h-8 w-8 cursor-pointer" onClick={onClick} />
// );

// const ProfileSetup1 = () => {
//   const [profilePhoto, setProfilePhoto] = useState(null); 
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const [currentStep, setCurrentStep] = useState(1); 
//   const navigate = useNavigate(); 

//   const handleNext = () => {
//     setCurrentStep(currentStep + 1);
//   };

//   // Function to handle back button click
//   const handleBack = () => {
//     setCurrentStep(currentStep - 1);
//   };

//   // Function to finish and navigate to the next page
//   const handleFinish = () => {
//     navigate('/ProfileSetup2');
//   };

//   const handleFileInputChange = (e) => {
//     const file = e.target.files[0]; // Get the first file from the input
//     if (file) {
//       const reader = new FileReader(); // FileReader to read file contents
//       reader.onloadend = () => {
//         setProfilePhoto(file); // Set the selected file to state
//         setPreviewUrl(reader.result); // Set the preview URL to display the image
//       };
//       reader.readAsDataURL(file); // Read the file as a data URL
//     }
//   };


//   return (
//     <div className="w-full min-h-screen flex items-start relative">
//     <div className="fixed top-4 right-4 text-gray-600 text-sm z-50">
//         <Link to="/" className="block">Home</Link>
//       </div>


//       <div className="relative w-1/2 h-screen flex flex-col">
//         <img src={profilesetup} className="w-full h-full object-contain" alt="Profile Setup" />
//       </div>

//       <div className="w-1/2 h-full justify-end p-20 relative">
//         <div className="bg-white shadow-lg rounded-lg p-8 ml-10 -mt-5 w-full max-w-md shadow-container" style={{ boxShadow: '0px 8px 24px rgba(38, 45, 118, 0.15)', position: 'relative' }}>

//           {currentStep === 1 && (
//             <form>
//               <div className="mb-6">
//                 <label className="block mb-2 text-m font-inter text-black" htmlFor="firstname">First Name</label>
//                 <input
//                   type="text"
//                   id="firstname"
//                   placeholder="Enter your First Name"
//                   className="input-field"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label className="block mb-2 text-m font-inter text-black" htmlFor="lastname">Last Name</label>
//                 <input
//                   type="text"
//                   id="lastname"
//                   placeholder="Enter your Last Name"
//                   className="input-field"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label className="block mb-2 text-m font-inter text-black">Gender</label>
//                 <div className="flex items-center">
//                   <div className="flex items-center mr-4">
//                     <input
//                       type="radio"
//                       id="male"
//                       name="gender"
//                       value="Male"
//                       className="radio-custom mr-2"
//                     />
//                     <label className="text-sm font-inter text-black font-light" htmlFor="male">Male</label>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       type="radio"
//                       id="female"
//                       name="gender"
//                       value="Female"
//                       className="radio-custom mr-2"
//                     />
//                     <label className="text-sm font-inter text-black font-light" htmlFor="female">Female</label>
//                   </div>
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label className="block mb-2 text-m font-inter text-black" htmlFor="university">University</label>
//                 <input
//                   type="text"
//                   id="university"
//                   placeholder="Enter your University Name"
//                   className="input-field"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label className="block mb-2 text-m font-inter text-black" htmlFor="studyingFor">I’m Studying For</label>
//                 <select id="studyingFor" className="input-field text-color">
//                   <option disabled selected hidden value="">
//                     Select a Subject or a Test from the Drop Down List
//                   </option>
//                   <option value="Bachelor">Bachelor's degree</option>
//                   <option value="Master">Master's degree</option>
//                   <option value="PhD">PhD</option>
//                   <option value="IELTS">IELTS</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>

//               <div className="mb-6">
//                 <label className="block mb-2 text-m font-inter text-black">Level of Knowledge</label>
//                 <div className="flex flex-col">
//                   <div className="flex items-center mb-2 ml-8">
//                     <input
//                       type="radio"
//                       id="Totalbeginner"
//                       name="level"
//                       value="Total Beginner"
//                       className="radio-custom mr-2"
//                     />
//                     <label className="text-sm font-inter text-black font-light" htmlFor="beginner">Total Beginner</label>
//                   </div>
//                   <div className="flex items-center mb-2 ml-8">
//                     <input
//                       type="radio"
//                       id="Someknowledge"
//                       name="level"
//                       value="Some knowledge"
//                       className="radio-custom mr-2"
//                     />
//                     <label className="text-sm font-inter text-black font-light" htmlFor="intermediate">Some Knowledge</label>
//                   </div>
//                   <div className="flex items-center mb-2 ml-8">
//                     <input
//                       type="radio"
//                       id="Prettyconfident"
//                       name="level"
//                       value="Pretty Confident"
//                       className="radio-custom mr-2"
//                     />
//                     <label className="text-sm font-inter text-black font-light" htmlFor="advanced">Pretty Confident</label>
//                   </div>
//                   <div className="flex items-center mb-2 ml-8">
//                     <input
//                       type="radio"
//                       id="Expert"
//                       name="level"
//                       value="Expert"
//                       className="radio-custom mr-2"
//                     />
//                     <label className="text-sm font-inter text-black font-light" htmlFor="advanced">Expert</label>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute bottom-4 right-4">
//                 {/* Next button */}
//                 <NextButton onClick={handleNext} imageSrc={nextButton} />
//               </div>

//             </form>
//           )}

//           {currentStep === 2 && (
//             <form>
//               <div className="mb-6">
//                 <label className="block mb-2 text-m font-inter text-black" htmlFor="language">Preferred Language</label>
//                 <input
//                   type="text"
//                   id="language"
//                   placeholder="Type Your Preferred Language of Communication"
//                   className="input-field"
//                 />
//               </div>
//               <div className="mb-6">
//                 <label className="block mb-2 text-m font-inter text-black">Preferred Study Time</label>
//                 <div className="flex flex-col">
//                   <div className="flex items-center mb-2 ml-8">
//                     <input
//                       type="radio"
//                       id="morning"
//                       name="StudyTime"
//                       value="Morning"
//                       className="radio-custom mr-2"
//                     />
//                     <label className="text-sm font-inter text-black font-light" htmlFor="Morning">Morning</label>
//                   </div>
//                   <div className="flex items-center mb-2 ml-8">
//                     <input
//                       type="radio"
//                       id="afternoon"
//                       name="StudyTime"
//                       value="Afternoon"
//                       className="radio-custom mr-2"
//                     />
//                     <label className="text-sm font-inter text-black font-light" htmlFor="Afternoon">Afternoon</label>
//                   </div>
//                   <div className="flex items-center mb-2 ml-8">
//                     <input
//                       type="radio"
//                       id="evening"
//                       name="StudyTime"
//                       value="Evening"
//                       className="radio-custom mr-2"
//                     />
//                     <label className="text-sm font-inter text-black font-light" htmlFor="Evening">Evening</label>
//                   </div>
//                   <div className="flex items-center mb-2 ml-8">
//                     <input
//                       type="radio"
//                       id="night"
//                       name="StudyTime"
//                       value="Night"
//                       className="radio-custom mr-2"
//                     />
//                     <label className="text-sm font-inter text-black font-light" htmlFor="Night">Night</label>
//                   </div>
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label className="block mb-2 text-m font-inter text-black">Study Goal</label>
//                 <div className="flex flex-col">
//                   <div className="flex items-center mb-2 ml-8">
//                     <input
//                       type="checkbox"
//                       id="fun"
//                       name="goal"
//                       value="Just for fun"
//                       className="checkbox-custom mr-2"
//                     />
//                     <label className="text-sm font-inter text-black font-light" htmlFor="fun">Just for fun</label>
//                   </div>
//                   <div className="flex items-center mb-2 ml-8">
//                     <input
//                       type="checkbox"
//                       id="personalDevelopment"
//                       name="goal"
//                       value="Personal Development"
//                       className="checkbox-custom mr-2"
//                     />
//                     <label className="text-sm font-inter text-black font-light" htmlFor="personalDevelopment">Personal Development</label>
//                   </div>
//                   <div className="flex items-center mb-2 ml-8">
//                     <input
//                       type="checkbox"
//                       id="academicDevelopment"
//                       name="goal"
//                       value="Academic Development"
//                       className="checkbox-custom mr-2"
//                     />
//                     <label className="text-sm font-inter text-black font-light" htmlFor="academicDevelopment">Academic Development</label>
//                   </div>
//                   <div className="flex items-center mb-2 ml-8">
//                     <input
//                       type="checkbox"
//                       id="professionalDevelopment"
//                       name="goal"
//                       value="Professional Development"
//                       className="checkbox-custom mr-2"
//                     />
//                     <label className="text-sm font-inter text-black font-light" htmlFor="professionalDevelopment">Professional Development</label>
//                   </div>
//                 </div>
//               </div>

//               <div className="mb-11">
//                 <label className="block mb-2 text-m font-inter text-black">About Me</label>
//                 <textarea
//                   id="aboutme"
//                   className="block w-full px-4 py-2 text-sm text-black font-inter bg-white border border-yellow-400 rounded-[25px] focus:outline-none focus:ring focus:ring-opacity-40"
//                   rows="5"
//                   placeholder="Let Others Know a Little About You">
//                 </textarea>
//               </div>

//               <div className="absolute bottom-4 left-4">
//                 {/* Back button */}
//                 <BackButton onClick={handleBack} />
//               </div>

//               <div className="absolute bottom-4 right-4">
//                 {/* Next button */}
//                 <NextButton onClick={handleNext} imageSrc={nextButton} />
//               </div>

//             </form>
//           )}

//           {currentStep === 3 && (
//             <form>
//               <div className="flex flex-col items-center justify-center mb-80 mt-40 h-full">
//                 <label className="block mb-2 text-m font-inter text-black text-center" htmlFor="profilePhoto">Let’s Add a Profile Photo</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   id="profilePhoto"
//                   onChange={handleFileInputChange}
//                   className="input-field"
//                 />
//                 {/* Display image preview if available */}
//                 {previewUrl && (
//                   <img src={previewUrl} alt="Preview" className="mt-4 rounded-lg shadow-md" style={{ maxWidth: '100%', height: 'auto' }} />
//                 )}
//               </div>
//               <div className="mt-6 flex justify-center">
//                 <button className="px-4 py-2 text-white font-inter bg-[#A6B15C] rounded-full hover:bg-[#A6B15C] focus:outline-none focus:bg-[#A6B15C] font-light w-40 h-12" onClick={handleFinish}>
//                   DONE
//                 </button>
//               </div>

//             </form>
//           )}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileSetup1;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import profilesetup from '../assets/images/profilesetup.png';
import backButton from '../assets/images/backButton.png';
import nextButton from '../assets/images/nextButton.png';
import '../App.css';

const BackButton = ({ onClick }) => (
  <img src={backButton} alt="Back" className="h-8 w-8 cursor-pointer" onClick={onClick} />
);

const NextButton = ({ onClick, imageSrc }) => (
  <img src={imageSrc} alt="Next" className="h-8 w-8 cursor-pointer" onClick={onClick} />
);

const ProfileSetup1 = () => {
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    university: '',
    studyingFor: '',
    levelOfKnowledge: '',
    preferredLanguage: '',
    preferredStudyTime: '',
    studyGoals: [],
    aboutMe: '',
    profilePhoto: null,
  });

  const [previewUrl, setPreviewUrl] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFinish = () => {
    console.log(profileData); // You can send this data to the backend here
    navigate('/Home');
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData({ ...profileData, profilePhoto: file });
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setProfileData({ ...profileData, studyGoals: [...profileData.studyGoals, value] });
      } else {
        setProfileData({ ...profileData, studyGoals: profileData.studyGoals.filter(goal => goal !== value) });
      }
    } else {
      setProfileData({ ...profileData, [name]: value });
    }
  };

  return (
    <div className="w-full min-h-screen flex items-start relative">
      <div className="fixed top-4 right-4 text-gray-600 text-sm z-50">
        <Link to="/" className="block">Home</Link>
      </div>

      <div className="relative w-1/2 h-screen flex flex-col">
        <img src={profilesetup} className="w-full h-full object-contain" alt="Profile Setup" />
      </div>

      <div className="w-1/2 h-full justify-end p-20 relative">
        <div className="bg-white shadow-lg rounded-lg p-8 ml-10 -mt-5 w-full max-w-md shadow-container" style={{ boxShadow: '0px 8px 24px rgba(38, 45, 118, 0.15)', position: 'relative' }}>
          {currentStep === 1 && (
            <form>
              <div className="mb-6">
                <label className="block mb-2 text-m font-inter text-black" htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={profileData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your First Name"
                  className="input-field"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-m font-inter text-black" htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={profileData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your Last Name"
                  className="input-field"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-m font-inter text-black">Gender</label>
                <div className="flex items-center">
                  <div className="flex items-center mr-4">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="Male"
                      checked={profileData.gender === 'Male'}
                      onChange={handleChange}
                      className="radio-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="male">Male</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="Female"
                      checked={profileData.gender === 'Female'}
                      onChange={handleChange}
                      className="radio-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="female">Female</label>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-m font-inter text-black" htmlFor="university">University</label>
                <input
                  type="text"
                  id="university"
                  name="university"
                  value={profileData.university}
                  onChange={handleChange}
                  placeholder="Enter your University Name"
                  className="input-field"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-m font-inter text-black" htmlFor="studyingFor">I’m Studying For</label>
                <select
                  id="studyingFor"
                  name="studyingFor"
                  value={profileData.studyingFor}
                  onChange={handleChange}
                  className="input-field text-color"
                >
                  <option disabled selected hidden value="">
                    Select a Subject or a Test from the Drop Down List
                  </option>
                  <option value="Bachelor">Bachelor's degree</option>
                  <option value="Master">Master's degree</option>
                  <option value="PhD">PhD</option>
                  <option value="IELTS">IELTS</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-m font-inter text-black">Level of Knowledge</label>
                <div className="flex flex-col">
                  <div className="flex items-center mb-2 ml-8">
                    <input
                      type="radio"
                      id="Totalbeginner"
                      name="levelOfKnowledge"
                      value="Total Beginner"
                      checked={profileData.levelOfKnowledge === 'Total Beginner'}
                      onChange={handleChange}
                      className="radio-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="Totalbeginner">Total Beginner</label>
                  </div>
                  <div className="flex items-center mb-2 ml-8">
                    <input
                      type="radio"
                      id="Someknowledge"
                      name="levelOfKnowledge"
                      value="Some Knowledge"
                      checked={profileData.levelOfKnowledge === 'Some Knowledge'}
                      onChange={handleChange}
                      className="radio-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="Someknowledge">Some Knowledge</label>
                  </div>
                  <div className="flex items-center mb-2 ml-8">
                    <input
                      type="radio"
                      id="Prettyconfident"
                      name="levelOfKnowledge"
                      value="Pretty Confident"
                      checked={profileData.levelOfKnowledge === 'Pretty Confident'}
                      onChange={handleChange}
                      className="radio-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="Prettyconfident">Pretty Confident</label>
                  </div>
                  <div className="flex items-center mb-2 ml-8">
                    <input
                      type="radio"
                      id="Expert"
                      name="levelOfKnowledge"
                      value="Expert"
                      checked={profileData.levelOfKnowledge === 'Expert'}
                      onChange={handleChange}
                      className="radio-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="Expert">Expert</label>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-4">
                <NextButton onClick={handleNext} imageSrc={nextButton} />
              </div>
            </form>
          )}

          {currentStep === 2 && (
            <form>
              <div className="mb-6">
                <label className="block mb-2 text-m font-inter text-black" htmlFor="preferredLanguage">Preferred Language</label>
                <select
                  id="preferredLanguage"
                  name="preferredLanguage"
                  value={profileData.preferredLanguage}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option disabled selected hidden value="">
                    Select a Preferred Language
                  </option>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-m font-inter text-black" htmlFor="preferredStudyTime">Preferred Study Time</label>
                <select
                  id="preferredStudyTime"
                  name="preferredStudyTime"
                  value={profileData.preferredStudyTime}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option disabled selected hidden value="">
                    Select a Preferred Study Time
                  </option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                  <option value="Night">Night</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-m font-inter text-black">Study Goals</label>
                <div className="flex flex-col">
                  <div className="flex items-center mb-2 ml-8">
                    <input
                      type="checkbox"
                      id="BetterGrades"
                      value="Better Grades"
                      checked={profileData.studyGoals.includes('Better Grades')}
                      onChange={handleChange}
                      className="checkbox-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="BetterGrades">Better Grades</label>
                  </div>
                  <div className="flex items-center mb-2 ml-8">
                    <input
                      type="checkbox"
                      id="LearnNewSkills"
                      value="Learn New Skills"
                      checked={profileData.studyGoals.includes('Learn New Skills')}
                      onChange={handleChange}
                      className="checkbox-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="LearnNewSkills">Learn New Skills</label>
                  </div>
                  <div className="flex items-center mb-2 ml-8">
                    <input
                      type="checkbox"
                      id="PassExams"
                      value="Pass Exams"
                      checked={profileData.studyGoals.includes('Pass Exams')}
                      onChange={handleChange}
                      className="checkbox-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="PassExams">Pass Exams</label>
                  </div>
                  <div className="flex items-center mb-2 ml-8">
                    <input
                      type="checkbox"
                      id="OtherGoal"
                      value="Other"
                      checked={profileData.studyGoals.includes('Other')}
                      onChange={handleChange}
                      className="checkbox-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="OtherGoal">Other</label>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4">
                <BackButton onClick={handleBack} />
              </div>
              <div className="absolute bottom-4 right-4">
                <NextButton onClick={handleNext} imageSrc={nextButton} />
              </div>
            </form>
          )}

          {currentStep === 3 && (
            <form>
              <div className="mb-6">
                <label className="block mb-2 text-m font-inter text-black" htmlFor="aboutMe">About Me</label>
                <textarea
                  id="aboutMe"
                  name="aboutMe"
                  value={profileData.aboutMe}
                  onChange={handleChange}
                  placeholder="Tell us about yourself"
                  className="input-field"
                  rows="4"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-m font-inter text-black" htmlFor="profilePhoto">Profile Photo</label>
                <input
                  type="file"
                  id="profilePhoto"
                  name="profilePhoto"
                  accept="image/*"
                  onChange={handleFileInputChange}
                  className="input-field"
                />
                {previewUrl && <img src={previewUrl} alt="Profile Preview" className="mt-4 h-20 w-20 object-cover rounded-full" />}
              </div>

              <div className="absolute bottom-4 left-4">
                <BackButton onClick={handleBack} />
              </div>
              <div className="absolute bottom-4 right-4">
                <NextButton onClick={handleFinish} imageSrc={nextButton} />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup1;
