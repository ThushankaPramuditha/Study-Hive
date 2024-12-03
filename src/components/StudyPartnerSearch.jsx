import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { fetchUserRole } from "../api/fetchUserRole";
import StudyRoomInvitation from './StudyRoomInvitation';
import NotificationPopup from './NotificationPopup';


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
  const [showInvitation, setShowInvitation] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [rabbitMQConnected, setRabbitMQConnected] = useState(false);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await fetchUserRole();
        console.log('User data loaded:', userData);
        if (userData) {
          setUser(userData);
          connectToRabbitMQ(userData.id);
        } else {
          setError("Failed to load user data. Please try logging in again.");
        }
      } catch (error) {
        console.error("Error loading user data:", error);
        setError("An error occurred while loading user data. Please try again later.");
      }
    };
    loadUserData();

    return () => {
      // Cleanup function
    };
  }, []);

  const connectToRabbitMQ = (userId) => {
    console.log('Attempting to connect to RabbitMQ...');
    
    const client = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8090/ws-message'),
      connectHeaders: {
        login: 'guest',
        passcode: 'guest',
      },
      debug: function (str) {
        console.log('STOMP: ' + str);
      },
      reconnectDelay: RABBITMQ_RETRY_INTERVAL,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });
  
    client.onConnect = function (frame) {
      console.log('Connected to RabbitMQ');
      setRabbitMQConnected(true);
  
      // Add more debug logging to confirm which subscriptions succeed
      client.subscribe(`/queue/user.${userId}.notifications`, function (message) {
        console.log('Notification received:', message.body);
      });
  
      client.subscribe(`/queue/user.${userId}.invitations`, function (message) {
        console.log('Invitation update received:', message.body);
      });
    };
  
    client.onWebSocketClose = function (event) {
      console.warn('WebSocket closed:', event);
    };
  
    client.onStompError = function (frame) {
      console.error('STOMP error:', frame.headers['message']);
      setRabbitMQConnected(false);
    };
  
    client.activate();
  };
  

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

      console.log('Submitting form data:', formData);
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
      console.log('Matching partners response:', response.data);
      setMatchingPartners(response.data);
    } catch (err) {
      console.error("Error finding matching partners:", err);
      setError(err.response?.data?.message || "An unexpected error occurred while finding partners. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleConnect = (partner) => {
    console.log('Connecting with partner:', partner);
    setSelectedPartner(partner);
    setShowInvitation(true);
  };

  const handleSendInvitation = async (roomId, roomKey) => {
    try {
      const token = localStorage.getItem('token');
      console.log('Sending invitation:', { receiverId: selectedPartner.userId, roomId, roomKey });
      await axios.post(
        'http://localhost:8090/api/invitations/send',
        {
          receiverId: selectedPartner.userId,
          roomId,
          roomKey
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('Invitation sent successfully');
      setShowInvitation(false);
    } catch (error) {
      console.error("Error sending invitation:", error);
      setError("Failed to send invitation. Please try again.");
    }
  };

  const handleAcceptInvitation = async (invitationId) => {
    try {
      const token = localStorage.getItem('token');
      console.log('Accepting invitation:', invitationId);
      await axios.post(
        `http://localhost:8090/api/invitations/${invitationId}/accept`,
        {},
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('Invitation accepted successfully');
      setNotifications(prev => prev.filter(n => n.id !== invitationId));
    } catch (error) {
      console.error("Error accepting invitation:", error);
      setError("Failed to accept invitation. Please try again.");
    }
  };

  const handleDeclineInvitation = async (invitationId) => {
    try {
      const token = localStorage.getItem('token');
      console.log('Declining invitation:', invitationId);
      await axios.post(
        `http://localhost:8090/api/invitations/${invitationId}/decline`,
        {},
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('Invitation declined successfully');
      setNotifications(prev => prev.filter(n => n.id !== invitationId));
    } catch (error) {
      console.error("Error declining invitation:", error);
      setError("Failed to decline invitation. Please try again.");
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-400"></div>
      </div>
    );
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

      {!rabbitMQConnected && (
        <div className="mb-6 p-4 bg-yellow-50 text-yellow-600 rounded-lg border border-yellow-200">
          <p className="font-semibold">Warning:</p>
          <p>Real-time notifications are currently unavailable. Please refresh the page or try again later.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="studyingFor" className="block text-sm font-medium text-gray-700 mb-2">
              Subject Area
            </label>
            <select
              id="studyingFor"
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
            <label htmlFor="preferredStudyTime" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Study Time
            </label>
            <select
              id="preferredStudyTime"
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
            <label htmlFor="adaptability" className="block text-sm font-medium text-gray-700 mb-2">
              Learning Pace
            </label>
            <select
              id="adaptability"
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
          <label htmlFor="studyGoal" className="block text-sm font-medium text-gray-700 mb-2">
            Study Goal
          </label>
          <input
            type="text"
            id="studyGoal"
            name="studyGoal"
            value={formData.studyGoal}
            onChange={handleInputChange}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            placeholder="Enter your study goal"
            required
          />
        </div>

        <div>
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
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
                    onClick={() => handleConnect(partner)}
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

      {showInvitation && (
        <StudyRoomInvitation
          onSend={handleSendInvitation}
          onClose={() => setShowInvitation(false)}
        />
      )}

      {notifications.map((notification, index) => (
        <NotificationPopup
          key={index}
          notification={notification}
          onAccept={() => handleAcceptInvitation(notification.id)}
          onDecline={() => handleDeclineInvitation(notification.id)}
        />
      ))}
    </div>
  );
};

export default StudyPartnerSearch;

