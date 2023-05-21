import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {AiOutlineLine} from 'react-icons/ai';
import {GrAdd} from 'react-icons/gr';

function TableOrders({ orders }) {
  return (
    <Row>
      <ListGroup className="align-items-center">
        {orders.map((order) =>
          order.products.map((product) => (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start position-relative"
              key={product.product.id}
            >
              <Col xs={2} md={2}>
                <Badge
                  bg="warning"
                  pill
                  className="position-absolute top-0 start-0"
                >
                  {product.qty}
                </Badge>
                <Image
                  src={product.product.image}
                  alt={product.product.name}
                  thumbnail
                />
              </Col>
              <Col xs={7} md={7} style={{ paddingTop: '1px' }}>
                <p className="fw-bold" style={{ marginBottom: '3px', marginTop: '3%' }}>{product.product.name}</p>
                <p style={{ marginBottom: '3px' }}>{product.product.type}</p>
              </Col>
              <Col xs={3} md={3} className="text-end"
              style={{ display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '3%'
              }}>
          <Button variant="light">
           <AiOutlineLine />
         </Button>
          <p>{product.product.price}</p>
          <Button variant="light">
           <GrAdd />
         </Button>
        </Col>

            </ListGroup.Item>
          ))
        )}
      </ListGroup>
    </Row>
  );
}

export default TableOrders;
