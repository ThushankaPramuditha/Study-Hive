import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const PerformanceChart = () => {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Hours',
        data: [8, 4, 3, 7, 5, 2, 9],
        backgroundColor: 'rgba(255, 205, 86, 0.8)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        width: 1,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Bar data={data} options={options} />;
};

export default PerformanceChart;
