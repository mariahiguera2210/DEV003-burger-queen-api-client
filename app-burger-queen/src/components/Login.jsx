import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from 'react-hook-form';

function Login() {
  const { register, handleSubmit, formState : {errors }} = useForm();

  const onSubmit = evento => {
    
  }

  return (
    <Container>
      <Row>
        <Col>
        <div className="titulo">
          <h1 className="mb-5">Burger Queen</h1>
        </div>
      <Form onSubmit = {handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Correo electrónico</Form.Label> */}
          <Form.Control name="email" type="email" placeholder="Correo electrónico" {...register('email', {required :
          {
            value: true,
            message: 'El campo es requerido',
            pattern:{
              value: /ˆ[A-Z0-9 ._%+-]+@<A-Z0-9.-+\.[A-Z]{2,4}$/i,
              message: 'El formato de correo electrónico no es válido'
            }
          }})}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Contraseña</Form.Label> */}
          <Form.Control name="password" type="password" placeholder="Contraseña" {...register('password', {required:{
            value: true,
            message: 'El campo es requerido',
              minLength:{
              value: 6,
              message: 'La contraseña debe contener al menos 6 carácteres'
            }}})}/> 
        </Form.Group>
       
        <Button type='submit' size="lg" variant="danger">Iniciar Sesión</Button>
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