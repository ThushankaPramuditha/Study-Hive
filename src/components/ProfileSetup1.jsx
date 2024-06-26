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
  const [profilePhoto, setProfilePhoto] = useState(null); 
  const [previewUrl, setPreviewUrl] = useState(null);
  const [currentStep, setCurrentStep] = useState(1); 
  const navigate = useNavigate(); 

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  // Function to handle back button click
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  // Function to finish and navigate to the next page
  const handleFinish = () => {
    navigate('/ProfileSetup2');
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]; // Get the first file from the input
    if (file) {
      const reader = new FileReader(); // FileReader to read file contents
      reader.onloadend = () => {
        setProfilePhoto(file); // Set the selected file to state
        setPreviewUrl(reader.result); // Set the preview URL to display the image
      };
      reader.readAsDataURL(file); // Read the file as a data URL
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
                <label className="block mb-2 text-m font-inter text-black" htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="Enter your First Name"
                  className="input-field"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-m font-inter text-black" htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  id="lastname"
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
                  placeholder="Enter your University Name"
                  className="input-field"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-m font-inter text-black" htmlFor="studyingFor">I’m Studying For</label>
                <select id="studyingFor" className="input-field text-color">
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
                      name="level"
                      value="Total Beginner"
                      className="radio-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="beginner">Total Beginner</label>
                  </div>
                  <div className="flex items-center mb-2 ml-8">
                    <input
                      type="radio"
                      id="Someknowledge"
                      name="level"
                      value="Some knowledge"
                      className="radio-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="intermediate">Some Knowledge</label>
                  </div>
                  <div className="flex items-center mb-2 ml-8">
                    <input
                      type="radio"
                      id="Prettyconfident"
                      name="level"
                      value="Pretty Confident"
                      className="radio-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="advanced">Pretty Confident</label>
                  </div>
                  <div className="flex items-center mb-2 ml-8">
                    <input
                      type="radio"
                      id="Expert"
                      name="level"
                      value="Expert"
                      className="radio-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="advanced">Expert</label>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-4">
                {/* Next button */}
                <NextButton onClick={handleNext} imageSrc={nextButton} />
              </div>

            </form>
          )}

          {currentStep === 2 && (
            <form>
              <div className="mb-6">
                <label className="block mb-2 text-m font-inter text-black" htmlFor="language">Preferred Language</label>
                <input
                  type="text"
                  id="language"
                  placeholder="Type Your Preferred Language of Communication"
                  className="input-field"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-m font-inter text-black">Preferred Study Time</label>
                <div className="flex flex-col">
                  <div className="flex items-center mb-2 ml-8">
                    <input
                      type="radio"
                      id="morning"
                      name="StudyTime"
                      value="Morning"
                      className="radio-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="Morning">Morning</label>
                  </div>
                  <div className="flex items-center mb-2 ml-8">
                    <input
                      type="radio"
                      id="afternoon"
                      name="StudyTime"
                      value="Afternoon"
                      className="radio-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="Afternoon">Afternoon</label>
                  </div>
                  <div className="flex items-center mb-2 ml-8">
                    <input
                      type="radio"
                      id="evening"
                      name="StudyTime"
                      value="Evening"
                      className="radio-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="Evening">Evening</label>
                  </div>
                  <div className="flex items-center mb-2 ml-8">
                    <input
                      type="radio"
                      id="night"
                      name="StudyTime"
                      value="Night"
                      className="radio-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="Night">Night</label>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-m font-inter text-black">Study Goal</label>
                <div className="flex flex-col">
                  <div className="flex items-center mb-2 ml-8">
                    <input
                      type="checkbox"
                      id="fun"
                      name="goal"
                      value="Just for fun"
                      className="checkbox-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="fun">Just for fun</label>
                  </div>
                  <div className="flex items-center mb-2 ml-8">
                    <input
                      type="checkbox"
                      id="personalDevelopment"
                      name="goal"
                      value="Personal Development"
                      className="checkbox-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="personalDevelopment">Personal Development</label>
                  </div>
                  <div className="flex items-center mb-2 ml-8">
                    <input
                      type="checkbox"
                      id="academicDevelopment"
                      name="goal"
                      value="Academic Development"
                      className="checkbox-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="academicDevelopment">Academic Development</label>
                  </div>
                  <div className="flex items-center mb-2 ml-8">
                    <input
                      type="checkbox"
                      id="professionalDevelopment"
                      name="goal"
                      value="Professional Development"
                      className="checkbox-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="professionalDevelopment">Professional Development</label>
                  </div>
                </div>
              </div>

              <div className="mb-11">
                <label className="block mb-2 text-m font-inter text-black">About Me</label>
                <textarea
                  id="aboutme"
                  className="block w-full px-4 py-2 text-sm text-black font-inter bg-white border border-yellow-400 rounded-[25px] focus:outline-none focus:ring focus:ring-opacity-40"
                  rows="5"
                  placeholder="Let Others Know a Little About You">
                </textarea>
              </div>

              <div className="absolute bottom-4 left-4">
                {/* Back button */}
                <BackButton onClick={handleBack} />
              </div>

              <div className="absolute bottom-4 right-4">
                {/* Next button */}
                <NextButton onClick={handleNext} imageSrc={nextButton} />
              </div>

            </form>
          )}

          {currentStep === 3 && (
            <form>
              <div className="flex flex-col items-center justify-center mb-80 mt-40 h-full">
                <label className="block mb-2 text-m font-inter text-black text-center" htmlFor="profilePhoto">Let’s Add a Profile Photo</label>
                <input
                  type="file"
                  accept="image/*"
                  id="profilePhoto"
                  onChange={handleFileInputChange}
                  className="input-field"
                />
                {/* Display image preview if available */}
                {previewUrl && (
                  <img src={previewUrl} alt="Preview" className="mt-4 rounded-lg shadow-md" style={{ maxWidth: '100%', height: 'auto' }} />
                )}
              </div>
              <div className="mt-6 flex justify-center">
                <button className="px-4 py-2 text-white font-inter bg-[#A6B15C] rounded-full hover:bg-[#A6B15C] focus:outline-none focus:bg-[#A6B15C] font-light w-40 h-12" onClick={handleFinish}>
                  DONE
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProfileSetup1;
