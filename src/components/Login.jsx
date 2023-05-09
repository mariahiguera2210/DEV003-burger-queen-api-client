import React, { useState  } from "react";
import Button from 'react-bootstrap/Button';
import ErrorMessage from "./ErrorMessage";
import AuthService from "./AuthService";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Row, Col} from 'react-bootstrap';
import '../login.css';


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
    <Row className='color'>
      <Col xs={12} md={6}>
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Form className="w-75" onSubmit={handleSubmit}>
        <div className="text-center">
          <h1>Burger Queen</h1>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail" value={email}
        onChange={(e) => setEmail(e.target.value)}>
          <Form.Label className='label' >Correo</Form.Label>
          <Form.Control type="email" placeholder="Correo" />
        </Form.Group>
        

        <Form.Group className="mb-3" controlId="formBasicPassword" value={password}
        onChange={(e) => setPassword(e.target.value)}>
          <Form.Label className='label' >Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button variant="outline-warning">Iniciar Sesión</Button>
        </div>
      </Form>
    </div>
    </Col>

    <Col xs={12} md={6}>
    <div>
      <img alt='logo' src='../burger.jpg' style={{ width: '100%', height: 'auto', maxWidth: '100%' }}></img>
     </div>
    </Col>
    </Row>
  );
};


export default LoginForm;