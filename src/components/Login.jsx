import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";
import AuthService from "./AuthService";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthService.authenticate(email, password)
      .then((isAuthenticated) => {
       if(isAuthenticated){
        console.log('Autenticado');
       }else{
        console.log("Usuario no existente");
       }
      })
      .catch((error) => {
        setError(error.message);
        
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Correo electrónico"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button text="Iniciar sesión" />
      {error && <ErrorMessage message={error} />}
    </form>
  );
};


export default LoginForm;