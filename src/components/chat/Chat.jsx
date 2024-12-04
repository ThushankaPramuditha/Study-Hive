import React, { useContext } from "react";
// import Cam from "../img/cam.png";
// import Add from "../img/add.png";
// import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../../context/ChatContext"

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat1">
      <div className="chatInfo1">
        <span className="mr-5">{data.user?.displayName}</span>
        <div className="chatIcons1">
          {/* <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" /> */}
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;


