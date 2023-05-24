import React, { useState} from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';



const LoginForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  
  const onSubmit = (data) => {
    console.log(data);
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
    })
      .then((response) => response.json())
      .then((data) => {
        const accessToken = data.accessToken;
        console.log('accessToken: ', accessToken);
  
        const user = data.user.email;
        localStorage.setItem('sesionUser', JSON.stringify(user));
        localStorage.setItem('sesionToken', accessToken);
        navigate('/menu');
      })
      .catch((error) => {
        console.error(error);
        setError('No se pudo iniciar sesión. Usuario no autenticado.');
      });
  };
  


  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="text-center mb-4" style={{ marginTop: '-100px', paddingBottom: '30px' }}>
        <h1 style={{fontSize: '60px'}}>Iniciar Sesión</h1>
      </div>
      {error && <Alert variant="danger" style={{fontFamily: 'arial'}}>{error}</Alert>}
      <Form className="w-75" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group style={{  width: '60%', margin:' 0 auto'}} className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control
          name='email' 
            type="email"
            autoComplete="username"
          
            {...register("email", {
              required: {
               value: true,
               message: 'Debe ingresar un correo electronico'
              },
              pattern:{
               value: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$',
               message: 'El formato no es correcto'
              }
              })} 
          />
          {errors.email && <span style={{color: 'red', fontFamily: 'arial', fontSize: '15px'}}>{errors.email.message}</span>}
        </Form.Group>

        <Form.Group style={{  width: '60%', margin:' 0 auto'}} className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
          name='password'
            type="password"
            autoComplete="current-password"
            {...register("password", {
              required: {
               value: true,
               message: 'Debe ingresar una contraseña'
              },
              minLength:{
               value: 6,
               message: 'La contraseña debe contener al menos 6 caracteres'
              }
              })} 
          />
          {errors.password && <span style={{color: 'red', fontFamily: 'arial', fontSize: '15px'}}>{errors.password.message}</span>}
        </Form.Group>

        <div className="d-flex justify-content-center" >
          <Button variant="warning" size="lg" type="submit" style={{ marginTop: '50px'}} >
            Iniciar Sesión
          </Button>
        </div>

      </Form>
    </div>
  );
};

export default LoginForm;
