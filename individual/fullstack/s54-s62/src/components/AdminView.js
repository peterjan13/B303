import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import EditCourse from "./EditCourse";
import ArchiveCourse from "./ArchiveCourse";

export default function AdminView({ coursesData, fetchCourses }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const coursesArray = coursesData.map((course) => (
      <tr key={course._id}>
        <td>{course._id}</td>
        <td>{course.name}</td>
        <td>{course.description}</td>
        <td>{course.price}</td>
        <td>{course.isActive ? "Available" : "Unavailable"}</td>
        <td>
          <EditCourse course_id={course._id} fetchCourses={fetchCourses} />
        </td>
        <td>
          <ArchiveCourse
            course_id={course._id}
            fetchCourses={fetchCourses}
            isActive={course.isActive}
          />
        </td>
      </tr>
    ));
    setCourses(coursesArray);
  }, [coursesData]);

  return (
    <>
      <h1>Admin Dashboard</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{courses}</tbody>
      </Table>
    </>
  );
}
