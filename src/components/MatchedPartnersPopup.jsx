import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const MatchedPartnersPopup = ({ closePopup }) => {
  const [matchingProfiles, setMatchingProfiles] = useState([]);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const profileDTO = {
          username: "john_doe", // Example user data
          gender: "Male",
          adaptability: "High",
          preferredLanguages: "English",
          preferredStudyTime: "Morning",
          studyGoal: "Pass exams",
          aboutMe: "I am a dedicated student.",
          studyingFor: "Computer Science",
          university: "XYZ University",
          profilePhotoUrl: "http://example.com/photo.jpg",
        };

        const response = await fetch("http://localhost:8080/api/profiles/match", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Correct headers
          },
          body: JSON.stringify(profileDTO), // Include request body
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Matching profiles:", data);
        setMatchingProfiles(data);
      } catch (error) {
        console.error("Error fetching matching partners:", error);
      }
    };

    loadUserData();
  }, []);

  const handleSendRequest = (username) => {
    console.log(`Send request to ${username}`);
    // Add your logic for sending requests
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg h-auto w-[400px]">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold mb-1">Matched Partners</h2>
          <div className="h-[2px] w-[100px] bg-questions"></div>
        </div>
        <div className="mt-10">
          {matchingProfiles.length > 0 ? (
            matchingProfiles.map((profile, index) => (
              <div
                className="flex items-center w-full h-auto bg-gray-100 rounded-lg justify-between m-2 p-2"
                key={index}
              >
                <div className="flex items-center">
                  <div className="ml-4 w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="ml-3 w-12 h-12 border-2 border-yellow-400 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={profile.profilePhotoUrl || "default-image.jpg"}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col ml-2">
                    <p className="text-sm sm:text-sm font-semibold">
                      {profile.username} <span className="font-normal">{profile.aboutMe}</span>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleSendRequest(profile.username)}
                  className="bg-blue-500 text-white rounded-lg px-4 py-2 ml-4"
                >
                  Send Request
                </button>
              </div>
            ))
          ) : (
            <p>No matching partners found.</p>
          )}
        </div>
        <div className="flex justify-end mt-10">
          <button
            onClick={closePopup}
            className="px-4 py-2 border questions text-white rounded hover:shadow-lg hover:shadow-gray-400 active:shadow-none"
          >
            <p className="logo1">Close</p>
          </button>
        </div>
      </div>
    </div>
  );
};

MatchedPartnersPopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
};

export default MatchedPartnersPopup;
