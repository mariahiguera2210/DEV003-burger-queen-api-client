import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function AgregarAdmin({ handleAddProduct }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleAddClick = () => {
    handleAddProduct({ name: productName, type: productType, price: productPrice });
    handleClose();
  };

  return (
    <div className="d-flex justify-content-start" style={{marginLeft: '5%', marginBottom: '3%'}}>
      <Button style={{width: '15%'}} variant='primary' onClick={handleShow}>
        Agregar
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Producto"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Tipo</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
              >
                <option value="Desayuno">Desayuno</option>
                <option value="Almuerzo">Almuerzo</option>
                <option value="Acompañamiento">Acompañamiento</option>
                <option value="Bebida">Bebida</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Precio del producto</Form.Label>
              <Form.Control
                type="number"
                placeholder="Precio"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleAddClick}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AgregarAdmin;

