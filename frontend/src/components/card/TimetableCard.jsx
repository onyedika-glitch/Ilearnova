import React from 'react';

const TimetableCard = ({ item }) => {
  return (
    <div className="p-4 border rounded shadow mb-2">
      <h3 className="text-lg font-semibold">{item.subject}</h3>
      <p>{item.teacher}</p>
      <p>{item.time}</p>
    </div>
  );
};

export default TimetableCard;
