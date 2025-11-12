import React from 'react';

const CoursesInProgress = () => {
  const courses = [
    { name: "What is Biology?", lessons: 13, time: "3hrs 30min", progress: "70%" },
    { name: "Introduction to Physics", lessons: 12, time: "2hrs 50min", progress: "80%" },
    { name: "Introduction to Chemistry", lessons: 11, time: "3hrs 10min", progress: "65%" },
  ];

  return (
    <div className="p-6 border rounded-lg shadow-lg bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Courses In Progress</h2>
        <a href="#" className="text-blue-500">View All</a>
      </div>
      {courses.map((course) => (
        <div key={course.name} className="mb-4">
          <p className="text-lg font-semibold">{course.name}</p>
          <p>{course.lessons} Lessons - {course.time}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: course.progress }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesInProgress;
