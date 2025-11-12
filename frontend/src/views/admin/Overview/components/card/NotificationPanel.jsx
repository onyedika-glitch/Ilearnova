import React from 'react';

const notifications = [
  { id: 1, message: "Assignment Due Soon", button: "View Assignment" },
  { id: 2, message: "New Lesson Available!", button: "Go to course" },
  { id: 3, message: "Grade Alert!", button: "View Grades" },
];

const NotificationPanel = () => {
  return (
    <div className="p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4">Notification</h2>
      {notifications.map((note) => (
        <div key={note.id} className="mb-4">
          <p>{note.message}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">{note.button}</button>
        </div>
      ))}
    </div>
  );
};

export default NotificationPanel;
