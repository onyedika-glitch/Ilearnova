import React from 'react';

const UpcomingClassesSection = () => {
  const upcomingClasses = [
    {
      title: 'Chemistry Practical',
      date: 'October 22nd - 26th',
      time: '10:00 am',
    },
    {
      title: 'Biology Class',
      date: 'October 24th',
      time: '12:00 Noon',
    },
    {
      title: 'Mathematics Class',
      date: 'October 26th',
      time: '03:00 pm',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Upcoming Classes</h2>
      {upcomingClasses.map((classItem, index) => (
        <UpcomingClassCard
          key={index}
          title={classItem.title}
          date={classItem.date}
          time={classItem.time}
        />
      ))}
    </div>
  );
};

export default UpcomingClassesSection;
