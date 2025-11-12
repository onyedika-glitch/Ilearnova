import React from 'react';

const RankingTable = ({ data }) => {
  return (
    <div className="ranking-table-container">
      <table className="ranking-table">
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Student</th>
            <th>Courses</th>
            <th>Read</th>
            <th>Projects</th>
            <th>Hours</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={index}>
              <td>{student.ranking}</td>
              <td>
                <div className="student-info">
                  <img
                    src={student.imageUrl}
                    alt={student.name}
                    className="student-avatar"
                  />
                  <div>
                    <p>{student.name}</p>
                    <span className="grade">{student.grade}</span>
                  </div>
                </div>
              </td>
              <td>{student.courses}</td>
              <td>{student.read}</td>
              <td>{student.projects}</td>
              <td>{student.hours}</td>
              <td>{student.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankingTable;
