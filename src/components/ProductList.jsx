import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

const ProductList = ({allProducts, setAllProducts}) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/products', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('sesionToken')}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          localStorage.clear();
          navigate("/");
        }

        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  const addProduct = (product) => {
    setAllProducts([...allProducts, product])
  }
  console.log(allProducts)

  return (
    <Container>
      <Row xs={3}>
        {products.map((product, idx) => (
          <Col key={idx}>
            <Card
              className="mb-4"
              border="warning"
              key={product.id}
              style={{
                width: '14rem',
                height: '22rem',
                background: 'rgba(0,0,0)',
                color: 'fff',
                borderRadius: '1rem',
                padding: '15px',
                fontSize: '18px',
                display: 'flex',
              }}
            >
              <Card.Header style={{ height: '10rem' }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ maxWidth: '14rem' }}
                />
              </Card.Header>
              <Card.Body>
                <Card.Title className='pt-1'>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button
                  className="pt-1 mt-0"
                  variant="warning"
                  onClick={() => addProduct(product) }
                >
                 Agregar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
