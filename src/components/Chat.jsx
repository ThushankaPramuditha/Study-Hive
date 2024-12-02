import React from 'react'
import Sidebar from '../components/chat/Sidebar'
import Chat from '../components/chat/Chat'
import SideBarnNavbar from './SideBarnNavbar';
import "../style.scss";
// import reLoad from "../api/fetchUserRole";

// reLoad();

const Home = () => {
  return (
    
    <div className=''>
    
      <div className='home1'>
      <SideBarnNavbar/>
      <div className="container1 xl:ml-[25%] ml-[15%] justify-center mt-[2%] ">
        <Sidebar/>
        <Chat/>
      </div>
      </div>
      
      
    </div>
  )
}

export default Home