import React from 'react';
import chartImage from 'assets/img/chart/image1.png';
import chartImage2 from 'assets/img/chart/image.png';

const PerformanceChart = ({ title }) => {
  return (
    <div className="p-6 border rounded-lg shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="h-64 bg-gray-100 flex items-center justify-center">
      <img
          src={chartImage} 
          alt={`${title} Chart`} 
          className="max-h-full max-w-full object-contain"
        />
        <img
          src={chartImage2} 
          alt={`${title} Chart`} 
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </div>
  );
};

export default PerformanceChart;