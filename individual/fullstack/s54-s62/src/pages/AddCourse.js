import { useState, useEffect, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UserContext from "../UserContext.js";

export default function AddCourse() {
  // Initialization
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  // States
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  // Functions
  function createCourse(event) {
    // Prevents the default behavior of page reload when submitting a form
    event.preventDefault();

    let token = localStorage.getItem("token");

    // Fetch function to the course creation API
    fetch(`${process.env.REACT_APP_API_URL}/api/courses/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
        price: price,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          Swal.fire({
            title: "New Course Added",
            icon: "success",
          });

          // For clearing the form
          setName("");
          setDescription("");
          setPrice(0);

          // Redirect to /courses after creation of a new course
          navigate("/courses");
        } else {
          Swal.fire({
            title: "Something went wrong",
            text: "Course creation unsuccessful",
            icon: "error",
          });
        }
      });
  }

  return user.isAdmin == true ? (
    <>
      <h1 className="my-5 text-center">Add Course</h1>
      <Form onSubmit={(event) => createCourse(event)}>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            required
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Price"
            required
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="my-5">
          Submit
        </Button>
      </Form>
    </>
  ) : (
    <Navigate to="/courses" />
  );
}
