import React, { useState } from 'react';
import TimetableCard from 'components/card/TimetableCard';
import AddClassCard from 'components/card/AddClassCard';

const initialData = [
  { id: 1, day: 'Monday', time: '08:30 am', subject: 'Mathematics', teacher: 'Mrs. Samson Ojo' },
  { id: 2, day: 'Monday', time: '09:00 am', subject: 'Social Studies', teacher: 'Ms. Frederick' },
  { id: 3, day: 'Tuesday', time: '08:30 am', subject: 'English Language', teacher: 'Mr. Bright' },
  { id: 4, day: 'Wednesday', time: '09:30 am', subject: 'Civic Education', teacher: 'Ms. Peters' }
];

const DynamicTimetable = () => {
  const [timetable, setTimetable] = useState(initialData);
  const [grade, setGrade] = useState('Grade 2');

  const handleAddClass = (day) => {
    const newClass = {
      id: timetable.length + 1,
      day: day,
      time: '09:00 am',
      subject: 'New Class',
      teacher: 'TBD'
    };
    setTimetable([...timetable, newClass]);
  };

  return (
    <div className="container mx-auto p-4">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Timetable Management</h1>
    </div>
    <div className="flex justify-between items-center mb-6">
      <select
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        className="border p-2 rounded"
      >
        <option>Grade 1</option>
        <option>Grade 2</option>
        <option>Grade 3</option>
      </select>
      <div className="flex gap-4">
        <button className="border p-2 rounded flex items-center">
          &#x1F50D; Filter
        </button>
        <button className="bg-blue-500 text-white p-2 rounded">
          + Create Timetable
        </button>
      </div>
    </div>
    <div className="grid grid-cols-5 gap-4">
      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
        <div key={day}>
          <h2 className="text-xl font-bold mb-2">{day}</h2>
          {timetable
            .filter((item) => item.day === day)
            .map((item) => (
              <TimetableCard key={item.id} item={item} />
            ))}
          <AddClassCard onAdd={() => handleAddClass(day)} />
        </div>
      ))}
    </div>
  </div>
);
};

export default DynamicTimetable;