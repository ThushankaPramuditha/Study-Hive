import React, { useState } from "react";
import { fetchUserRole } from "../../api/fetchUserRole";

let userName = "";
let email = "";
let fId = "";

try {
  const user = await fetchUserRole();
  console.log("User Data:", user);
  if (user && user.firstname && user.lastname) {
    userName = user.firstname+" "+user.lastname;
    email = user.email;
    fId = user.firstname + user.id;
  } else {
    console.error("Invalid user data received:", user);
  }
} catch (error) {
  console.error("Error fetching user role:", error.message);
}

const Navbar = () => {
  // Temporary user object for demonstration purposes
  const [currentUser] = useState({
    uid: fId,
    displayName: userName,
    email: email,
  });

  return (
    <div className="navbar1">
      <span className="logo1">Inbox</span>
      <div className="user1">
        <span>{currentUser.displayName}</span>
        {/* Uncomment this when using Firebase authentication */}
        {/* <button onClick={() => signOut(auth)}>Logout</button> */}
      </div>
    </div>
  );
};

export default Navbar;



