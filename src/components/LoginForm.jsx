import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ErrorMessage from './ErrorMessage';
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import '../login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
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
      });
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="text-center mb-4">
        <h1>Iniciar Sesión</h1>
      </div>
      <Form className="w-75" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            {error && <ErrorMessage message={'email no válido'} />}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button variant="warning" size="lg" type="submit">
            Iniciar Sesión
          </Button>
        </div>
        {error && <ErrorMessage message={error} />}
      </Form>
    </div>
  );
};

export default LoginForm;
