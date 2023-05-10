import React, { useEffect, useState } from 'react';
import TableEmpleados from '../components/TableEmpleados';
import Header from '../components/Header';
import AgregarEmpleado from '../components/AgregarEmpleado';
import EditarEmpleados from '../components/EditarEmpleado';

function AdminEmpleados() {
  const [empleados, setEmpleados] = useState([]);
  const [editEmpleados, setEditEmpleados] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const token = localStorage.getItem('sesionToken');

  useEffect(() => {
    fetch('http://localhost:8080/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setEmpleados(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (userId) => {
    fetch(`http://localhost:8080/users/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedEmpleados = empleados.filter((item) => item.id !== userId);
        setEmpleados(updatedEmpleados);
      })
      .catch((error) => console.error(error));
  };

  const handleAdd = (newEmpleado) => {
    fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newEmpleado),
    })
      .then((response) => response.json())
      .then((data) => {
        setEmpleados([...empleados, data]);
      })
      .catch((error) => console.error(error));
  };

  const handleEdit= (updatedEmpleados) => {
    fetch(`http://localhost:8080/users/${updatedEmpleados.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedEmpleados),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedEmpleados = empleados.map((item) =>
          item.id === updatedEmpleados.id ? updatedEmpleados : item
        );
        setEmpleados(updatedEmpleados);
      })
      .catch((error) => console.error(error));
  
  
  };
  
  
  
  const handleEditClick = (empleadoId) => {
    const empleadoToEdit = empleados.find((item) => item.id === empleadoId);
    setEditEmpleados(empleadoToEdit);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setEditEmpleados(null);
    setShowModal(false);
  };

  return (
    <div>
      <Header />
      <AgregarEmpleado handleAdd={handleAdd} />
      <TableEmpleados
        className="text-center"
        products={empleados}
        handleDelete={handleDelete}
        handleEditClick={handleEditClick}
      />
      {editEmpleados && (
        <EditarEmpleados
          editProduct={editEmpleados}
          showModal={showModal}
          handleClose={handleCloseModal}
          handleUpdate={handleEdit}
        />
      )}
    </div>
  );
}

export default AdminEmpleados;
