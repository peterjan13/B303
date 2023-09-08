import { Row, Col } from "react-bootstrap";
import { useNavigate, Navigate } from "react-router-dom";
import UserContext from "../UserContext.js";
import { useState, useContext, useEffect } from "react";

export default function Profile() {
  const { user } = useContext(UserContext);

  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/users/details`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user.id,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (typeof result._id !== "undefined") {
          setDetails(result);
        }
      });
  }, []);

  return user.id === null ? (
    <Navigate to="/courses" />
  ) : (
    <Row>
      <Col className="p-5 bg-primary text-white">
        <h1 className="my-5">Your Profile</h1>
        <h2 className="mt-3">{`${details.firstName} ${details.lastName}`}</h2>
        <hr />
        <h4>Contact Information</h4>
        <ul>
          <li>Email: {details.email}</li>
          <li>Mobile No.: {details.mobileNo}</li>
        </ul>
      </Col>
    </Row>
  );
}
