import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchUserRole } from '../api/fetchUserRole';

const StudyPartnerSearch = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    studyingFor: '',
    preferredStudyTime: '',
    adaptability: '',
    studyGoal: '',
    additionalInfo: ''
  });
  const [matchingPartners, setMatchingPartners] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await fetchUserRole();
        setUser(userData);
      } catch (error) {
        console.error("Error loading user data:", error);
        setError("Failed to load user data. Please try again later.");
      }
    };
    loadUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await axios.post(
        'http://localhost:8090/api/matching/find-partners',
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          timeout: 10000
        }
      );
      console.log("Request sent with token:", token);
      console.log("Matching partners:", response.data);

      setMatchingPartners(response.data);
    } catch (err) {
      console.error("Error finding matching partners:", err);
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Response data:", err.response.data);
        console.error("Response status:", err.response.status);
        console.error("Response headers:", err.response.headers);
        setError(`Server error: ${err.response.data.message || err.response.statusText}`);
      } else if (err.request) {
        // The request was made but no response was received
        console.error("No response received:", err.request);
        setError("No response received from the server. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", err.message);
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleConnect = async (partnerId) => {
    // Implement connection logic here
    console.log(`Connecting with partner ${partnerId}`);
  };

  if (!user) {
    return <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-400"></div>
    </div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        Find Your Ideal Study Partner
      </h1>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg border border-red-200">
          <p className="font-semibold">Error:</p>
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject Area
            </label>
            <select
              name="studyingFor"
              value={formData.studyingFor}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              required
            >
              <option value="">Select Subject</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Business">Business</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Study Time
            </label>
            <select
              name="preferredStudyTime"
              value={formData.preferredStudyTime}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              required
            >
              <option value="">Select Time</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Learning Pace
            </label>
            <select
              name="adaptability"
              value={formData.adaptability}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              required
            >
              <option value="">Select Pace</option>
              <option value="Fast">Fast learner</option>
              <option value="Moderate">Moderate pace</option>
              <option value="Thorough">Thorough learner</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Study Goal
          </label>
          <input
            type="text"
            name="studyGoal"
            value={formData.studyGoal}
            onChange={handleInputChange}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            placeholder="Enter your study goal"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Information
          </label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            className="w-full border rounded-lg p-2 h-32 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            placeholder="Describe what you're looking for in a study partner..."
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 
                   disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 ease-in-out
                   focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Searching...
            </span>
          ) : 'Find Partners'}
        </button>
      </form>

      {matchingPartners.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Matching Partners</h2>
          <div className="space-y-4">
            {matchingPartners.map((partner) => (
              <div
                key={partner.userId}
                className="border rounded-lg p-4 flex items-center justify-between bg-white shadow-sm hover:shadow-md transition duration-200 ease-in-out"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-yellow-200 flex items-center justify-center overflow-hidden">
                    {partner.profilePhotoUrl ? (
                      <img
                        src={partner.profilePhotoUrl}
                        alt={partner.username}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl font-bold">{partner.username[0].toUpperCase()}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{partner.username}</h3>
                    <p className="text-sm text-gray-600">{partner.studyingFor}</p>
                    <div className="text-sm text-gray-500 mt-1">
                      {Object.entries(partner.matchDetails || {}).map(([key, value]) => (
                        <span key={key} className="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">
                      {partner.matchScore}%
                    </div>
                    <div className="text-sm text-gray-500">Match</div>
                  </div>
                  <button
                    onClick={() => handleConnect(partner.userId)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Connect
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StudyPartnerSearch;

