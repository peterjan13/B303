import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";

export default function UserView({ coursesData }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Filters out the courses to only be courses that are active
    const active_courses = coursesData.map((course) => {
      if (course.isActive == true) {
        return <CourseCard course={course} key={course._id} />;
      } else {
        return null;
      }
    });

    // Set the courses state to the active courses array
    setCourses(active_courses);
  }, [coursesData]);
  return (
    <>
      <h1>Courses</h1>
      {courses}
    </>
  );
}
