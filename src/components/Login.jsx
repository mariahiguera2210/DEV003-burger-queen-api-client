import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ErrorMessage from './ErrorMessage';
import AuthService from './AuthService';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    AuthService.authenticate(email, password)
      .then((isAuthenticated) => {
        if (isAuthenticated) {
          navigate('/menu');
        } else {
          console.log({ error });
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Container className="pt-3 mx-6">
      <Row>
        <span
          style={{
            color: '#E6AF2E',
            fontSize: '3rem',
            fontWeight: '600',
            paddingTop: '3rem',
            paddingBottom: '1rem',

          }}
        >
          BURGER QUEEN
        </span>
      </Row>
      <img
        style={{
          maxHeight: '700px',
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
        src={'/image-login/burger-login.jpeg'}
      />
      <Row>
        <span
          style={{
            fontSize: '2rem',
            fontWeight: '400',
            paddingTop: '3rem',
            paddingBottom: '1rem',
          }}
        >
          BIENVENIDO!
        </span>
        <span
          className="pt-6"
          style={{ fontSize: '1.3rem', paddingBottom: '1rem' }}
        >
          Un lugar para gente hambrienta como Tú
        </span>
      </Row>
      <Row>
        <Col
          style={{ fontSize: '1.3rem', paddingTop: '1.3rem', padding: '2.5em' }}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-6"
              label="Correo electrónico"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
              <Form.Label className="">Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                {error && <ErrorMessage message={'email no válido'} />}
              </Form.Text>
            </Form.Group>
        
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              label="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        
            <Button variant="warning" type="submit"  style={{ width:"8rem"}}>
              Submit
            </Button>
            {error && <ErrorMessage message={error} />}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
