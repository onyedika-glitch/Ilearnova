import React from 'react';

const OverviewCards = () => {
  const cards = [
    { id: 1, count: "09", label: "Courses Completed", icon: "✅" },
    { id: 2, count: "09", label: "Courses Progress", icon: "📚" },
    { id: 3, count: "03", label: "Pending Assignment", icon: "📄" },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      {cards.map((card) => (
        <div key={card.id} className="p-6 border rounded-lg shadow-lg bg-white flex items-center justify-between">
          <div>
            <h3 className="text-4xl font-bold">{card.count}</h3>
            <p className="text-lg">{card.label}</p>
          </div>
          <span className="text-4xl">{card.icon}</span>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;
