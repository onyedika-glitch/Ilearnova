import React from 'react';

const cardStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  padding: '20px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  width: '300px',
  margin: '10px',
};

const iconStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
};

const OverviewSection = () => {
  const cardData = [
    {
      value: '09',
      title: 'Courses Completed',
      icon: '✅',
      color: '#6FCF97',
    },
    {
      value: '09',
      title: 'Courses Progress',
      icon: '📚',
      color: '#F2C94C',
    },
    {
      value: '03',
      title: 'Pending Assignment',
      icon: '📕',
      color: '#EB5757',
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {cardData.map((card, index) => (
        <OverviewCard
          key={index}
          value={card.value}
          title={card.title}
          icon={card.icon}
          color={card.color}
        />
      ))}
    </div>
  );
};

export default OverviewSection;
