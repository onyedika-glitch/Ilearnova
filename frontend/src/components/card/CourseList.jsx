const CourseList = () => {
    return (
      <div className="course-list">
        {courses.slice(0, 6).map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    );
  };
  
    export default CourseList;