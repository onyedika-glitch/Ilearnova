import React from 'react';

const PerformanceChart = ({ title }) => {
  return (
    <div className="p-6 border rounded-lg shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="h-64 bg-gray-100 flex items-center justify-center">
        [Chart Placeholder for {title}]
      </div>
    </div>
  );
};

export default PerformanceChart;