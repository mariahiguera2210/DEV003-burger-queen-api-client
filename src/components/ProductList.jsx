import React from 'react';
import ClientForm from "./ClientForm";
import { Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';


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
    <div 
    className="card mb-3"
    style={{
      maxWidth: "30rem",
      background: "#E6AF2E",
      borderRadius: "15px",
      padding: "15px",
      fontSize: "18px",
      display: "flex" }}
      >
      <h2>Lista de productos</h2>
      <ClientForm onChange={(name) =>{ setName(name)}}/>
      {products.map((product) => (
        <Card key={product.id}>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button
              variant="primary"
              onClick={() =>
                console.log(`El cliente ${name}, Producto ${product.id} agregado al carrito`)
          
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
