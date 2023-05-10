import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function TableEmpleados({ products, handleDelete, handleEditClick }) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>id</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Rol</th>
          <th>Password</th>
          <th>Eliminar</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.role}</td>
            <td>{item.password}</td>
            <td>
              <Button variant="danger" onClick={() => handleDelete(item.id)}>
                <RiDeleteBin6Line />
                Eliminar
              </Button>
            </td>
            <td>
              <Button variant="success" onClick={() => handleEditClick(item.id)}>
                <AiOutlineEdit />
                Editar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableEmpleados;
