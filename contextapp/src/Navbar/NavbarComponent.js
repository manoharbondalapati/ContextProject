import React, { useContext } from 'react';
//import { Link } from 'react-router-dom';
//import Navbar from 'react-bootstrap/Navbar'
import'bootstrap/dist/css/bootstrap.min.css';
import { NavContext } from './NavApp';
import {Navbar,Nav,Container} from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import './signup.css';

const NavbarComponent = () => {

  const {isAuth,setisAuth}=  useContext(NavContext);
  const navigate=useNavigate();
  
  const handleLogout=()=>
  {
    if(isAuth)
    {
        sessionStorage.removeItem('username');
          setisAuth(false);
    }
   
    navigate('/login');
   }

   const handleSignup=()=>
   {
    navigate('/signup')
   };
  return (
   
    <Navbar expand="lg" id='nav' bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand as={NavLink} to="/">React-Nav</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
         {isAuth && (
         <>
          <Nav.Link as={NavLink} to="/aboutus">About</Nav.Link>
          <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
          <Nav.Link  as={NavLink} to="/Career">Career</Nav.Link>
          <Nav.Link  as={NavLink}to="/Contact">Contact</Nav.Link>
          </>
          )}
            <Nav.Link as={NavLink} to="/login" onClick={handleLogout}>
              {isAuth ? "Logout":"Login"}</Nav.Link>
           {!isAuth &&
           (
            <Nav.Link as={NavLink} to="/Signup"onClick={handleSignup}>signup</Nav.Link>
           )}
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent;