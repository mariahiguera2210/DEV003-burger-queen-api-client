import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function Cart() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button
          style={{ fontSize: '1.4rem'}}
         className='mb-5 mx-3'
          variant="warning"
          // onClick={() =>

          // }
        >
          Enviar a Cocina
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cart;