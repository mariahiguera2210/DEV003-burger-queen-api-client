import React from 'react';
import TableClient from './TableClient';
import TableOrders from './TableOrders';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ShoppingCart({ allProducts }) {
  const [show, setShow] = useState(false);
  const [orders, setOrders] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const token = localStorage.getItem("sesionToken");

  useEffect(() => {
    fetch('http://localhost:8080/orders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error(error));
  }, []);

  const products = []; 

  return (
    <div>
      <Button variant='warning' onClick={handleShow}>
        <AiOutlineShoppingCart />
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Orden</Modal.Title>
        </Modal.Header>

        {orders.length > 0 ? (
          <Modal.Body>
           
            <TableOrders
             className="text-center"
             orders={orders}
             products={products}
            />
             <TableClient
             className="text-center"
             orders={orders}
            />
          </Modal.Body>
        ) : (
          <Modal.Body>
            El carrito está vacío
          </Modal.Body>
        )}

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="warning" onClick={handleClose}>
           Enviar orden
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ShoppingCart;
