import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import 'views/admin/Overview/ProgressChart.css';

const ProgressChart = ({ data, completedCourses, totalCourses, weeklyGoal, currentProgress }) => {
  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Learning Progress',
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderRadius: 5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const progressPercentage = Math.round((completedCourses / totalCourses) * 100);
  const circularProgress = {
    background: `conic-gradient(#001F3F ${progressPercentage}%, #f0f0f0 ${progressPercentage}%)`,
  };

  return (
    <div className="progress-container">
      <div className="circular-progress" style={circularProgress}>
        <div className="inner-circle">
          {completedCourses}/{totalCourses}
          <p>Courses</p>
        </div>
      </div>
      <div className="chart-section">
        <h3>Your weekly learning goal</h3>
        <Bar data={barData} options={options} />
        <p>
          {currentProgress}/{weeklyGoal}mins
          <span className="progress-change"> -40% from previous week</span>
        </p>
      </div>
    </div>
  );
};

export default ProgressChart;
