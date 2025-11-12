import React, { useState } from 'react';

const CreateTimetableCard = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const handleDayChange = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day]
    );
  };

  return (
    <div className="p-6 border rounded-lg shadow-lg bg-white max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Timetable</h2>
      
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Select Day</label>
        <div className="flex gap-4">
          {days.map((day) => (
            <label key={day} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={day}
                checked={selectedDays.includes(day)}
                onChange={() => handleDayChange(day)}
              />
              {day}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Select Subject</label>
        <select className="w-full p-2 border rounded">
          <option>Mathematics</option>
          <option>Science</option>
          <option>History</option>
          <option>English</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Select Teacher</label>
        <select className="w-full p-2 border rounded">
          <option>Mr. Smith</option>
          <option>Mrs. Johnson</option>
          <option>Ms. Lee</option>
          <option>Mr. Brown</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-lg font-semibold mb-2">Start time</label>
          <select className="w-full p-2 border rounded">
            <option>08:00 AM</option>
            <option>09:00 AM</option>
            <option>10:00 AM</option>
          </select>
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">End Time</label>
          <select className="w-full p-2 border rounded">
            <option>09:00 AM</option>
            <option>10:00 AM</option>
            <option>11:00 AM</option>
          </select>
        </div>
      </div>

      <button className="bg-blue-500 text-white w-full p-3 rounded text-lg">
        Save
      </button>
    </div>
  );
};

export default CreateTimetableCard;
