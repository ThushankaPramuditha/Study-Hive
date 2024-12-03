// import React, { useState } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import '../Reports.css';

// const data = [
//   { name: 'Mon', users: 50, studyGroups: 10, communities: 5 },
//   { name: 'Tue', users: 50, studyGroups: 20, communities: 10 },
//   { name: 'Wed', users: 150, studyGroups: 30, communities: 15 },
//   { name: 'Thu', users: 100, studyGroups: 40, communities: 20 },
//   { name: 'Fri', users: 200, studyGroups: 50, communities: 25 },
//   { name: 'Sat', users: 150, studyGroups: 60, communities: 30 },
//   { name: 'Sun', users: 150, studyGroups: 70, communities: 35 }
// ];

// const AdminReports = () => {
//   const [selectedMetric, setSelectedMetric] = useState('users');

//   const handleMetricClick = (metric) => {
//     setSelectedMetric(metric);
//   };

//   return (
//     <div className="reports-container">
//       <div className="reports-header">
//         <h2>Reports</h2>
//         <p>Last 7 Days</p>
//       </div>
//       <div className="reports-stats">
//         <div
//           className={`reports-stat ${selectedMetric === 'users' ? 'active' : ''}`}
//           onClick={() => handleMetricClick('users')}
//         >
//           <h3 style={{ color: selectedMetric === 'users' ? '#D4944C' : 'black' }}>890</h3>
//           <p>Users</p>
//         </div>
//         <div
//           className={`reports-stat ${selectedMetric === 'studyGroups' ? 'active' : ''}`}
//           onClick={() => handleMetricClick('studyGroups')}
//         >
//           <h3 style={{ color: selectedMetric === 'studyGroups' ? '#D4944C' : 'black' }}>35</h3>
//           <p>Study Groups</p>
//         </div>
//         <div
//           className={`reports-stat ${selectedMetric === 'communities' ? 'active' : ''}`}
//           onClick={() => handleMetricClick('communities')}
//         >
//           <h3 style={{ color: selectedMetric === 'communities' ? '#D4944C' : 'black' }}>12</h3>
//           <p>Communities</p>
//         </div>
//       </div>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Line type="monotone" dataKey={selectedMetric} stroke="#D4944C" strokeWidth={2} />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default AdminReports;


import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../Reports.css';

const AdminReports = () => {
  const [data, setData] = useState([]); // State to hold chart data
  const [selectedMetric, setSelectedMetric] = useState('users');
  const [loading, setLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/reports/7days'); 
        const result = await response.json();
  
        // Sort data by date in ascending order
        const sortedData = result.sort((a, b) => new Date(a.date) - new Date(b.date));
  
        // Get the current day index
        const todayIndex = new Date().getDay(); // 0 for Sunday, 6 for Saturday
  
        // Rotate the data array so today is the last entry
        const rotatedData = sortedData.slice(todayIndex + 1).concat(sortedData.slice(0, todayIndex + 1));
  
        setData(rotatedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching report data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  
  const handleMetricClick = (metric) => {
    setSelectedMetric(metric);
  };

  if (loading) {
    return <p>Loading reports...</p>; // Show a loading message while data is being fetched
  }

  // Calculate the total for each metric
  const totalUsers = data.reduce((sum, day) => sum + (day.users || 0), 0);
  const totalQuestions = data.reduce((sum, day) => sum + (day.questions || 0), 0);
  const totalStudyRooms = data.reduce((sum, day) => sum + (day.studyRooms || 0), 0);

  return (
    <div className="reports-container">
      <div className="reports-header">
        <h2>Reports</h2>
        <p>Last 7 Days (Including Today)</p>
      </div>
      <div className="reports-stats">
        <div
          className={`reports-stat ${selectedMetric === 'users' ? 'active' : ''}`}
          onClick={() => handleMetricClick('users')}
        >
          <h3 style={{ color: selectedMetric === 'users' ? '#D4944C' : 'black' }}>{totalUsers}</h3>
          <p>Users</p>
        </div>
        <div
          className={`reports-stat ${selectedMetric === 'questions' ? 'active' : ''}`}
          onClick={() => handleMetricClick('questions')}
        >
          <h3 style={{ color: selectedMetric === 'questions' ? '#D4944C' : 'black' }}>{totalQuestions}</h3>
          <p>Questions</p>
        </div>
        <div
          className={`reports-stat ${selectedMetric === 'studyRooms' ? 'active' : ''}`}
          onClick={() => handleMetricClick('studyRooms')}
        >
          <h3 style={{ color: selectedMetric === 'studyRooms' ? '#D4944C' : 'black' }}>{totalStudyRooms}</h3>
          <p>Study Rooms</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey={selectedMetric} stroke="#D4944C" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdminReports;