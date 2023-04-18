import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from 'react-hook-form';

function Login() {
  const { register, handleSubmit, formState :{errors}} = useForm({ mode: "onChange"});
  

  const onSubmit = evento => {
    console.log(evento)
  } 
  const messages = {
    req: "Este campo es obligatorio",
    email: "El formato de correo electrónico no es válido",
    password: "Debes introducir una contraseña válida"
   };

   const patterns = {
    email :/^[a-zA-Z0-9.!#$%&`*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 
    password: /^[0-9]+$/i,
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
          <Form.Control name="email" type="email" placeholder="Correo electrónico" {...register('email', {
            required : messages.req,
            pattern : {
              value : patterns.email,
              message: messages.email
            }
            
          })
          }/>
           {errors.email && (<span>{errors.email.message}</span>)}
        </Form.Group>
            
        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Contraseña</Form.Label> */}
          <Form.Control name="password" type="password" autoComplete="new-password" placeholder="Contraseña" {...register('password', {
            required:messages.req,
              minLength:{
              value: 6,
              message: messages.password
            },
            maxLength: {
              value: 16,
              message: messages.password
            },
            pattern: {
              value: patterns.password,
              message: messages.password
            }
            }
            )}
            /> 
            {errors.password && (<span>{errors.password.message}</span>)}
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