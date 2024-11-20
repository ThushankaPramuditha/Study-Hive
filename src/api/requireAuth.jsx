import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { fetchUserRole } from "./fetchUserRole";

const RequireAuth = ({ allowedRoles }) => {
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const user = await fetchUserRole();
        setUserRole(user.role);
      } catch (error) {
        console.error("Error fetching user role:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRole();
  }, []);

  // Show a loading spinner or placeholder while the role is being fetched
  if (isLoading) {
    return <div className="flex items-center justify-center h-screen bg-gray-100">
    <h1 className="text-3xl font-bold text-gray-800">Loading...</h1>
  </div>;
  }

  // Redirect to unauthorized if the role is not allowed
  if (allowedRoles != userRole) {
    if ( userRole == "ADMIN"){
        return <Navigate to="/AdminDashboard" replace />;
    }
    else if ( userRole == "USER"){
        return <Navigate to="/Home" replace />;
    }
    else {
        return <Navigate to="/login" replace />;
    }

    
  }

  // Render child routes if the user is authorized
  return <Outlet />;
};

export default RequireAuth;
