import React from 'react';

const alerts = [
  { id: 1, text: "John Doe's Math score dropped to 40%", action: "Dismiss" },
  { id: 2, text: "John Doe's Math score dropped to 40%", action: "Dismiss" },
  { id: 3, text: "Science scores are trending downward.", action: "View Details" },
  { id: 4, text: "Science scores are trending downward.", action: "View Details" },
];

const PerformanceAlerts = () => {
  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Performance Alert</h2>
      {alerts.map((alert) => (
        <div key={alert.id} className="p-4 mb-4 border-b">
          <p>{alert.text}</p>
          <button className="bg-blue-500 text-white py-1 px-3 rounded mt-2">
            {alert.action}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PerformanceAlerts;