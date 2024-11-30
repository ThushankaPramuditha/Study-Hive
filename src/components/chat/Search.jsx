import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { fetchUserRole } from "../../api/fetchUserRole";
// import { AuthContext } from "../context/AuthContext";

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

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  

  // const { currentUser } = useContext(AuthContext);
  const [currentUser] = useState({
    uid: fId,
    displayName: userName,
    email: email,
  });

  const handleSearch = async () => {
    setErr(false); // Reset error state
    setUser(null); // Clear previous user state

    if (!username.trim()) return; // Avoid empty searches

    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setErr(true); // User not found
      } else {
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        });
      }
    } catch (error) {
      console.error("Error searching user:", error);
      setErr(true);
    }
  };

  const handleKey = (e) => {
    if (e.code === "Enter") handleSearch();
  };

  const handleSelect = async () => {
    if (!user) return;

    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    console.log(combinedId);
    console.log(user.uid);
    console.log(currentUser.uid);

    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      console.log(res);

      if (!res.exists()) {
        // Create a chat in the chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        // Update current user's chat data
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [`${combinedId}.userInfo`]: {
            uid: user.uid,
            displayName: user.displayName,
          },
          [`${combinedId}.date`]: serverTimestamp(),
        });

        // Update selected user's chat data
        await updateDoc(doc(db, "userChats", user.uid), {
          [`${combinedId}.userInfo`]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
          },
          [`${combinedId}.date`]: serverTimestamp(),
        });
      }
    } catch (error) {
      console.error("Error handling chat selection:", error);
    }

    // Reset input and user state
    setUser(null);
    setUsername("");
  };

  return (
    <div className="search1">
      <div className="searchForm1">
        <input
          type="text"
          placeholder="Search a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className="userChat1" onClick={handleSelect}>
          <div className="userChatInfo1">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;


