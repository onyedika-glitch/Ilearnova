import React from 'react';

const courses = [
  {
    title: 'Introduction to Physics',
    teacher: 'Teacher A',
    lessons: 30,
    time: '3 hrs 15mins',
    progress: 80,
    startDate: '01/01/2004'
  },
  {
    title: 'Introduction to Chemistry',
    teacher: 'Teacher B',
    lessons: 20,
    time: '3 hrs 10mins',
    progress: 60,
    startDate: '01/01/2004'
  },
  {
    title: 'Use Of English',
    teacher: 'Teacher C',
    lessons: 10,
    time: '2 hrs 45mins',
    progress: 80,
    startDate: '01/01/2004'
  },
  {
    title: 'Mathematics: Simultaneous Equation',
    teacher: 'Teacher A',
    lessons: 15,
    time: '2 hrs 30mins',
    progress: 85,
    startDate: '01/01/2004'
  },
  {
    title: 'Advance Mathematics: DY/DX Solutions',
    teacher: 'Teacher B',
    lessons: 25,
    time: '3 hrs 45mins',
    progress: 70,
    startDate: '01/01/2004'
  },
  {
    title: 'Biology: Reproduction',
    teacher: 'Teacher C',
    lessons: 30,
    time: '3 hrs 15mins',
    progress: 80,
    startDate: '01/01/2004'
  }
];

const CourseCard = ({ title, teacher, lessons, time, progress, startDate }) => {
  return (
    <div className="course-card">
      <div className="course-thumbnail">
        <button className="play-button">▶️</button>
      </div>
      <h3>{title}</h3>
      <p><strong>{teacher}</strong></p>
      <p>{lessons} Lessons - {time}</p>
      <p>Date Started: {startDate}</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <p>{progress}%</p>
    </div>
  );
};

const CourseList = () => {
  return (
    <div className="course-list">
      {courses.slice(0, 6).map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  );
};

export default CourseCard;
