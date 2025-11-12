import React from 'react';
import PerformanceChart from 'components/card/PerformanceChart';
import PerformanceAlerts from 'components/card/PerformanceAlerts';

const PerformanceInsight = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Attendance</h1>
        <div className="flex gap-4">
          <button className="border p-2 rounded">&#x1F50D; Filter</button>
          <button className="border p-2 rounded">📅 Date</button>
          <button className="bg-blue-500 text-white p-2 rounded">⬇️ Download</button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3">
          <PerformanceChart title="Score" />
          <PerformanceChart title="Percentage" />
        </div>
        <div className="col-span-1">
          <PerformanceAlerts />
        </div>
      </div>
    </div>
  );
};

export default PerformanceInsight;
