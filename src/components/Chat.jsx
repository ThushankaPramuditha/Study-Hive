import React, { useState, useEffect } from 'react';
import Sidebar from '../components/chat/Sidebar';
import Chat from '../components/chat/Chat';
import SideBarnNavbar from './SideBarnNavbar';
import "../style.scss";
import { fetchUserRole } from '../api/fetchUserRole';
import axios from 'axios';

const Chat1 = () => {
  const [notifications, setNotifications] = useState([]); // Store notifications
  const [error, setError] = useState(null); // Error state
  const [userId, setUserId] = useState(null); // Store userId

  // Fetch user data and set userId
  useEffect(() => {
    const fetchUserAndNotifications = async () => {
      try {
        const user = await fetchUserRole();
        console.log("User Data:", user);

        if (user && user.firstname && user.lastname) {
          setUserId(user.id); // Set userId after fetching user role
        } else {
          console.error("Invalid user data received:", user);
        }
      } catch (err) {
        setError(err.message || "Error fetching user data.");
      }
    };

    fetchUserAndNotifications(); // Call the function to fetch user data
  }, []); // Empty dependency array ensures it runs once on mount

  // Fetch notifications when userId changes
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        if (userId) {
          const response = await axios.get(
            `http://localhost:8090/api/notifications/user/${userId}?status=Unread`
          );
          setNotifications(response.data); // Save notifications
          console.log("Notifications:", response.data);

          // Update the notification status to 'Read' after notifications are fetched
          response.data.forEach((notification) => {
            updateNotificationStatus(notification.id);
          });
        }
      } catch (err) {
        setError(err.message || "Error fetching notifications.");
      }
    };

    if (userId) {
      fetchNotifications(); // Fetch notifications when userId is available
      const interval = setInterval(fetchNotifications, 500);

      // Clean up the interval when the component is unmounted
      return () => clearInterval(interval);
    }
  }, [userId]); // Only run when userId changes

  const updateNotificationStatus = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:8090/api/notifications/${id}/status?status=Read`
      );
      console.log("Updated Notification:", response.data);
    } catch (error) {
      console.error("Error updating notification:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <div className="home1">
        <SideBarnNavbar />
        <div className="container1 xl:ml-[25%] ml-[15%] justify-center mt-[2%]">
          <Sidebar />
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Chat1;
