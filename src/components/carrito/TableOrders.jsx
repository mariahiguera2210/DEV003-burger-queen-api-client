import React, { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { CartContext } from './CartContext';
import CartCounter from './CartCounter';


function TableOrders() {
  const { cart, setCart} = useContext(CartContext);

  const deleteProduct = (id) => {
    const foundId = cart.find((element) => element.id)

    const newCart = cart.filter((element) => {
      return element !== foundId
    })
    setCart(newCart)
  }
  return (
    <Row>
      <ListGroup className="align-items-center" >
        {cart.map((products) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start position-relative"
            key={products.id}>


            <Col xs={2} md={2}>
              <Badge bg="warning" className="position-absolute top-0 start-0" onClick={() => deleteProduct(products.id)}>
                <RiDeleteBin6Line size={18} />
             </Badge>
              <Image src={products.image} alt={products.name} thumbnail />
            </Col>


            <Col xs={7} md={7} style={{ paddingTop: '2%', marginLeft: '10px' }}>
              <p style={{ marginBottom: '3px', fontSize: '15px',  fontFamily: "'Lilita One', cursive"  }}>
                {products.name}
              </p>
              <p style={{ marginBottom: '3px', fontSize: '13px' }}>
                ${products.price * products.qty}
              </p>
            </Col>


            <Col xs={3} md={3} className="d-flex justify-content-end align-items-center"
                style={{ marginTop: '2%' }}>
                <CartCounter products={products} qty={products.qty}/>
            </Col>
            
            
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Row>
  );
}

export default TableOrders;
