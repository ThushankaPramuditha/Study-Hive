import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import backgroundvideo from '../assets/images/backgroundvideo.mp4';

const RoomComponent = () => {
  const [time, setTime] = useState(0);  
  const [isChatVisible, setIsChatVisible] = useState(false);
  const navigate = useNavigate(); 


  const navigateToVideoCall = () => {
    navigate("/videocall");  // Ensure this route exists in your React app
  };

  // Function to toggle chat visibility
  const toggleChat = () => {
    setIsChatVisible(!isChatVisible);
  };

  // Timer to update the time counter
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);  // Update every second

    // Cleanup the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="room-container"
      style={{
        position: "relative",
        height: "100vh",  // Full screen height
        color: "white",
        overflow: "hidden", // Ensure the video stays contained
      }}
    >
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensure the video covers the entire screen
          zIndex: -1, // Send the video behind other elements
        }}
      >
        <source src={backgroundvideo} type="video/mp4" />
      </video>

      <div className="overlay" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>

      {/* Clock Display */}
      <div className="clock" style={{ position: "absolute", top: "20px", left: "20px", fontSize: "24px", zIndex: 10 }}>
        <p>Time: {new Date(time * 1000).toISOString().substr(11, 8)}</p> {/* Format time */}
      </div>

      {/* Button to Navigate to Video Call Page */}
      <div className="video-call-btn" style={{ position: "absolute", bottom: "100px", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <button
          onClick={navigateToVideoCall}
          style={{
            padding: "10px 20px",
            backgroundColor: "#00A3E0",
            color: "white",
            fontSize: "18px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          Join Video Call
        </button>
      </div>

      {/* Chat Button */}
      <div className="chat-btn" style={{ position: "absolute", bottom: "50px", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <button
          onClick={toggleChat}
          style={{
            padding: "10px 20px",
            backgroundColor: "#FF6347",
            color: "white",
            fontSize: "18px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          {isChatVisible ? "Hide Chat" : "Show Chat"}
        </button>
      </div>

      {/* Close the room Button */}
      <div className="close-room-btn" style={{ position: "absolute", bottom: "20px", right: "20px", zIndex: 10 }}>
        <button
          onClick={() => navigate("/home")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#FF6347",
            color: "white",
            fontSize: "18px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          Close Room
        </button>
      </div>

      {/* Chat Window */}
      {isChatVisible && (
        <div className="chat-window" style={{
          position: "absolute", bottom: "20px", left: "20px", width: "300px", height: "200px",
          backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "10px", borderRadius: "10px", zIndex: 10
        }}>
          <div className="chat-header" style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
            Chat
          </div>
          <div className="chat-messages" style={{ overflowY: "auto", flexGrow: 1 }}>
            <div className="message" style={{ marginBottom: "10px" }}>User1: Hello!</div>
            <div className="message" style={{ marginBottom: "10px" }}>User2: Hi there!</div>
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginTop: "10px",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default RoomComponent;
