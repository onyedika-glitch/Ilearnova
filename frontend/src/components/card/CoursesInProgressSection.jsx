import React from 'react';

const cardStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  padding: '20px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  width: '600px',
  margin: '10px 0',
};

const progressBarStyle = {
  height: '8px',
  borderRadius: '4px',
  backgroundColor: '#e0e0e0',
  marginTop: '8px',
  position: 'relative',
};

const progressStyle = (progress) => ({
  height: '100%',
  width: `${progress}%`,
  borderRadius: '4px',
  backgroundColor: '#6FCF97',
});

const playButtonStyle = {
  backgroundColor: '#2D9CDB',
  color: 'white',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  cursor: 'pointer',
};

const CoursesInProgressSection = () => {
  const cardData = [
    {
      title: 'What is Biology?',
      lessons: '13',
      time: '3 hrs 13 mins',
      progress: 80,
      image: 'https://via.placeholder.com/60',
    },
    {
      title: 'Introduction to Physics',
      lessons: '13',
      time: '3 hrs 13 mins',
      progress: 60,
      image: 'https://via.placeholder.com/60',
    },
    {
      title: 'Introduction to Chemistry',
      lessons: '13',
      time: '3 hrs 13 mins',
      progress: 90,
      image: 'https://via.placeholder.com/60',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Courses In Progress</h2>
      {cardData.map((card, index) => (
        <CourseInProgressCard
          key={index}
          title={card.title}
          lessons={card.lessons}
          time={card.time}
          progress={card.progress}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default CoursesInProgressSection;

