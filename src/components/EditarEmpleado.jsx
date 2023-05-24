import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function EditarEmpleado({ editEmpleado, showModal, handleClose, handleUpdateEmpleado }) {
  const [empleadoName, setEmpleadoName] = useState('');
  const [puestoEmpleado, setPuestoEmpleado] = useState('');
  const [correoEmpleado, setCorreoEmpleado] = useState('');
  const [contraseñaEmpleado, setContraseñaEmpleado] = useState('');
 

  const handleAddClick = () => {
    const updatedEmpleado = {
      id: editEmpleado.id,
      name: empleadoName,
      role: puestoEmpleado,
      email: correoEmpleado,
      password: contraseñaEmpleado,
    };

    handleUpdateEmpleado(updatedEmpleado);
    handleClose();
  };

  return (
    <div className="d-flex justify-content-start" style={{ marginLeft: '5%', marginBottom: '3%' }}>

      <Modal show={showModal} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Empleado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre del Empleado</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                value={empleadoName}
                onChange={(e) => setEmpleadoName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Puesto</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={puestoEmpleado}
                onChange={(e) => setPuestoEmpleado(e.target.value)}
              >
                <option value="Administrador">Administrador</option>
                <option value="Chef">Chef</option>
                <option value="Mesero">Mesero</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                placeholder="Correo"
                value={correoEmpleado}
                onChange={(e) => setCorreoEmpleado(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={contraseñaEmpleado}
                onChange={(e) => setContraseñaEmpleado(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleAddClick}>
            Actualizar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditarEmpleado;
