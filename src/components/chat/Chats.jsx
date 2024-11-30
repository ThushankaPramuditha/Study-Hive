import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../firebase";
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

const Chats = () => {
  const [chats, setChats] = useState({});
  // const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const [currentUser] = useState({
    uid: fId,
    displayName: userName,
    email: email,
  });

  useEffect(() => {
    if (!currentUser?.uid) return;

    const getChats = () => {
      const unsub = onSnapshot(
        doc(db, "userChats", currentUser.uid),
        (docSnapshot) => {
          if (docSnapshot.exists()) {
            setChats(docSnapshot.data());
          } else {
            setChats({}); // If no chats exist, set to an empty object
          }
        },
        (error) => {
          console.error("Error fetching userChats:", error);
        }
      );

      return () => {
        unsub(); // Clean up the listener on unmount
      };
    };

    getChats();
  }, [currentUser?.uid]);

  const handleSelect = (userInfo) => {
    dispatch({ type: "CHANGE_USER", payload: userInfo });
  };

  return (
    <div className="chats1">
      {Object.entries(chats)
        .sort((a, b) => {
          const dateA = a[1]?.date?.seconds || 0;
          const dateB = b[1]?.date?.seconds || 0;
          return dateB - dateA; // Sort by date, newest first
        })
        .map(([chatId, chatData]) => (
          <div
            className="userChat1"
            key={chatId}
            onClick={() => handleSelect(chatData.userInfo)}
          >
            <div className="userChatInfo1">
              <span>{chatData.userInfo?.displayName || "Unknown User"}</span>
              <p>{chatData.lastMessage?.text || "No message available"}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
