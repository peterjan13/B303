import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";

export default function EditCourse({ course_id, fetchCourses }) {
  const [courseId, setCourseId] = useState("");

  // Form states
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  // For modal activation
  const [showEditModal, setShowEditModal] = useState(false);

  const openEditModal = (courseId) => {
    fetch(`${process.env.REACT_APP_API_URL}/api/courses/${courseId}`)
      .then((response) => response.json())
      .then((result) => {
        // Pre-populate the form input fields with data from API
        setCourseId(result._id);
        setName(result.name);
        setDescription(result.description);
        setPrice(result.price);
      });

    // Then, open modal
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setName("");
    setDescription("");
    setPrice("");
  };

  const editCourse = (event, courseId) => {
    event.preventDefault();

    fetch(`${process.env.REACT_APP_API_URL}/api/courses/${courseId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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
            title: "Course Updated!",
            text: "Course successfully updated.",
            icon: "success",
          });

          fetchCourses();

          closeEditModal();
        } else {
          Swal.fire({
            title: "Something went wrong",
            text: "Please try again.",
            icon: "error",
          });

          fetchCourses();

          closeEditModal();
        }
      });
  };

  return (
    <>
      <Button
        variant="primary"
        size="sm"
        onClick={() => openEditModal(course_id)}
      >
        Edit
      </Button>

      {/* Edit modal */}
      <Modal show={showEditModal} onHide={closeEditModal}>
        <form onSubmit={(event) => editCourse(event, courseId)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="courseName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="courseDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="coursePrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeEditModal}>
              Close
            </Button>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
