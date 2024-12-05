import React, { useState, useEffect } from "react";
import backgroundvideo from '../assets/images/backgroundvideo.mp4';

const SoloStudyRoom = () => {
  const [time, setTime] = useState(0);
  const [isStudying, setIsStudying] = useState(false);
  const [sessionGoals, setSessionGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");
  const [quote, setQuote] = useState("");
  const [showConfirmLeave, setShowConfirmLeave] = useState(false);
  const [showConfirmLeaveRoom, setShowConfirmLeaveRoom] = useState(false);
  const [studySessions, setStudySessions] = useState([]);
  const [showStats, setShowStats] = useState(false);

  const motivationalQuotes = [
    "However difficult life may seem, there is always something you can do and succeed at. - Stephen Hawking",
    "The secret of getting ahead is getting started. - Mark Twain",
    "Your limitation—it's only your imagination.",
    "Dream it. Believe it. Build it.",
  ];

  useEffect(() => {
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    setQuote(randomQuote);

    const savedSessions = JSON.parse(localStorage.getItem('studySessions')) || [];
    setStudySessions(savedSessions);
  }, []);

  useEffect(() => {
    let timer;
    if (isStudying) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isStudying]);

  const startStudySession = () => {
    setIsStudying(true);
    setTime(0);
  };

  const endStudySession = () => {
    setIsStudying(false);
    const newSession = { duration: time, goals: sessionGoals, date: new Date().toISOString() };
    const updatedSessions = [...studySessions, newSession];
    setStudySessions(updatedSessions);
    localStorage.setItem('studySessions', JSON.stringify(updatedSessions));
    setSessionGoals([]);
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

  const formatTime = (seconds) => {
    return new Date(seconds * 1000).toISOString().substr(11, 8);
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

  return (
    <div className="relative h-screen overflow-hidden">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src={backgroundvideo} type="video/mp4" />
      </video>

      <div className="relative inset-0 bg-black/80 z-10"></div>

      <div className="relative z-20 flex flex-col h-full text-white">
        {/* Header Section */}
        <div className="bg-black bg-opacity-50 p-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <p>Study Time: {formatTime(time)}</p>
          </div>
          <h1 className="text-3xl font-bold text-yellow-400">Solo Study Room</h1>
          <div className="max-w-md text-right text-yellow-400 italic">
            {quote}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow flex p-4 overflow-auto">
          {/* Left Panel */}
          <div className="w-80 mr-4 flex flex-col">
            <div className="bg-black bg-opacity-70 p-4 rounded-lg border border-yellow-400 mb-4">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Session Goals</h3>
              <div className="mb-4">
                <input
                  type="text"
                  value={newGoal}
                  onChange={(e) => setNewGoal(e.target.value)}
                  placeholder="Add a new goal"
                  className="w-full p-2 bg-black bg-opacity-50 border border-yellow-400 rounded text-white mb-2"
                />
                <button 
                  onClick={handleAddGoal}
                  className="w-full p-2 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-500"
                >
                  Add Goal
                </button>
              </div>
              <ul className="space-y-2">
                {sessionGoals.map((goal, index) => (
                  <li key={index} className="flex justify-between items-center p-2 border-b border-yellow-400 border-opacity-20">
                    <span>{goal}</span>
                    <button 
                      onClick={() => handleRemoveGoal(index)}
                      className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              {!isStudying ? (
                <button
                  onClick={startStudySession}
                  className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-bold hover:bg-green-600"
                >
                  Start Studying
                </button>
              ) : (
                <button
                  onClick={() => setShowConfirmLeave(true)}
                  className="px-6 py-3 bg-red-500 text-white rounded-lg text-lg font-bold hover:bg-red-600"
                >
                  End Session
                </button>
              )}

        <div style={{ marginTop: "auto" }}>
                    <button
                      onClick={() => setShowConfirmLeaveRoom(true)}
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

          {/* Right Panel */}
          <div className="flex-grow flex flex-col items-end">
            <button
              onClick={() => setShowStats(!showStats)}
              className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-bold mb-4 hover:bg-yellow-500"
            >
              {showStats ? "Hide Stats" : "Show Stats"}
            </button>

            {showStats && (
              <div className="w-full bg-black bg-opacity-70 p-4 rounded-lg border border-yellow-400 mb-4">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Study Statistics</h3>
                <p>Total Sessions: {studySessions.length}</p>
                <p>Total Study Time: {formatTime(studySessions.reduce((acc, session) => acc + session.duration, 0))}</p>
                <h4 className="text-lg font-bold text-yellow-400 mt-4 mb-2">Recent Sessions:</h4>
                <ul className="space-y-4">
                  {studySessions.slice(-5).reverse().map((session, index) => (
                    <li key={index} className="border-b border-yellow-400 border-opacity-20 pb-2">
                      <p>Date: {new Date(session.date).toLocaleDateString()}</p>
                      <p>Duration: {formatTime(session.duration)}</p>
                      <p>Goals: {session.goals.join(", ")}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Confirm Leave Popup */}
      {showConfirmLeave && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="bg-black border-2 border-yellow-400 rounded-lg p-8 max-w-md text-center">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">End Study Session?</h2>
            <p className="text-white mb-6">Your study time will be recorded.</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => {
                  endStudySession();
                  setShowConfirmLeave(false);
                }}
                className="px-6 py-2 bg-red-500 text-white rounded font-bold hover:bg-red-600"
              >
                Yes, End Session
              </button>
              <button
                onClick={() => setShowConfirmLeave(false)}
                className="px-6 py-2 bg-yellow-400 text-black rounded font-bold hover:bg-yellow-500"
              >
                Continue Studying
              </button>
            </div>
          </div>
        </div>
      )}

{showConfirmLeaveRoom && (
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
    </div>
  );
};

export default SoloStudyRoom;

