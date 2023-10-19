import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'
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
        <Link style={{textDecoration:'none'}} to="/">
          <Navbar.Brand className='homeNavButton' href="#home">FitnessLife</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Nav.Link className='navButton' as={Link} to='/'>Home</Nav.Link>
            <Nav.Link className='navButton' as={Link} to="/workouts">Specific Workouts</Nav.Link>
            <Nav.Link className='navButton' as={Link} to='/musclegroup'>Muscle Group</Nav.Link>
            <Nav.Link className='navButton' as={Link} to='/equipment'>Search by Equipment</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      </div>
    </div>
  )
}

export default Navbars