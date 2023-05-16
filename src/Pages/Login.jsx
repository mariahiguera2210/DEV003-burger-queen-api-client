import React from 'react';
import LoginForm from '../components/LoginForm';
import LogoPrincipal from '../components/LogoPrincipal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../login.css';

function Login() {
    return(
        
        <Row className='login'>
        <Col xs={6}><LoginForm/></Col>
        <Col xs={6}><LogoPrincipal/></Col>
      </Row>
            
    
    )
}

export default Login;