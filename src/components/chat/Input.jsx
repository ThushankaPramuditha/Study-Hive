import React, { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { v4 as uuid } from "uuid";

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

const Input = () => {
  const [text, setText] = useState("");

  // const { currentUser } = useContext(AuthContext);
  const [currentUser] = useState({
    uid: fId,
    displayName: userName,
    email: email,
  });
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    await updateDoc(doc(db, "chats", data.chatId), {
      messages: arrayUnion({
        id: uuid(),
        text,
        senderId: currentUser.uid,
        date: Timestamp.now(),
      }),
    });

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
  };
  return (
    <div className="input1">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send1">
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;

