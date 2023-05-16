import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function TableAdmin({ products, handleDelete, handleEditClick }) {
  return (
    <Table striped bordered hover variant="dark" className="mx-auto" style={{width: '80%'}}>
      <thead>
        <tr >
          <th>id</th>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Precio</th>
          <th>Eliminar</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.price}</td>
            <td>
              <Button variant="outline-warning" onClick={() => handleDelete(item.id)}>
              <RiDeleteBin6Line size={20} />
              </Button>
            </td>
            <td>
              <Button variant="outline-warning" onClick={() => handleEditClick(item.id)}>
                <AiOutlineEdit size={20}/>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableAdmin;
