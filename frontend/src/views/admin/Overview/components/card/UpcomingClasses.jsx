import React from 'react';

const classes = [
  { name: "Chemistry Practical", date: "October 22nd - 10:00 am" },
  { name: "Biology Class", date: "October 24th - 12:00 Noon" },
  { name: "Mathematics Class", date: "October 28th - 3:00 pm" },
];

const UpcomingClasses = () => {
  return (
    <div className="p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4">Upcoming Classes</h2>
      {classes.map((cls) => (
        <div key={cls.name} className="mb-4">
          <p className="font-semibold">{cls.name}</p>
          <p>{cls.date}</p>
        </div>
      ))}
    </div>
  );
};

export default UpcomingClasses;
