import React, { useContext } from 'react';
import { CartContext } from './carrito/CartContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiLogOut } from 'react-icons/bi';
import ShoppingCart from './carrito/ShoppingCart';
import TotalProducts from './carrito/TotalProducts';

function Header() {
  const { cart } = useContext(CartContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ fontFamily: "'Lilita One', cursive" }}>
      <Container>
        <Navbar.Brand style={{ fontSize: '2rem', color: '#E6AF2E' }}>Burger Queen</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navbar-nav" style={{ fontSize: "1.2rem" }}>
            <Nav>
              <Link to="/menu" style={{
                textDecoration: 'none',
                color: 'var(--bs-navbar-color)',
                margin: '10px',
              }}>Menu</Link>
            </Nav>
            <Nav>
              <Link to="/orders" style={{
                textDecoration: 'none',
                color: 'var(--bs-navbar-color)',
                margin: '10px',
              }}>Ordenes</Link>
            </Nav>
            <Nav>
              <NavDropdown title="Administrador" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/products" style={{
                    textDecoration: 'none',
                    color: 'black'
                  }}>Productos</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/empleados" style={{
                    textDecoration: 'none',
                    color: 'black'
                  }}>Empleados</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Nav>

          <div style={{ position: 'relative' }}>
            <Nav style={{ textDecoration: 'none', color: '#9B9D9E', marginLeft: '40px' }}>
              <ShoppingCart/>
            </Nav>
            <div style={{ position: 'absolute', bottom: '-10px', left: '0', marginLeft: '35px' }}>
             {cart.length > 0 ? <TotalProducts /> : null} 
            </div>
          </div>

          <Nav>
            <Link to='/' style={{ textDecoration: 'none', color: '#9B9D9E', fontSize: '30px', marginLeft: '20px' }}>
              <BiLogOut />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
