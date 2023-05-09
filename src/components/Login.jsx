import React, { useState  } from "react";
import Button from 'react-bootstrap/Button';
import ErrorMessage from "./ErrorMessage";
// import AuthService from "./AuthService";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('http://localhost:8080/login', { method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),})
      .then((response) => response.json())
      .then((data) => { 
        const accessToken= data.accessToken
        console.log('accessToken: ', accessToken);
       
        const user = data.user.email
        localStorage.setItem("sesionUser", JSON.stringify(user));
        localStorage.setItem("sesionToken", accessToken);
        navigate("/menu")
      })

      .catch((error) => {
        console.error(error);
      });
  
  };

  return (
    <Form onSubmit={handleSubmit}>
         <Form.Group className="mb-6" label="Correo electrónico" 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}>
        <Form.Label className="">Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" autoComplete = "username"/>
        <Form.Text className="text-muted">
        {error && <ErrorMessage message={"email no válido"} />}
        </Form.Text>
      </Form.Group>
      {/* <Input
        label="Correo electrónico"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /> */}
      <Form.Group className="mb-3" controlId="formBasicPassword"         label="Contraseña"
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" autoComplete= "current-password"/>
      </Form.Group>
      {/* <Input
        label="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /> */}
       <Button variant="primary" type="submit">
        Login
      </Button>
      {error && <ErrorMessage message={error} />}
    </Form>
  );
};


export default LoginForm;