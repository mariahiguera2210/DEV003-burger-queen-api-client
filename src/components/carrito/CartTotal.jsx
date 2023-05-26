import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CartTotal() {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((acc, el) => acc + el.price * el.qty, 0);

  return (
    <Container>
      <Row>
        <Col >
          <p style={{ marginTop: '3%', marginBottom: '2px' }}>Total</p>
          <p style={{ fontFamily: "'Lilita One', cursive", fontSize: '20px' }}>
            ${total}
          </p>
        </Col>
        <Col className="d-flex justify-content-end align-items-center" style={{ marginRight: '1px' }}>
          <Button variant="warning" style={{ fontFamily: "'Lilita One', cursive" }}>
            Enviar orden
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CartTotal;
