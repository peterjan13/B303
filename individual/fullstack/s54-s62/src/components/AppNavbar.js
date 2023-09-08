import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../UserContext.js";

export default function AppNavbar() {
  const { user } = useContext(UserContext);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Zuitt Booking
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/courses">
              Courses
            </Nav.Link>

            {user.id !== null ? (
              user.isAdmin ? (
                <>
                  <Nav.Link as={NavLink} to="/courses/add">
                    Add Course
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/logout">
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/profile">
                    Profile
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/logout">
                    Logout
                  </Nav.Link>
                </>
              )
            ) : (
              <>
                <Nav.Link as={NavLink} to="/register">
                  Register
                </Nav.Link>
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
