import React, { useEffect, useState } from "react";

import "react-calendar/dist/Calendar.css";
import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import SideBarnNavbar from "./SideBarnNavbar";


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [nickname, setnickname] = useState("");
  const [stompClient, setStompClient] = useState(null);

  useEffect(() => {
    const sock = new SockJS("http://localhost:8090/ws");
    const stomp = Stomp.over(sock);

    stomp.connect({}, () => {
      stomp.subscribe("/topic/messages", (msg) => {
        const receiveMessage = JSON.parse(msg.body);
        setMessages((prevMessages) => [...prevMessages, receiveMessage]);
      });
    });
    setStompClient(stomp);

    return () => {
      stomp.disconnect();
    };
  },[]);

  const handleNickNameChange = (e) => {
    setnickname(e.target.value);
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }

  const sendMessage = () => {
    if(message.trim()){
      const chatMessage = {
        nickname,
        content: message,
      };
      
    }
  }

  return (
  )
}

export default Chat;
