import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

export default function ArchiveCourse({ course_id, fetchCourses, isActive }) {
  const archiveCourse = (courseId) => {
    fetch(`${process.env.REACT_APP_API_URL}/api/courses/${courseId}/archive`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          Swal.fire({
            title: "Course archived!",
            text: "Course has been archived successfully",
            icon: "success",
          });

          fetchCourses();
        } else {
          Swal.fire({
            title: "Something went wrong",
            text: "Please try again.",
            icon: "error",
          });

          fetchCourses();
        }
      });
  };

  const activateCourse = (courseId) => {
    fetch(`${process.env.REACT_APP_API_URL}/api/courses/${courseId}/activate`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          Swal.fire({
            title: "Course Activated!",
            text: "Course has been successfully activated.",
            icon: "success",
          });

          fetchCourses();
        } else {
          Swal.fire({
            title: "Something went wrong",
            text: "Please try again.",
            icon: "error",
          });

          fetchCourses();
        }
      });
  };

  return (
    <>
      {isActive ? (
        <Button
          variant="warning"
          size="sm"
          onClick={() => archiveCourse(course_id)}
        >
          Archive
        </Button>
      ) : (
        <Button
          variant="success"
          size="sm"
          onClick={() => activateCourse(course_id)}
        >
          Activate
        </Button>
      )}
    </>
  );
}
