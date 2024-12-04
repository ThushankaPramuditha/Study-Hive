import React, { useEffect, useState } from "react";
import axios from "axios";
import profile from "../assets/images/profile.png";
import DashboardContent from "./DashboardContent";
import { fetchUserRole } from "../api/fetchUserRole";
import { Link, useNavigate } from "react-router-dom";

let userId = "";

try {
  const user = await fetchUserRole();
  console.log("User Data:", user);
  if (user && user.firstname && user.lastname) {
    userId = user.id;
  } else {
    console.error("Invalid user data received:", user);
  }
} catch (error) {
  console.error("Error fetching user role:", error.message);
}

const Navbar = ({ sidebarToggle }) => {
  const [notifications, setNotifications] = useState([]); // Store notifications
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(
        http://localhost:8090/api/notifications/user/${userId},{
          params: { status: "Unread" }
        }
        );
        setNotifications(response.data); // Save notifications
        console.log("Notifications:", response.data);
      } catch (err) {
        setError(err.message || "Error fetching notifications.");
      }
    };

    if (userId) {
      fetchNotifications();
      const interval = setInterval(fetchNotifications, 3000);

      // Clean up the interval when the component is unmounted
      return () => clearInterval(interval);
    }
  }, [userId]);

  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div
      className={`${
        sidebarToggle ? "" : "ml-[263px]"
      } pl-10 w-full px-4 py-3 flex justify-between`}
    >
      <div className={flex item-center text-x1 mr-10}></div>
      <div className="flex">
        <div className="relative inline-block">
          <button className="group hover:shadow-lg hover:shadow-gray-400 active:shadow-none relative">
            <div className="flex items-center justify-center text-black bg-yellow-200 w-10 h-10 rounded relative">
              <i className="fa-regular fa-bell opacity-50"></i>
              {notifications.length > 0 && (
                <span
                  className="absolute top-0 right-[0] w-4 h-4 bg-red-500 rounded-full mt-[-5px] mr-[-5px] text-white text-[10px] flex items-center justify-center"
                  title="New notifications"
                >
                  {notifications.length}
                </span>
              )}
            </div>
            <div className="absolute hidden group-focus:block p-1 border border-black top-full right-0 bg-white w-[300px]">
              {notifications.length > 0 ? (
                <ul>
                  {notifications.map(
                    (notification) =>
                      notification.type === "Chat" ? (
                        <li key={notification.id}>
                          <p
                            onClick={() => handleNavigation("/chat")}
                            className="hover:text-yellow-600"
                          >
                            {notification.detail}
                          </p>
                        </li>
                      ) : (
                        NaN
                      ) // Handle other notification types or ignore them
                  )}
                </ul>
              ) : (
                <p>No notifications found.</p>
              )}
            </div>
          </button>
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded mr-10 ml-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="avatar"
            className="w-full h-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;