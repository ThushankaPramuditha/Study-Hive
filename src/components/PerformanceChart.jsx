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
        backgroundColor: '#F6CA30',
        borderRadius: 10, // Ensure borderRadius is a number
      },
    ],
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        barThickness: 10, // Set a fixed width for the bars
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Bar data={data} options={options} />;
};

export default PerformanceChart;
