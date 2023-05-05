import React, { useState  } from "react";
import Button from 'react-bootstrap/Button';
import ErrorMessage from "./ErrorMessage";
import AuthService from "./AuthService";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    AuthService.authenticate(email, password)
      .then((isAuthenticated) => {
       if(isAuthenticated){
       navigate("/menu");
       }else{
        console.log({error});
       }
      })
      .catch((error) => {
        setError(error.message);
        
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
         <Form.Group className="mb-6" label="Correo electrónico"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}>
        <Form.Label className="">Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
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
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      {/* <Input
        label="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /> */}
       <Button variant="primary" type="submit">
        Submit
      </Button>
      {error && <ErrorMessage message={error} />}
    </Form>
  );
};


export default LoginForm;