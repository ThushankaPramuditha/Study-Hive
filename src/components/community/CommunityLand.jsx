import React from "react";
import axios from "axios";
import { useEffect } from "react";
import ComSidebar from "./ComSidebar";
import CommunityHeader from "./CommunityHeader";
import CommunityPost from "./CommunityPost";


function CommunityLand() {
  useEffect(() => {
    axios.get("http://localhost:8080/ComPostAll").then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <CommunityHeader  />
      <ComSidebar />
      <div className=" bg-red-50 mt-[70px] ml-[70px] mr-[30px] flex-grow h-full pb-[100px] flex flex-row justify-between ">
      <CommunityPost />


      </div>

    </div>
  );
}

export default CommunityLand;

