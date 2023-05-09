import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


function Header() {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Burguer Quenn</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav><Link to="/menu">Menu</Link></Nav>
              <Nav><Link to="/orders">Ordenes</Link></Nav>
              <NavDropdown title="Administrador" id="collasible-nav-dropdown">
                <NavDropdown.Item ><Link to="/productos">Productos</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/empleados">Empleados</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav><Link to="/">Logout</Link></Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Header