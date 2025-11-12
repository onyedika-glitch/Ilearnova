import React from 'react';

const NotificationCard = ({ title, description, buttonLabel }) => {
  const notificationStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px 0',
    backgroundColor: '#F5F7FA',
    textAlign: 'left',
    width: '500px',
  };

  const buttonStyle = {
    backgroundColor: '#3D5AFE',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  return (
    <div style={notificationStyle}>
      <h4>{title}</h4>
      <p>{description}</p>
      <button style={buttonStyle}>{buttonLabel}</button>
    </div>
  );
};

const NotificationPanel = () => {
  const notifications = [
    {
      title: 'Assignment Due Soon',
      description: "Your Math assignment on 'Linear Equations' is due tomorrow. Don't forget to submit it!",
      buttonLabel: 'View Assignment',
    },
    {
      title: 'New Lesson Available!',
      description: "A new lesson 'Fractions' has been added to your Math course. Check it out now!",
      buttonLabel: 'Go to course',
    },
    {
      title: 'Grade Alert!',
      description: 'Your latest Science quiz score is 85%. Great job! Review feedback to improve further.',
      buttonLabel: 'View Grades',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Notification</h2>
      {notifications.map((item, index) => (
        <NotificationCard
          key={index}
          title={item.title}
          description={item.description}
          buttonLabel={item.buttonLabel}
        />
      ))}
    </div>
  );
};

export default NotificationPanel;

