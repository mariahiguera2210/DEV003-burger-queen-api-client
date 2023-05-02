import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

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
    <div>
      <h2>Lista de productos</h2>
      {products.map((product) => (
        <Card key={product.id}>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button
              variant="primary"
              onClick={() =>
                console.log(`Producto ${product.id} agregado al carrito`)
              }>
              Agregar
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
