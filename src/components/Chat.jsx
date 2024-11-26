import React, { useEffect, useState } from "react";

import "react-calendar/dist/Calendar.css";
import { ZIMKitManager, Common } from "@zegocloud/zimkit-react";
import "@zegocloud/zimkit-react/index.css";
import "../index.css?v=1";
import SideBarnNavbar from "./SideBarnNavbar";
import { userFname, userId } from "./const";

const Chat = () => {
  const [state, setState] = useState({
    appConfig: {
      appID: 1388359323,
      serverScret: "10140b1237f92aa80f2f7c240c440438",
    },
    userInfo: {
      userID: userFname+userId,
      userName: userFname,
      userAvatar: "",
    },
  });
  

  useEffect(() => {
    
    const init = async () => {
        const zimkit = new ZIMKitManager();
        const token = zimkit.generateKitTokenForTest(
          state.appConfig.appID,
          state.appConfig.serverScret,
          state.userInfo.userID
        );
  
        await zimkit.init(state.appConfig.appID);
        await zimkit.connectUser(state.userInfo, token);
      };
    init();
  }, []);

  

  return (
    <div>
        
      <SideBarnNavbar></SideBarnNavbar>
      <h1 className="text-center">UserID {state.userInfo.userID}</h1>
      <Common></Common>
      
    </div>
  );
};

export default Chat;
