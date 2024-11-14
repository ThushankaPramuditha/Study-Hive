
        
        import React, { useState } from 'react';
        import { useNavigate } from 'react-router-dom';  // Import useNavigate
        import '../App.css';
        import profilesetup from '../assets/images/profilesetup.png';
        import backButton from '../assets/images/backButton.png';
        import nextButton from '../assets/images/nextButton.png';
        import { profileService } from '../api/profileService';

        const ProfileSetup1 = () => {
            const [currentStep, setCurrentStep] = useState(1);
            const [profileData, setProfileData] = useState({
            about_me: '',
            gender: '',
            adaptability: '',
            preferredLanguages: [],
            preferred_study_time: '',
            studyGoal: [],
            studyingFor: '',
            university: '',
            username: '',
            profilePhotoUrl: ''
            });

            const [imagePreview, setImagePreview] = useState(null);

            const navigate = useNavigate(); // Initialize navigate

            const BackButton = ({ onClick }) => (
            <img src={backButton} alt="Back" className="h-8 w-8 cursor-pointer" onClick={onClick} />
            );

            const NextButton = ({ onClick, imageSrc }) => (
            <img src={imageSrc} alt="Next" className="h-8 w-8 cursor-pointer" onClick={onClick} />
            );

            // const handleSubmit = async (event) => {
            //     event.preventDefault();

            //     const token = localStorage.getItem('token');
            //     console.log("Token from localStorage:", token); 
            //     if (!token) {
            //     console.error('No token found, redirecting to login...');
            //     navigate('/login'); // Navigate to login page if no token
            //     return;
            //     }

            //     try {
            //     const response = await profileService.createProfile(profileData);

            //     if (response.token) {
            //         localStorage.setItem('to', response.token);
            //     }

            //     console.log('Profile created successfully', response.data);
            //     navigate('/home'); // Redirect to home after successful profile creation
            //     } catch (error) {
            //     console.error('Error creating profile:', error);
            //     }
            // };

       
            

            const handleSubmit = async (event) => {
                event.preventDefault();
                
                const token = localStorage.getItem('token');
                if (!token) {
                  console.error('No token found, redirecting to login...');
                  navigate('/login'); // Navigate to login page if no token
                  return;
                }
              
                console.log('Submitting profile data:', profileData); // Add this line to log the data
                
                try {
                  const serializedStudyGoal = profileData.studyGoal.join(',');
                  const serializedpreferredLanguages = profileData.preferredLanguages.join(',');
                  const dataToSend = {
                    ...profileData,
                    studyGoal: serializedStudyGoal,
                    preferredLanguages: serializedpreferredLanguages,
                     // Ensure it's the correct field
                  };
              
                  const response = await profileService.createProfile(dataToSend);
              
                  console.log('Profile created successfully', response.data);
                  navigate('/home');
                } catch (error) {
                  console.error('Error creating profile:', error);
                }
              };
              

              const handleFileInputChange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        setProfileData({
                            ...profileData,
                            profilePhotoUrl: reader.result // Set the uploaded image's base64 URL
                        });
                        setImagePreview(reader.result); // Set the image preview
                    };
                    reader.readAsDataURL(file); // Convert the image file to a base64 URL
                }
            };
            
            const handleChange = (e) => {
            const { name, value } = e.target;
            setProfileData({
                ...profileData,
                [name]: value
            });
            };

            const handleCheckboxChange = (event) => {
                const { value, checked } = event.target;
                
                // If checked, add the value to the study_goal array, else remove it
                setProfileData((prevState) => {
                    const updatedStudyGoals = checked
                        ? [...prevState.studyGoal, value] // Add value if checked
                        : prevState.studyGoal.filter(goal => goal !== value); // Remove value if unchecked
            
                    return {
                        ...prevState,
                        studyGoal: updatedStudyGoals
                    };
                });
            };
            
            const handlePreferredLanguageCheckbox = (event) => {
                const { value, checked } = event.target;
            
                setProfileData((prevState) => {
                    const updatedPreferredLanguages = checked
                        ? [...prevState.preferredLanguages, value] // Add value if checked
                        : prevState.preferredLanguages.filter(language => language !== value); // Remove value if unchecked
            
                    return {
                        ...prevState,
                        preferredLanguages: updatedPreferredLanguages
                    };
                });
            };
            

            const handleNext = () => setCurrentStep(currentStep + 1);
            const handleBack = () => setCurrentStep(currentStep - 1);

        return (
            <div className="w-full min-h-screen flex items-start relative">
            <div className="fixed top-4 right-4 text-gray-600 text-sm z-50">
                <a href="/" className="block">Home</a>
            </div>

            <div className="relative w-1/2 h-screen flex flex-col">
                <img src={profilesetup} className="w-full h-full object-contain" alt="Profile Setup" />
            </div>

            <div className="w-1/2 h-full justify-end p-20 relative">
                <div className="bg-white shadow-lg rounded-lg p-8 ml-10 -mt-5 w-full max-w-md shadow-container" style={{ boxShadow: '0px 8px 24px rgba(38, 45, 118, 0.15)', position: 'relative' }}>

                {currentStep === 1 && (
                    <form onSubmit={handleSubmit}> 
                    <div className="mb-6">
                        <label className="block mb-2 text-m font-inter text-black" htmlFor="username">User Name</label>
                        <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter the name you prefer to go by"
                        value={profileData.username}
                        onChange={handleChange}
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
                        placeholder="Enter your University Name"
                        value={profileData.university}
                        onChange={handleChange}
                        className="input-field"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-m font-inter text-black" htmlFor="studyingFor">I’m Studying For</label>
                        <select 
        id="studyingFor" 
        name="studyingFor"
        value={profileData.studyingFor}  // Control the value using state
        onChange={handleChange}
        className="input-field text-color"
        >
         <option value="" disabled selected>Select</option>
    <option value="Bachelor">Bachelor's degree</option>
    <option value="Master">Master's degree</option>
    <option value="PhD">PhD</option>
    <option value="IELTS">IELTS</option>
    <option value="Other">Other</option>
        </select>

                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-m font-inter text-black">Adaptability</label>
                        <div className="flex flex-col">
                        <div className="flex items-center mb-2 ml-8">
                            <input
                            type="radio"
                            id="FastLearner"
                            name="adaptability"
                            value="Fast Learner"
                            checked={profileData.adaptability === 'Fast Learner'}
                            onChange={handleChange}
                            className="radio-custom mr-2"
                            />
                            <label className="text-sm font-inter text-black font-light" htmlFor="FastLearner">Fast Learner</label>
                        </div>
                        <div className="flex items-center mb-2 ml-8">
                            <input
                            type="radio"
                            id="SlowLearner"
                            name="adaptability"
                            value="Slow Learner"
                            checked={profileData.adaptability === 'Slow Learner'}
                            onChange={handleChange}
                            className="radio-custom mr-2"
                            />
                            <label className="text-sm font-inter text-black font-light" htmlFor="SlowLearner">Slow Learner</label>
                        </div>
                        <div className="flex items-center mb-2 ml-8">
                            <input
                            type="radio"
                            id="ModerateLearner"
                            name="adaptability"
                            value="Moderate Learner"
                            checked={profileData.adaptability === 'Moderate Learner'}
                            onChange={handleChange}
                            className="radio-custom mr-2"
                            />
                            <label className="text-sm font-inter text-black font-light" htmlFor="ModerateLearner">Moderate Learner</label>
                        </div>
                        </div>
                    </div>

                    <div className="absolute bottom-4 right-4">
                        <NextButton onClick={handleNext} imageSrc={nextButton} />
                    </div>
                    </form>
                )}

                {currentStep === 2 && (
                    <form onSubmit={handleSubmit}>
                    {/* <div className="mb-6">
                        <label className="block mb-2 text-m font-inter text-black" htmlFor="preferredLanguages">Preferred Language</label>
                        <input
                        type="text"
                        id="preferredLanguages"
                        name="preferredLanguages"
                        placeholder="Type Your Preferred Language of Communication"
                        value={profileData.preferredLanguages}
                        onChange={handleChange}
                        className="input-field"
                        />
                    </div> */}

<div className="mb-6">
    <label className="block mb-2 text-m font-inter text-black">Preferred Languages</label>
    <div className="flex flex-col">
        <div className="flex items-center mb-2 ml-8">
            <input
                type="checkbox"
                id="sinhala"
                name="preferredLanguages"
                value="Sinhala"
                checked={profileData.preferredLanguages.includes('Sinhala')}
                onChange={handlePreferredLanguageCheckbox }
                className="checkbox-custom mr-2"
            />
            <label className="text-sm font-inter text-black font-light" htmlFor="sinhala">Sinhala</label>
        </div>
        <div className="flex items-center mb-2 ml-8">
            <input
                type="checkbox"
                id="english"
                name="preferredLanguages"
                value="English"
                checked={profileData.preferredLanguages.includes('English')}
                onChange={handlePreferredLanguageCheckbox }
                className="checkbox-custom mr-2"
            />
            <label className="text-sm font-inter text-black font-light" htmlFor="english">English</label>
        </div>
        <div className="flex items-center mb-2 ml-8">
            <input
                type="checkbox"
                id="tamil"
                name="preferredLanguages"
                value="Tamil"
                checked={profileData.preferredLanguages.includes('Tamil')}
                onChange={handlePreferredLanguageCheckbox }
                className="checkbox-custom mr-2"
            />
            <label className="text-sm font-inter text-black font-light" htmlFor="tamil">Tamil</label>
        </div>
    </div>
</div>
                    <div className="mb-6">
                        <label className="block mb-2 text-m font-inter text-black">Preferred Study Time</label>
                        <div className="flex flex-col">
                        <div className="flex items-center mb-2 ml-8">
                            <input
                            type="radio"
                            id="morning"
                            name="preferredStudyTime"
                            value="Morning"
                            checked={profileData.preferredStudyTime === 'Morning'}
                            onChange={handleChange}
                            className="radio-custom mr-2"
                            />
                            <label className="text-sm font-inter text-black font-light" htmlFor="morning">Morning</label>
                        </div>
                        <div className="flex items-center mb-2 ml-8">
                            <input
                            type="radio"
                            id="afternoon"
                            name="preferredStudyTime"
                            value="Afternoon"
                            checked={profileData.preferredStudyTime === 'Afternoon'}
                            onChange={handleChange}
                            className="radio-custom mr-2"
                            />
                            <label className="text-sm font-inter text-black font-light" htmlFor="afternoon">Afternoon</label>
                        </div>
                        <div className="flex items-center mb-2 ml-8">
                            <input
                            type="radio"
                            id="evening"
                            name="preferredStudyTime"
                            value="Evening"
                            checked={profileData.preferredStudyTime === 'Evening'}
                            onChange={handleChange}
                            className="radio-custom mr-2"
                            />
                            <label className="text-sm font-inter text-black font-light" htmlFor="evening">Evening</label>
                        </div>
                        <div className="flex items-center mb-2 ml-8">
                            <input
                            type="radio"
                            id="night"
                            name="preferredStudyTime"
                            value="Night"
                            checked={profileData.preferredStudyTime === 'Night'}
                            onChange={handleChange}
                            className="radio-custom mr-2"
                            />
                            <label className="text-sm font-inter text-black font-light" htmlFor="night">Night</label>
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
                        name="studyGoal"
                        value="Just for fun"
                        checked={profileData.studyGoal.includes('Just for fun')}
                        onChange={handleCheckboxChange}
                        className="checkbox-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="fun">Just for fun</label>
                </div>
                <div className="flex items-center mb-2 ml-8">
                    <input
                        type="checkbox"
                        id="personalDevelopment"
                        name="studyGoal"
                        value="Personal Development"
                        checked={profileData.studyGoal.includes('Personal Development')}
                        onChange={handleCheckboxChange}
                        className="checkbox-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="personalDevelopment">Personal Development</label>
                </div>
                <div className="flex items-center mb-2 ml-8">
                    <input
                        type="checkbox"
                        id="academicDevelopment"
                        name="studyGoal"
                        value="Academic Development"
                        checked={profileData.studyGoal.includes('Academic Development')}
                        onChange={handleCheckboxChange}
                        className="checkbox-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="academicDevelopment">Academic Development</label>
                </div>
                <div className="flex items-center mb-2 ml-8">
                    <input
                        type="checkbox"
                        id="professionalDevelopment"
                        name="studyGoal"
                        value="Professional Development"
                        checked={profileData.studyGoal.includes('Professional Development')}
                        onChange={handleCheckboxChange}
                        className="checkbox-custom mr-2"
                    />
                    <label className="text-sm font-inter text-black font-light" htmlFor="professionalDevelopment">Professional Development</label>
                </div>
            </div>
        </div>


                    <div className="mb-11">
                        <label className="block mb-2 text-m font-inter text-black">About Me</label>
                        <textarea
                        id="aboutMe"
                        name="aboutMe"
                        className="block w-full px-4 py-2 text-sm text-black font-inter bg-white border border-yellow-400 rounded-[25px] focus:outline-none focus:ring focus:ring-opacity-40"
                        rows="5"
                        placeholder="Let Others Know a Little About You"
                        value={profileData.aboutMe}
                        onChange={handleChange}
                        ></textarea>
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
                    <form onSubmit={handleSubmit}>
                    {/* <div className="flex flex-col items-center justify-center mb-80 mt-40 h-full">
                        <label className="block mb-2 text-m font-inter text-black text-center" htmlFor="profilePhotoUrl">Let’s Add a Profile Photo</label>
                        <input
                            type="url"
                            id="profilePhotoUrl"
                            name="profilePhotoUrl"
                            value={profileData.profilePhotoUrl}
                            onChange={handleChange}
                            placeholder="Enter the URL of your profile photo"
                        />
                        { <input
                        type="file"
                        accept="image/*"
                        id="profilePhoto"
                        onChange={handleFileInputChange}
                        className="input-field"
                        />

                        {formData.profilePhotoUrl && (
                        <img src={formData.profilePhotoUrl} alt="Preview" className="mt-4 rounded-lg shadow-md" style={{ maxWidth: '100%', height: 'auto' }} />
                        )} 
                        }
                    </div> */}

<div className="flex flex-col items-center justify-center mb-80 mt-40 h-full">
                                <label className="block mb-2 text-m font-inter text-black text-center" htmlFor="profilePhotoUrl">Let’s Add a Profile Photo</label>
                                {/* File input for image upload */}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileInputChange}
                                    className="input-field"
                                />
                                {imagePreview && (
                                    <img src={imagePreview} alt="Profile Preview" className="mt-4 rounded-lg shadow-md" style={{ maxWidth: '100%', height: 'auto' }} />
                                )}
                                </div>

                    <div className="mt-6 flex justify-center">
                        <button className="px-4 py-2 text-white font-inter bg-[#A6B15C] rounded-full hover:bg-[#A6B15C] focus:outline-none focus:bg-[#A6B15C] font-light w-40 h-12" type="submit" >
                        DONE
                        </button>
                    </div>

                    <div className="absolute bottom-4 left-4">
                        <BackButton onClick={handleBack} />
                    </div>
                    </form>
                )}
                </div>
            </div>
            </div>
        );
        };


        export default ProfileSetup1;