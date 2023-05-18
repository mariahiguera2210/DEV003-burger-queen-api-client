import React, {useState, useEffect} from 'react';
import TableEmpleados from '../components/TableEmpleados';
import Header from '../components/Header';
import EditarEmpleado from '../components/EditarEmpleado';
import AgregarEmpleado from '../components/AgregarEmpleado';

function AdminEmpleados() {
    const [empleados, setEmpleados] = useState([]);
    const [editEmpleado, setEditEmpleado] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const token = localStorage.getItem('sesionToken');

    //------------Traer datos---------------
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

      //-------------------Borrar datos--------------
      const handleDelete = (empleadoId) => {
        fetch(`http://localhost:8080/users/${empleadoId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            const updatedEmpleados = empleados.filter((item) => item.id !== empleadoId);
            setEmpleados(updatedEmpleados);
          })
          .catch((error) => console.error(error));
      };
    
      //--------------------Editar datos-------------------

      const handleEditEmpleado = (updatedEmpleado) => {
        fetch(`http://localhost:8080/users/${updatedEmpleado.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedEmpleado),
        })
          .then((response) => response.json())
          .then((data) => {
            const updatedEmpleados = empleados.map((item) =>
              item.id === updatedEmpleado.id ? updatedEmpleado : item
            );
            setEmpleados(updatedEmpleados);
            setEditEmpleado(null);
          })
          .catch((error) => console.error(error));
      };
      
      
      const handleEditClick = (empleadoId) => {
        const empleadoToEdit = empleados.find((item) => item.id === empleadoId);
        setEditEmpleado(empleadoToEdit);
        setShowModal(true);
      };
    
      const handleCloseModal = () => {
        setEditEmpleado(null);
        setShowModal(false);
      };

    //--------------------Agregar datos--------------------------

    const handleAddEmpleado = (newProduct) => {
        fetch('http://localhost:8080/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(newProduct),
        })
          .then((response) => response.json())
          .then((data) => {
            setEmpleados(empleados.concat(data));
          })
          .catch((error) => console.error(error));
      };

    
    return(
<div>
<Header />
<AgregarEmpleado handleAddEmpleado={handleAddEmpleado} />
<TableEmpleados
        className="text-center"
        empleados={empleados}
        handleDelete={handleDelete}
        handleEditClick={handleEditClick}
      />

{editEmpleado && (
        <EditarEmpleado
          editEmpleado={editEmpleado}
          showModal={showModal}
          handleClose={handleCloseModal}
          handleUpdateEmpleado={handleEditEmpleado}
        />
      )}
</div>
    )
}

export default AdminEmpleados
