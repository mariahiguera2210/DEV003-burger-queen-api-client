import React, { useState  } from "react";
import Button from 'react-bootstrap/Button';
import ErrorMessage from "./ErrorMessage";
// import AuthService from "./AuthService";
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
  );
};


export default LoginForm;