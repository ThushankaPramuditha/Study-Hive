import React, { useEffect, useState } from "react";
import SideBarnNavbar from "./SideBarnNavbar";
import DashboardContent from "./DashboardContent";
import { fetchUserRole } from "../api/fetchUserRole";

const Dashboard = () => {
  const [sidebarToggle, setSidebarToggle] = React.useState(false);

  const [userFname, setUserFname] = useState(null);
  const [userLname, setUserLname] = useState(null);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const user = await fetchUserRole();
        if (user && user.firstname && user.lastname) {
          setUserFname(user.firstname);
          setUserLname(user.lastname);
        } else {
          console.error("Invalid user data received:", user);
        }
      } catch (error) {
        console.error("Error fetching user role:", error.message);
      }
    };

    fetchRole();
  }, []);

  return (
    <div className="">
      <SideBarnNavbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <DashboardContent
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
        userFname={userFname}
        userLname={userLname}
      />
    </div>
  );
};

export default Dashboard;
