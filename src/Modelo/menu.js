import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../Home/css.css';
//estou construindo os simuladores então esta direcionando
//para uma pagina 404
const Menu = () => {
  return (
    <Navbar expand="lg" className="cor btn-success">
      <Navbar.Toggle className='cor' aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className='cor' id="basic-navbar-nav">
        <Nav className="mx-auto display-6">
          <Nav.Link href="/" className='cor' >Home</Nav.Link>
          <Nav.Link href="/404" className='cor'>Simulador</Nav.Link>

          <Nav.Link href="/contatos" className='cor' >Contatos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
