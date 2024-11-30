import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    if (!data.chatId) return; // Do nothing if chatId is not set

    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      if (doc.exists()) {
        const chatData = doc.data();
        setMessages(Array.isArray(chatData.messages) ? chatData.messages : []);
      } else {
        setMessages([]); // Clear messages if chat is deleted or doesn't exist
      }
    });

    return () => {
      unSub(); // Cleanup listener on unmount or chatId change
    };
  }, [data.chatId]);

  return (
    <div className="messages1">
      {messages.length > 0 ? (
        messages.map((m) => <Message message={m} key={m.id} />)
      ) : (
        <p>No messages to display</p> // Optional: Message for no chats
      )}
    </div>
  );
};

export default Messages;


