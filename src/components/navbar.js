import React from 'react';
import Navbar from 'react-bootstrap/navbar';
import Container from 'react-bootstrap/container';
import Nav from 'react-bootstrap/nav';
import Button from 'react-bootstrap/button';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Virtua overflow</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/recent">
            <Nav.Link as="div">Recientes</Nav.Link>
          </Link>
          <Link to="/hot">
            <Nav.Link as="div">Hot</Nav.Link>
          </Link>
        </Nav>
        <Link to="/login">
          <Button variant="outline-info">Login</Button>
        </Link>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
