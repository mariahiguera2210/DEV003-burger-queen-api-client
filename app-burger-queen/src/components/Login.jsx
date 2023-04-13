import React from "react";
import Button from 'react-bootstrap/Button';

function Login() {
  return (
    <div>
    <h1>Burger Queen</h1>
    <input type="text" placeholder="Correo electronico"></input>
    <div>
    <input type="text" placeholder="Contraseña"></input>
    </div>
    <Button size="lg" variant="danger">Iniciar Sesión</Button>
    </div>
  );
}

export default Login;