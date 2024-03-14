import { useState } from "react";
import Course from "../Course/Course";
import { useEffect } from "react";

const Courses = ({handleCourseAdd}) => {

    const [courses, setCourse] = useState([]);

    useEffect(() => {
        fetch('courses.json')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])


  return (
      <div className="grid grid-cols-3 gap-4">
          {
              courses.map(course => <Course
                  key={course.id}
                  course={course}
                handleCourseAdd={handleCourseAdd}>
              </Course>)
          }
    </div>
  );
};

export default Courses;
