import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const initialAttendance = [
  { id: 1, name: 'Priscilla Daniel', status: 'Present', date: '19/11/2024' },
  { id: 2, name: 'Priscilla Daniel', status: 'Absent', date: '19/11/2024' },
  { id: 3, name: 'Priscilla Daniel', status: 'Absent', date: '19/11/2024' },
  { id: 4, name: 'Priscilla Daniel', status: 'Absent', date: '19/11/2024' },
  { id: 5, name: 'Priscilla Daniel', status: 'Present', date: '19/11/2024' },
  { id: 6, name: 'Priscilla Daniel', status: 'Present', date: '19/11/2024' },
  { id: 7, name: 'Priscilla Daniel', status: 'Present', date: '19/11/2024' },
  { id: 8, name: 'Priscilla Daniel', status: 'Late', date: '19/11/2024' },
];

const AttendanceTable = () => {
  const [attendance, setAttendance] = useState(initialAttendance);

  const markAll = (status) => {
    const updatedAttendance = attendance.map((record) => ({
      ...record,
      status,
    }));
    setAttendance(updatedAttendance);
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

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Attendance</h1>
      <div className="flex justify-between mb-4">
        <div>
          <button className="border px-4 py-2 mr-2">Class A</button>
          <button className="border px-4 py-2">Filter</button>
        </div>
        <div>
          <button 
            className="bg-red-500 text-white px-4 py-2 mr-2" 
            onClick={() => markAll('Absent')}>Mark all absent
          </button>
          <button 
            className="bg-green-500 text-white px-4 py-2" 
            onClick={() => markAll('Present')}>Mark all present
          </button>
        </div>
      </div>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-4 text-left">Student Name</th>
            <th className="border p-4">Status</th>
            <th className="border p-4">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record) => (
            <tr key={record.id}>
              <td className="border p-4">{record.name}</td>
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
    </div>
  );
};

const Home = () => <h1 className="text-center p-8 text-3xl">Welcome to Attendance System</h1>;

const App = () => {
  return (
    <Router>
      <nav className="p-4 bg-gray-100">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/attendance">Attendance</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attendance" element={<AttendanceTable />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default AttendanceTable;