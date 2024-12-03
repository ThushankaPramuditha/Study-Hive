// import React, { useContext, useState } from "react";
// // import { AuthContext } from "../context/AuthContext";
// import axios from "axios";
// import { ChatContext } from "../../context/ChatContext";
// import {
//   arrayUnion,
//   doc,
//   serverTimestamp,
//   Timestamp,
//   updateDoc,
// } from "firebase/firestore";
// import { db } from "../../firebase";
// import { v4 as uuid } from "uuid";

// import { fetchUserRole } from "../../api/fetchUserRole";

// let userName = "";
// let email = "";
// let fId = "";
// let u_id = "";

// const jwtToken = localStorage.getItem("token");
// console.log("Token: pk:", jwtToken);

// try {
//   const user = await fetchUserRole();
//   console.log("User Data:", user);
//   if (user && user.firstname && user.lastname) {
//     userName = user.firstname + " " + user.lastname;
//     email = user.email;
//     fId = user.firstname + user.id;
//     u_id = user.id;
//   } else {
//     console.error("Invalid user data received:", user);
//   }
// } catch (error) {
//   console.error("Error fetching user role:", error.message);
// }

// const Input = () => {
//   const [text, setText] = useState("");

//   const [response, setResponse] = useState(null);

//   // const { currentUser } = useContext(AuthContext);
//   const [currentUser] = useState({
//     uid: fId,
//     displayName: userName,
//     email: email,
//   });

//   const { data } = useContext(ChatContext);

//   const handleSend = async () => {
//     if (!text.trim()) return;

//     const notification = {
//       user_id: u_id,
//       detail: "New message from " + userName,
//       detail_id: 0,
//       status: "Unread",
//     };

//     await updateDoc(doc(db, "chats", data.chatId), {
//       messages: arrayUnion({
//         id: uuid(),
//         text,
//         senderId: currentUser.uid,
//         detail_id: 0,
//         date: Timestamp.now(),
//       }),
//     });

//     await updateDoc(doc(db, "userChats", currentUser.uid), {
//       [data.chatId + ".lastMessage"]: {
//         text,
//       },
//       [data.chatId + ".date"]: serverTimestamp(),
//     });

//     await updateDoc(doc(db, "userChats", data.user.uid), {
//       [data.chatId + ".lastMessage"]: {
//         text,
//       },
//       [data.chatId + ".date"]: serverTimestamp(),
//     });
//     console.log("JWT Token:", jwtToken);
//     if (!jwtToken) {
//       alert("No token found. Please log in again.");
//     }

//     try {
//       console.log("JWT in Token:", jwtToken);
//       const token = jwtToken;
//       if (!jwtToken) {
//         alert("No token found. Please log in again.");
//       }
//       const response = await axios.post(
//         "http://localhost:8090/api/notifications",
//         notification,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log("Notification created successfully:", response);
//       // setResponse(res.data);
//       alert("Notification created successfully!");
//     } catch (error) {
//       console.log("Token: pk:", jwtToken);
//       console.error("Error creating notification:", error);
//       alert("Failed to create notification.");
//     }
    

//     setText("");
//   };
//   return (
//     <div className="input1">
//       {/* <input
//         type="text"
//         placeholder="Type something..."
//         onChange={(e) => setText(e.target.value)}
//         value={text}
//       /> */}
//       <textarea
//         placeholder="Type something..."
//         onChange={(e) => setText(e.target.value)}
//         value={text}
//         rows={1} // Optional: Adjusts the height of the textarea
//         cols={30} // Optional: Adjusts the width of the textarea
//       />
//       <div className="send1">
//         <button onClick={handleSend}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Input;

import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { ChatContext } from "../../context/ChatContext";
import {
  arrayUnion,
  collection,
  doc,
  query,
  where,
  getDocs,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { v4 as uuid } from "uuid";
import { fetchUserRole } from "../../api/fetchUserRole";

const Input = () => {
  const [text, setText] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const { data } = useContext(ChatContext);
  const [err, setErr] = useState(false);
  const [user1, setUser1] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await fetchUserRole();
        if (user && user.firstname && user.lastname) {
          setCurrentUser({
            uid: user.firstname + user.id,
            displayName: user.firstname + " " + user.lastname,
            email: user.email,
            id: user.id,
          });
        } else {
          console.error("Invalid user data received:", user);
        }
      } catch (error) {
        console.error("Error fetching user role:", error.message);
      }
    };
    fetchUser();
  }, []);

  const handleSend = async () => {
    if (!text.trim() || !currentUser) return;
  
    try {
      // Fetch recipient user data
      const q = query(
        collection(db, "users"),
        where("displayName", "==", data.user.displayName)
      );
  
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setErr(true); // User not found
        return; // Exit early
      }
  
      const fetchedUser = querySnapshot.docs[0]?.data(); // Assume the first result
      if (!fetchedUser || !fetchedUser.user_id) {
        throw new Error("Recipient user data is invalid or missing user_id.");
      }
      setUser1(fetchedUser); // Update state for future use
  
      // Proceed with chat and notification logic
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
  
      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [data.chatId + ".lastMessage"]: { text },
        [data.chatId + ".date"]: serverTimestamp(),
      });
  
      await updateDoc(doc(db, "userChats", data.user.uid), {
        [data.chatId + ".lastMessage"]: { text },
        [data.chatId + ".date"]: serverTimestamp(),
      });

      setText("");
  
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found. Please log in again.");
      }
  
      const notification = {
        userId: fetchedUser.user_id, // Use fetched user ID directly
        detail: `A New Chat From ${currentUser.displayName}`,
        detailId: 0, // Ensure this is always set to a non-null value
        status: "Unread",
        type: "Chat",
      };
  
      const response = await axios.post(
        "http://localhost:8090/api/notifications",
        notification,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log("Notification created successfully:", response.data);
      
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      alert("Failed to send message or create notification.");
    }
  };
  

  return (
    <div className="input1">
      <textarea
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        rows={1}
        cols={30}
      />
      <div className="send1">
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;

