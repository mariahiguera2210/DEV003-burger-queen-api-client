import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const ClientForm = (props) => {
  const [name, setName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar datos a la API para guardar el cliente
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa tu nombre"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            props.onChange(event.target.value);
          }}
        />
      </Form.Group>
    </Form>
  );
};

export default ClientForm;