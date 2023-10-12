import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Navbars = () => {
  return (
    <div>
        <div>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">FitnessLife</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to="/workouts">Specific Workouts</Nav.Link>
            <Nav.Link as={Link} to='/musclegroup'>Muscle Group</Nav.Link>
            <Nav.Link as={Link} to='/equipment'>Search by Equipment</Nav.Link>
            <Nav.Link as={Link} to='/saved'>Saved</Nav.Link>
            <Nav.Link as={Link} to='/tip'>Tip</Nav.Link>
            <Nav.Link as={Link} to='/timer'>Workout Timer</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      </div>
    </div>
  )
}

export default Navbars