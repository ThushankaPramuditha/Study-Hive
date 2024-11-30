import React, { useState, useEffect, useCallback } from 'react';
import PerformanceChart from './PerformanceChart';
import SideBarnNavbar from './SideBarnNavbar';
import { fetchUserRole } from "../api/fetchUserRole";

const StudyStats = () => {
  const [userId, setUserId] = useState(null);
  const [userStatus, setUserStatus] = useState(null);
  const [statistics, setStatistics] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const user = await fetchUserRole();
        if (user && user.id) {
          setUserId(user.id);
          setUserStatus(user.status);
        } else {
          console.error("Invalid user data received:", user);
        }
      } catch (error) {
        console.error("Error fetching user role:", error.message);
      }
    };

    fetchRole();
  }, []);

  const fetchData = useCallback(async () => {
    if (!userId) return; // Don't fetch if userId is not available yet

    try {
      setIsLoading(true);
      
      const [statsResponse, leaderboardResponse] = await Promise.all([
        fetch(`http://localhost:8090/api/statistics/user/${userId}`),
        fetch('http://localhost:8090/api/statistics/leaderboard')
      ]);

      if (!statsResponse.ok) {
        throw new Error(`Failed to fetch statistics: ${statsResponse.status}`);
      }
      if (!leaderboardResponse.ok) {
        throw new Error(`Failed to fetch leaderboard: ${leaderboardResponse.status}`);
      }

      const [statsData, leaderboardData] = await Promise.all([
        statsResponse.json(),
        leaderboardResponse.json()
      ]);

      if (!statsData || typeof statsData !== 'object') {
        throw new Error('Invalid statistics data received');
      }

      if (!Array.isArray(leaderboardData)) {
        throw new Error('Invalid leaderboard data received');
      }

      setStatistics(statsData);
      setLeaderboard(leaderboardData);
    } catch (err) {
      setError(err.message || 'An error occurred while fetching data');
    } finally {
      setIsLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      fetchData();
    }
  }, [userId, fetchData]);

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (error || !statistics) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        {error || 'Failed to load statistics'}
      </div>
    );
  }

  const badgeColors = {
    Nerd: 'bg-red-400',
    Performer: 'bg-yellow-400',
    Acrobat: 'bg-green-400',
    Newbie: 'bg-blue-400',
  };

  const top3 = Array.isArray(leaderboard) ? leaderboard.slice(0, 3) : [];
  const otherRanks = Array.isArray(leaderboard) ? leaderboard.slice(3) : [];

  return (
    <div className=''>
      <SideBarnNavbar />
      <div className="xl:flex mt-2 xl:ml-[263px] ml-[60px]">
        <div className="xl:w-[75%]">
          <div className="ml-10">
            <h1 className="text-4xl font-bold text-blue-900">Your Study Statistics</h1>
            
            <div className="grid xl:grid-cols-3 gap-6 mt-6 mr-10">
              <div className="flex items-center p-6 rounded-2xl shadow-md">
                <div className="flex items-center justify-center bg-yellow-100 rounded-full w-[60px] h-[60px] mr-6">
                  <i className="fas fa-clock text-2xl text-yellow-600"></i>
                </div>
                <div>
                  <p className="text-2xl font-bold">{statistics.totalStudyHours.toFixed(2)}+ hrs</p>
                  <p className="text-sm text-gray-500">Total Study Hours</p>
                </div>
              </div>

              <div className="flex items-center p-6 rounded-2xl shadow-md">
                <div className="flex items-center justify-center bg-blue-100 rounded-full w-[60px] h-[60px] mr-6">
                  <i className="fas fa-clock text-2xl text-blue-600"></i>
                </div>
                <div>
                  <p className="text-2xl font-bold">{statistics.averageStudyHours.toFixed(2)}+ hrs</p>
                  <p className="text-sm text-gray-500">Average Study Hours</p>
                </div>
              </div>

              <div className="flex items-center p-6 rounded-2xl shadow-md">
                <div className="flex items-center justify-center bg-green-100 rounded-full w-[60px] h-[60px] mr-6">
                  <i className="fas fa-trophy text-2xl text-green-600"></i>
                </div>
                <div>
                  <p className="text-2xl font-bold">{statistics.rank}</p>
                  <p className="text-sm text-gray-500">Rank</p>
                </div>
              </div>
            </div>
          </div>

          <div className="m-10 p-6 rounded-2xl shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-500">Performance</h2>
              <button className="text-gray-500 hover:text-gray-700">
                <span className="sr-only">More options</span>
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </div>
            <div style={{ height: '300px' }}>
              <PerformanceChart dailyStudyHours={statistics.dailyStudyHours} />
            </div>
          </div>
        </div>

        <div className="hidden xl:block border-l border-gray-200"></div>

        <div className="xl:w-[25%] px-6">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-6">Your Badges</h2>
            <div className="space-y-4">
              {statistics.badges.map((badge) => (
                <div key={badge.name} className="flex items-center w-full bg-gray-100 rounded-lg justify-between p-2">
                  <div className="flex items-center">
                    <div className="ml-3 mr-2">
                      <div className={`w-[50px] h-[50px] rounded-full ${badgeColors[badge.name]}`}></div>
                    </div>
                    <div className="flex flex-col ml-2">
                      <p className="text-lg font-semibold">{badge.name}</p>
                    </div>
                  </div>
                  <button 
                    className="mr-5 text-gray-400 hover:text-gray-600"
                    title={badge.description}
                  >
                    <i className="fas fa-info-circle"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Leaderboard</h2>
            <div className="flex flex-col mb-10">
              {top3.map((entry) => (
                <div key={entry.userId} className="flex flex-col items-center">
                  <div className="relative">
                    <div className={`flex justify-center items-center bg-black rounded-full
                      ${entry.rank === 1 ? 'w-[70px] h-[70px]' : 'w-[60px] h-[60px]'}
                      border-4 border-yellow-400`}
                    >
                      {entry.rank === 1 && (
                        <i className="fas fa-crown text-yellow-400 text-xl absolute -top-4"></i>
                      )}
                      <div className="absolute -bottom-2 flex justify-center items-center bg-yellow-400 rounded-full w-5 h-5">
                        <span className="text-xs text-white">{entry.rank}</span>
                      </div>
                    </div>
                  </div>
                  <p className="font-semibold mt-3">{entry.username}</p>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-stopwatch text-yellow-500"></i>
                    <span>{entry.totalHours} Hours</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex space-y-2">
              {otherRanks.map((entry) => (
                <div
                  key={entry.userId}
                  className="flex items-center w-full bg-gray-100 rounded-lg justify-between p-2"
                >
                  <div className="flex items-center">
                    <span className="ml-2 font-semibold">{entry.rank}</span>
                    <div className="ml-3 mr-2">
                      {/* Profile picture or placeholder */}
                      <div
                        className="w-[40px] h-[40px] rounded-full bg-black"
                        aria-label="User profile picture"
                      ></div>
                    </div>
                    <span className="ml-2">{entry.username}</span>
                  </div>
                  <span className="text-sm text-gray-500">{entry.totalHours} Hours</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyStats;

