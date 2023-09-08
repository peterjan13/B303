import CourseCard from "../components/CourseCard.js";
import { useEffect, useState, useContext } from "react";
import AdminView from "../components/AdminView.js";
import UserView from "../components/UserView.js";
import UserContext from "../UserContext.js";

export default function Courses() {
  const { user } = useContext(UserContext);
  const [courses, setCourses] = useState([]);

  const fetchCourses = () => {
    fetch(`${process.env.REACT_APP_API_URL}/api/courses/all`)
      .then((response) => response.json())
      .then((result) => {
        setCourses(result);
      });
  };

  // The useEffect hook will run everytime the Courses page loads, which will then retrieve all courses from the API and set it to their specific CourseCards.
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      {user.isAdmin == true ? (
        <AdminView coursesData={courses} fetchCourses={fetchCourses} />
      ) : (
        <>
          <UserView coursesData={courses} />
        </>
      )}
    </>
  );
}
