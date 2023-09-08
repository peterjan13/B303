import './App.css';
import AppNavbar from './components/AppNavbar.js';
import Home from './pages/Home.js';
import Courses from './pages/Courses.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import {Container} from 'react-bootstrap';

// The 'App.js' component is where we usually import other custom components.
// Note: When putting two or more components together, you have to use a container for it to work properly.
function App() {
  return (
    <>
      <AppNavbar/>
      <Container>
        <Home/> 
        <Courses/>
        <Register/>
        <Login/>
      </Container>
    </>
  );
}

export default App;

