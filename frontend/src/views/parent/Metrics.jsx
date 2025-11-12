import React from "react";

const Card = ({ title, value, change, changeType, currency, percentage }) => {
  const isPositive = changeType === "up";

  return (
    <div className="w-64 rounded-lg bg-white p-4 text-center shadow-md">
      <h4 className="mb-2 text-lg font-medium text-gray-700">{title}</h4>
      <p className="text-black text-2xl font-bold">
        {currency && <span>{currency}</span>}
        {value}
      </p>
      <div className="mt-2 flex items-center justify-center">
        <span
          className={`text-xl font-bold ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? "▲" : "▼"}
        </span>
        <span
          className={`ml-2 ${
            isPositive ? "text-green-500" : "text-red-500"
          } font-medium`}
        >
          {Math.abs(change)}%{" "}
          {percentage && <span className="text-gray-500">vs last month</span>}
        </span>
      </div>
    </div>
  );
};

// Example usage with dummy data
const Metrics = () => {
  const data = [
    {
      title: "Total Number of Students",
      value: "50,000",
      change: 40,
      changeType: "up",
      percentage: true,
    },
    {
      title: "Total Courses Completed",
      value: "1,500",
      change: -10,
      changeType: "down",
      percentage: true,
    },
    {
      title: "Total Transactions",
      value: "15,000,000",
      change: 20,
      changeType: "up",
      currency: "₦",
      percentage: true,
    },
    {
      title: "Attendance Percentage",
      value: "90%",
      change: -25,
      changeType: "down",
      percentage: true,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default Metrics;
