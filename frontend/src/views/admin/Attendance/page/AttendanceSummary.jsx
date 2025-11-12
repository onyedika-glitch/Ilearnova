import React from 'react';
import ReactDOM from 'react-dom/client';

const studentData = {
  name: 'Priscilla Daniel',
  id: 'learnerStu001',
  grade: 'Grade 6',
  profileImage: 'path/to/image.jpg', // Add actual path to profile image
  attendanceRate: '80%',
  summary: {
    present: 85,
    absent: 10,
    late: 5,
  },
  attendanceRecords: [
    { id: 1, subject: 'Mathematics', status: 'Present', date: '19/11/2024' },
    { id: 2, subject: 'Biology', status: 'Absent', date: '19/11/2024' },
    { id: 3, subject: 'English', status: 'Absent', date: '19/11/2024' },
    { id: 4, subject: 'Physics', status: 'Absent', date: '19/11/2024' },
    { id: 5, subject: 'Chemistry', status: 'Present', date: '19/11/2024' },
    { id: 6, subject: 'Civic Education', status: 'Present', date: '19/11/2024' },
    { id: 7, subject: 'Physical Health Education', status: 'Present', date: '19/11/2024' },
    { id: 8, subject: 'Yoruba', status: 'Late', date: '19/11/2024' },
  ],
};

const getStatusClass = (status) => {
  switch (status) {
    case 'Present':
      return 'bg-green-100 text-green-600';
    case 'Absent':
      return 'bg-red-100 text-red-600';
    case 'Late':
      return 'bg-yellow-100 text-yellow-600';
    default:
      return '';
  }
};

const ProfileSection = () => {
  return (
    <div className="profile-card text-center p-6">
      <img src={studentData.profileImage} alt="Profile" className="mx-auto rounded-full w-24 h-24 mb-4" />
      <h2 className="text-xl font-semibold">{studentData.name}</h2>
      <p>{studentData.id}</p>
      <p>{studentData.grade}</p>
    </div>
  );
};

const AttendanceSummary = () => {
  return (
    <div className="flex justify-around p-4 bg-gray-100 rounded-lg mb-6">
      <div className="text-green-600">Present Days: {studentData.summary.present} days</div>
      <div className="text-red-600">Absent Days: {studentData.summary.absent} days</div>
      <div className="text-yellow-600">Late Days: {studentData.summary.late} days</div>
    </div>
  );
};

const AttendanceTable = () => {
  return (
    <table className="w-full border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-4 text-left">Subject</th>
          <th className="border p-4">Status</th>
          <th className="border p-4">Due Date</th>
        </tr>
      </thead>
      <tbody>
        {studentData.attendanceRecords.map((record) => (
          <tr key={record.id}>
            <td className="border p-4">{record.subject}</td>
            <td className="border p-4">
              <span className={`px-3 py-1 rounded-full ${getStatusClass(record.status)}`}>
                {record.status}
              </span>
            </td>
            <td className="border p-4">{record.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  return (
    <div className="container mx-auto p-8">
      <ProfileSection />
      <h1 className="text-2xl font-bold mb-4">Total Attendance Rate: {studentData.attendanceRate}</h1>
      <AttendanceSummary />
      <div className="flex justify-between mb-4">
        <button className="border px-4 py-2">Filter</button>
        <button className="border px-4 py-2">Send Notification</button>
        <button className="bg-blue-500 text-white px-4 py-2">Download</button>
      </div>
      <AttendanceTable />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default AttendanceSummary;