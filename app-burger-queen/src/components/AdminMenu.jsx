import React from 'react';
import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';

function AdminMenu() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data.menu))
  }, [])
 

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>id</th>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Precio</th>
          <th>Eliminar</th>
          <th>Editar</th>
        </tr>
      </thead>
     { products.map(item => (
      <tbody>
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.type}</td>
          <td>{item.price}</td>
          <td> <Button variant="danger"> < RiDeleteBin6Line/> Eliminar</Button></td>
          <td> <Button variant="primary"> <AiOutlineEdit/> Editar</Button></td>
        </tr>

      </tbody>

     ))}
    </Table>

)}

export default AdminMenu