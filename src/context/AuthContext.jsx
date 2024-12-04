import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Ensure Firestore is correctly imported
import { fetchUserRole } from "../api/fetchUserRole";

export const AuthContext = createContext();

let userName = "";

try {
  const user = await fetchUserRole();
  console.log("User Data:", user);
  if (user && user.firstname && user.lastname) {
    userName = user.firstname+" "+user.lastname;
  } else {
    console.error("Invalid user data received:", user);
  }
} catch (error) {
  console.error("Error fetching user role:", error.message);
}


export const AuthContextProvider = ({ children }) => {


 


  const [currentUser, setCurrentUser] = useState(null); // `null` indicates no user by default
  const [error, setError] = useState(false); // Manage query errors
  const [userData, setUserData] = useState(null); // Firestore user data

  useEffect(() => {
    // Monitor authentication state changes
    const unsub = onAuthStateChanged(auth, (user) => {
        setUserData(user);
        fetchUserData(userName); // Fetch Firestore data if user exists

    });

    return () => unsub(); // Cleanup subscription on component unmount
  }, []);

  const fetchUserData = async (displayName) => {
    if (!displayName) return; // Avoid unnecessary queries

    const q = query(
      collection(db, "users"),
      where("displayName", "==", displayName)
    );

    try {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setError(true); // User not found in Firestore
      } else {
        querySnapshot.forEach((doc) => {
          setCurrentUser(doc.data()); // Set Firestore user data
        });
      }
    } catch (err) {
      console.error("Error fetching user data:", err);
      setError(true); // Handle query error
    }
  };
  console.log("Error fetching user currentUser:", currentUser);
  AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
