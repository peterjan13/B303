import "./App.css";
import AppNavbar from "./components/AppNavbar.js";
import Home from "./pages/Home.js";
import Courses from "./pages/Courses.js";
import Register from "./pages/Register.js";
import Login from "./pages/Login.js";
import Logout from "./pages/Logout.js";
import NotFound from "./pages/NotFound.js";
import Profile from "./pages/Profile.js";
import CourseItem from "./pages/CourseItem.js";
import AddCourse from "./pages/AddCourse.js";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserProvider } from "./UserContext.js";

// The 'App.js' component is where we usually import other custom components.
// Note: When putting two or more components together, you have to use a container for it to work properly.
function App() {
  const [user, setUser] = useState({
    id: null,
    isAdmin: null,
  });

  const unsetUser = () => {
    localStorage.clear();
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/users/details`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: localStorage.getItem("userId"),
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (typeof result._id !== "undefined") {
          // Even if we refresh the browser the 'user' state will still have its values re-assigned
          setUser({
            id: result._id,
            isAdmin: result.isAdmin,
          });
        } else {
          setUser({
            id: null,
            isAdmin: null,
          });
        }
      });
  }, []);

  return (
    <>
      <UserProvider value={{ user, setUser, unsetUser }}>
        <Router>
          <AppNavbar />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:courseId" element={<CourseItem />} />
              <Route path="/courses/add" element={<AddCourse />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
