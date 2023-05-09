import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Burguer Quenn</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="/orders">Ordenes</Nav.Link>
              <NavDropdown title="Administrador" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/productos">Productos</NavDropdown.Item>
                <NavDropdown.Item href="/empleados">Empleados</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}
export default Header