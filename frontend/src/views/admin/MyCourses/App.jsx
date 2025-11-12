const App = () => {
  return (
    <div className="course-container">
      {courseData.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

export default App;