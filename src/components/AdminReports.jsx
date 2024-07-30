import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../Reports.css';

const data = [
  { name: 'Mon', users: 50, studyGroups: 10, communities: 5 },
  { name: 'Tue', users: 50, studyGroups: 20, communities: 10 },
  { name: 'Wed', users: 150, studyGroups: 30, communities: 15 },
  { name: 'Thu', users: 100, studyGroups: 40, communities: 20 },
  { name: 'Fri', users: 200, studyGroups: 50, communities: 25 },
  { name: 'Sat', users: 150, studyGroups: 60, communities: 30 },
  { name: 'Sun', users: 150, studyGroups: 70, communities: 35 }
];

const AdminReports = () => {
  const [selectedMetric, setSelectedMetric] = useState('users');

  const handleMetricClick = (metric) => {
    setSelectedMetric(metric);
  };

  return (
    <div className="reports-container">
      <div className="reports-header">
        <h2>Reports</h2>
        <p>Last 7 Days</p>
      </div>
      <div className="reports-stats">
        <div
          className={`reports-stat ${selectedMetric === 'users' ? 'active' : ''}`}
          onClick={() => handleMetricClick('users')}
        >
          <h3 style={{ color: selectedMetric === 'users' ? '#D4944C' : 'black' }}>890</h3>
          <p>Users</p>
        </div>
        <div
          className={`reports-stat ${selectedMetric === 'studyGroups' ? 'active' : ''}`}
          onClick={() => handleMetricClick('studyGroups')}
        >
          <h3 style={{ color: selectedMetric === 'studyGroups' ? '#D4944C' : 'black' }}>35</h3>
          <p>Study Groups</p>
        </div>
        <div
          className={`reports-stat ${selectedMetric === 'communities' ? 'active' : ''}`}
          onClick={() => handleMetricClick('communities')}
        >
          <h3 style={{ color: selectedMetric === 'communities' ? '#D4944C' : 'black' }}>12</h3>
          <p>Communities</p>
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
