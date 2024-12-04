import React, { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const PerformanceChart = ({ dailyStudyHours }) => {
  const chartData = useMemo(() => {
    // Convert the date-based data to day-based data
    const dateEntries = Object.entries(dailyStudyHours || {});
    const sortedEntries = dateEntries.sort(([dateA], [dateB]) => dateA.localeCompare(dateB));
    
    const data = sortedEntries.map(([date, hours]) => ({
      date,
      day: new Date(date).toLocaleDateString('en-US', { weekday: 'long' }),
      hours: Number(hours) || 0
    }));

    return {
      labels: data.map(item => item.day),
      datasets: [
        {
          label: 'Study Hours',
          data: data.map(item => item.hours),
          backgroundColor: '#F6CA30',
          borderRadius: 10,
        },
      ],
    };
  }, [dailyStudyHours]);
  
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          callback: (value) => `${value} hrs`
        }
      },
      x: {
        barThickness: 10,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          title: (tooltipItems) => {
            const dataIndex = tooltipItems[0].dataIndex;
            const date = Object.keys(dailyStudyHours)[dataIndex];
            return new Date(date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });
          },
          label: (context) => {
            return `${context.formattedValue} hours`;
          }
        }
      }
    }
  };

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default React.memo(PerformanceChart);

