import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Login() {
  return (
    <Container>
      <Row>
        <Col>
        <div>
          <h1>Burger Queen</h1>
        </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Correo electrónico</Form.Label> */}
          <Form.Control type="email" placeholder="Correo electrónico" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Contraseña</Form.Label> */}
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <Button size="lg" variant="danger">Iniciar Sesión</Button>
      </Form>
      </Col>
      {/* <div class="row justify-content-md-center">
        <div class="col-6">
          
          <input type="text" placeholder="Correo electronico"></input>
          <input type="text" placeholder="Contraseña"></input>
          
        </div> */}
        <Col>
        <img src="./burger.jpg" className="burger" alt="logo" />
        </Col>
      </Row>
   </Container>
  );
}

export default Login;