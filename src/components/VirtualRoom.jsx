import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import backgroundvideo from '../assets/images/backgroundvideo.mp4';

const VirtualRoom = () => {
  const [time, setTime] = useState(0);
  const [sessionGoals, setSessionGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");
  const [quote, setQuote] = useState("");
  const [acceptedUsers, setAcceptedUsers] = useState([]);
  const [isVideoCallOpen, setIsVideoCallOpen] = useState(false);
  const [isGroupChatOpen, setIsGroupChatOpen] = useState(false);
  const [showConfirmLeave, setShowConfirmLeave] = useState(false);
  const navigate = useNavigate();
  const { roomId, userId } = useParams();

  const motivationalQuotes = [
    "However difficult life may seem, there is always something you can do and succeed at. - Stephen Hawking",
    "The secret of getting ahead is getting started. - Mark Twain",
    "Your limitation—it's only your imagination.",
    "Dream it. Believe it. Build it.",
  ];

  useEffect(() => {
    if (!roomId || !userId) {
      console.error('Room ID or User ID is missing');
      navigate('/home');
      return;
    }

    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    setQuote(randomQuote);

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    fetchAcceptedUsers();

    return () => {
      clearInterval(timer);
    };
  }, [roomId, userId, navigate]);

  const fetchAcceptedUsers = async () => {
    try {
      const response = await fetch(`http://localhost:8090/api/studyrooms/${roomId}/accepted-users`);
      if (response.ok) {
        const users = await response.json();
        const uniqueUsers = Array.from(new Set(users.map(user => user.userId)))
          .map(userId => users.find(user => user.userId === userId));
        setAcceptedUsers(uniqueUsers);
      }
    } catch (error) {
      console.error('Error fetching accepted users:', error);
    }
  };

  const leaveRoom = async () => {
    try {
      const response = await fetch(`http://localhost:8090/api/studyrooms/${roomId}/leave?userId=${userId}&timeSpent=${time}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        navigate('/home');
      } else {
        const errorText = await response.text();
        console.error('Failed to leave room:', errorText);
      }
    } catch (error) {
      console.error('Error leaving room:', error);
    }
  };

  const handleAddGoal = () => {
    if (newGoal.trim() !== "") {
      setSessionGoals([...sessionGoals, newGoal]);
      setNewGoal("");
    }
  };

  const handleRemoveGoal = (index) => {
    setSessionGoals(sessionGoals.filter((_, i) => i !== index));
  };

  if (!roomId || !userId) return <div>Loading...</div>;

  return (
    <div className="room-container" style={{ position: "relative", height: "100vh", color: "white", overflow: "hidden" }}>
      <video autoPlay loop muted style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -1 }}>
        <source src={backgroundvideo} type="video/mp4" />
      </video>

      <div className="overlay" style={{ position: "relative", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.8)" }}></div>

      {/* Header Section */}
      <div style={{ position: "relative", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <div className="clock" style={{ fontSize: "24px", fontWeight: "bold" }}>
          <p>Elapsed Time: {new Date(time * 1000).toISOString().substr(11, 8)}</p>
        </div>
        <h1 style={{ color: "#FFD700", margin: 0 }}>Study Room {roomId}</h1>
        <div className="quote" style={{ maxWidth: "400px", textAlign: "right", color: "#FFD700", fontStyle: "italic" }}>
          {quote}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: "flex", height: "calc(100vh - 100px)", padding: "20px" }}>
        {/* Left Panel */}
        <div style={{ width: "300px", marginRight: "20px" }}>
          <div className="accepted-users" style={{ 
            backgroundColor: "rgba(0, 0, 0, 0.7)", 
            padding: "20px", 
            borderRadius: "10px",
            marginBottom: "20px",
            border: "1px solid #FFD700"
          }}>
            <h3 style={{ color: "#FFD700", marginBottom: "15px" }}>Accepted Users</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {acceptedUsers.map((user) => (
                <li key={user.id} style={{ padding: "8px 0", borderBottom: "1px solid rgba(255, 215, 0, 0.2)" }}>
                  {user.userId}
                </li>
              ))}
            </ul>
          </div>

          <div className="session-goals" style={{ 
            backgroundColor: "rgba(0, 0, 0, 0.7)", 
            padding: "20px", 
            borderRadius: "10px",
            border: "1px solid #FFD700"
          }}>
            <h3 style={{ color: "#FFD700", marginBottom: "15px" }}>Session Goals</h3>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                value={newGoal}
                onChange={(e) => setNewGoal(e.target.value)}
                placeholder="Add a new goal"
                style={{ 
                  width: "100%",
                  padding: "8px",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  border: "1px solid #FFD700",
                  borderRadius: "5px",
                  color: "white",
                  marginBottom: "10px"
                }}
              />
              <button 
                onClick={handleAddGoal}
                style={{ 
                  width: "100%",
                  padding: "8px",
                  backgroundColor: "#FFD700",
                  color: "black",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
              >
                Add Goal
              </button>
            </div>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {sessionGoals.map((goal, index) => (
                <li key={index} style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center",
                  padding: "8px",
                  borderBottom: "1px solid rgba(255, 215, 0, 0.2)",
                  marginBottom: "5px"
                }}>
                  <span>{goal}</span>
                  <button 
                    onClick={() => handleRemoveGoal(index)}
                    style={{ 
                      backgroundColor: "#FF0000",
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "24px",
                      height: "24px",
                      cursor: "pointer"
                    }}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Panel */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <div style={{ marginBottom: "20px" }}>
            <button
              onClick={() => setIsVideoCallOpen(true)}
              style={{ 
                padding: "12px 24px",
                backgroundColor: "#FFD700",
                color: "black",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                marginRight: "10px",
                fontWeight: "bold"
              }}
            >
              Video Call
            </button>
            <button
              onClick={() => setIsGroupChatOpen(true)}
              style={{ 
                padding: "12px 24px",
                backgroundColor: "#FFD700",
                color: "black",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Group Chat
            </button>

          </div>

          {/* Leave Room Button - Now positioned at bottom right */}
          <div style={{ marginTop: "auto" }}>
            <button
              onClick={() => setShowConfirmLeave(true)}
              style={{ 
                padding: "15px 30px",
                backgroundColor: "#FF0000",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold"
              }}
            >
              Leave Room
            </button>
          </div>
        </div>
      </div>

      {/* Popups */}
      {showConfirmLeave && (
        <div style={{ 
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 30
        }}>
          <div style={{ 
            backgroundColor: "black",
            border: "2px solid #FFD700",
            borderRadius: "10px",
            padding: "30px",
            textAlign: "center",
            maxWidth: "400px"
          }}>
            <h2 style={{ color: "#FFD700", marginBottom: "20px" }}>Leave Room?</h2>
            <p style={{ color: "white", marginBottom: "30px" }}>Your time spent will be recorded.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
              <button
                onClick={leaveRoom}
                style={{ 
                  padding: "12px 24px",
                  backgroundColor: "#FF0000",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
              >
                Yes, Leave
              </button>
              <button
                onClick={() => setShowConfirmLeave(false)}
                style={{ 
                  padding: "12px 24px",
                  backgroundColor: "#FFD700",
                  color: "black",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
              >
                Stay
              </button>
            </div>
          </div>
        </div>
      )}

      {isVideoCallOpen && (
        <div style={{ 
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 20
        }}>
          <div style={{ 
            width: "90%",
            height: "90%",
            backgroundColor: "black",
            border: "2px solid #FFD700",
            borderRadius: "10px",
            padding: "20px",
            position: "relative"
          }}>
            <h2 style={{ color: "#FFD700" }}>Video Call</h2>
            <iframe src="/videocall" style={{ width: "100%", height: "calc(100% - 60px)", border: "none" }}></iframe>
            <button 
              onClick={() => setIsVideoCallOpen(false)}
              style={{ 
                position: "absolute",
                top: "20px",
                right: "20px",
                padding: "8px 16px",
                backgroundColor: "#FF0000",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isGroupChatOpen && (
        <div style={{ 
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 20
        }}>
          <div style={{ 
            width: "90%",
            height: "90%",
            backgroundColor: "black",
            border: "2px solid #FFD700",
            borderRadius: "10px",
            padding: "20px",
            position: "relative"
          }}>
            <h2 style={{ color: "#FFD700" }}>Group Chat</h2>
            <iframe src="/groupchat" style={{ width: "100%", height: "calc(100% - 60px)", border: "none" }}></iframe>
            <button 
              onClick={() => setIsGroupChatOpen(false)}
              style={{ 
                position: "absolute",
                top: "20px",
                right: "20px",
                padding: "8px 16px",
                backgroundColor: "#FF0000",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VirtualRoom;

