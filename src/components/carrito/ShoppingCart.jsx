import React, {useContext} from 'react';
import CartTotal from './CartTotal';
import TableOrders from './TableOrders';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CartContext } from './CartContext';

function ShoppingCart() {
  const [show, setShow] = useState(false);
  const [orders, setOrders] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const token = localStorage.getItem("sesionToken");

  const products = []; 
  const { cart } = useContext(CartContext);
  return (
    <div>
      <Button variant='warning' onClick={handleShow}>
        <AiOutlineShoppingCart />
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Orden</Modal.Title>
        </Modal.Header>

       
        {cart.length > 0 ? (
          <Modal.Body>
           
            <TableOrders
             className="text-center"
             orders={orders}
             products={products}
            />
            <CartTotal/>
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
