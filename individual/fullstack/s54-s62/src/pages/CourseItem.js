import { useState, useEffect, useContext } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useParams, Link, useNavigate } from "react-router-dom";
import UserContext from "../UserContext.js";
import Swal from "sweetalert2";

export default function CourseItem() {
  // The useParams hook will allow us to access the ID of the course from the URl parameters
  const { courseId } = useParams();

  // Initializing the global 'user' state
  const { user } = useContext(UserContext);

  // Initialize the useNavigate hook
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const enroll = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/api/users/enroll`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        courseId: id,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message == "Enrolled successfully!") {
          Swal.fire({
            title: "Successfully Enrolled!",
            text: result.message,
            icon: "success",
          });

          // To redirect back to the Courses page after enrolling
          navigate("/courses");
        } else {
          Swal.fire({
            title: "Something went wrong",
            text: "Please try again.",
            icon: "error",
          });
        }
      });
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/courses/${courseId}`)
      .then((response) => response.json())
      .then((result) => {
        setName(result.name);
        setDescription(result.description);
        setPrice(result.price);
      });
  }, [courseId]);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Card>
            <Card.Body className="text-center">
              <Card.Title>
                <h1>{name}</h1>
              </Card.Title>

              <Card.Subtitle>Description:</Card.Subtitle>
              <Card.Text>{description}</Card.Text>

              <Card.Subtitle>Price:</Card.Subtitle>
              <Card.Text>{price}</Card.Text>

              <Card.Subtitle>Class Schedule:</Card.Subtitle>
              <Card.Text>7:43AM - 6:06PM</Card.Text>

              {user.id !== null ? (
                <Button variant="primary" onClick={() => enroll(courseId)}>
                  Enroll
                </Button>
              ) : (
                <Link className="btn btn-danger btn-block" to="/login">
                  Log In to Enroll
                </Link>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
