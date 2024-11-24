import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SideBarnNavbar from './SideBarnNavbar';
import MatchedPartnersPopup from './MatchedPartnersPopup';

const FindPartner = ({ loggedInUsername }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const dummyData = [
    {
      username: 'john_doe',
      profilePhotoUrl: 'https://via.placeholder.com/150',
      aboutMe: 'I am a dedicated student.',
    },
    {
      username: 'jane_doe',
      profilePhotoUrl: 'https://via.placeholder.com/150',
      aboutMe: 'I love studying with others.',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPopupOpen(true); // Open the popup with dummy data
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
      <div className="">
        <SideBarnNavbar />
        <div className="ml-[300px] mt-[20px] flex-1">
          <p className="text-blue-900 text-[26px] font-semibold">Please describe the type of study partner you are seeking.</p>
          <p className="text-[#646464] text-[16px] mr-28 mt-2">Make sure to include specific qualities or skills that are important to you. This will help us match you with someone who complements your learning style and academic goals.</p>

          <div className="mt-10">
            <form onSubmit={handleSubmit}>
              <div className="flex mb-5 text-[14px] gap-8">
                <div className="flex flex-col mr-5">
                  <label className="text-gray-500">Choose the subject area</label>
                  <select name="subjectArea" className="border rounded-lg p-2 mt-2 w-64">
                    <option value="" disabled>Select</option>
                    <option>Computer Science</option>
                    <option>Mathematics</option>
                    <option>Geography</option>
                    <option>Mgt & Accounting</option>
                    <option>History</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col mr-5">
                  <label className="text-gray-500">Choose the preferred study time</label>
                  <select name="preferredStudyTime" className="border rounded-lg p-2 mt-2 w-64">
                    <option value="" disabled>Select</option>
                    <option>Early morning</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                    <option>Night time</option>
                    <option>Late night</option>
                    <option>Flexible</option>
                    <option>Weekend mornings</option>
                    <option>Weekend evenings</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-500">Adaptability</label>
                  <select name="adaptability" className="border rounded-lg p-2 mt-2 w-64">
                    <option value="" disabled>Select</option>
                    <option>Fast learner</option>
                    <option>Slow learner</option>
                    <option>Medium pace</option>
                    <option>Flexible with pace</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col mb-5 text-[14px]">
                <label className="text-gray-500">Add additional information</label>
                <textarea name="additionalInfo" className="border rounded-lg p-2 mt-2 h-32 w-[875px]" placeholder="Add additional info here"></textarea>
              </div>

              <button type="submit" className="bg-[#F6CA30] text-black rounded-lg w-24 h-10">Search</button>
            </form>
          </div>

          <p className="text-black text-[16px] font-semibold mt-8">Suggested Study Partner Requests <Link to="/ViewPartners" className="underline font-light ml-3 text-[14px] text-[#929292]">view more</Link></p>

          <div className="bg-[#F1F1F1] h-[310px] mr-20 rounded-lg p-2 mt-6">
            <div className="container mx-auto grid grid-cols-3 gap-6 mt-6 justify-center w-[90%]">
              {/* Dummy content for now */}
            </div>
          </div>
        </div>

        {isPopupOpen && (
            <MatchedPartnersPopup matchingProfiles={dummyData} closePopup={closePopup} />
        )}
      </div>
  );
};

FindPartner.propTypes = {
  loggedInUsername: PropTypes.string.isRequired,
};

export default FindPartner;