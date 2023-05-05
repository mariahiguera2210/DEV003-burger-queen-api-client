import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button }  from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [name , setName] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products.menu);
        setProducts(data.products.menu);
      });

  }, []);

  console.log(products);

  return (
    <Row xs={2} md={{ span: 6, offset: 3 }} className="g-2">
      {products.map((product, idx) => (
        <Col key={idx}>
          <Card border="warning" key={product.id} style={{ width: '14rem', height: '20rem' ,  maxWidth: "30rem",
        background: "rgba(0,0,0)",
        color: "fff",
        borderRadius: "10px",
        padding: "15px",
        fontSize: "18px",
        display: "flex" }}>
          <Card.Header style={{height: "10rem"}}>
          <Card.Img variant="top" src={product.image} />
          </Card.Header>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <Button
              variant='warning'
              onClick={() =>
                console.log(`El cliente ${name}, Producto ${product.id} agregado al carrito`)
              }>
              Agregar
            </Button>
          </Card.Body>
        </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
