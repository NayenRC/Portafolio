import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../../styles/organisms/Navbar.css';


function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Intro</Nav.Link>
            <Nav.Link href="/proyectos">Proyects</Nav.Link>
            <Nav.Link href="/noticias">News</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

