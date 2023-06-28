import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Menu = () => {
  return (
    <Navbar expand="lg">
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto display-6">
          <Nav.Link href="/" >Home</Nav.Link>
          <Nav.Link href="/simulador">Simulador</Nav.Link>
          <Nav.Link href="/contatos">Contatos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
