import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './carrito/CartContext';


const ProductList = ({product, setProducts}) => {

  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);
  const addProduct = () => {
    const token = localStorage.getItem("sesionToken");
    fetch("http://localhost:8080/products", {
      
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      },
    })
      .then((response) =>  {
        if (response.status === 401) {
          localStorage.clear();
          navigate("/");
        }

        return response.json();
      })
      .then((data) => {

        setProducts(data);
      })
      
      .catch(error => console.error(error)
        ) ;
  }


  const buyProducts = (product) => {
    console.log(product)
    setCart([...cart, product])
  }

  return (
    <Container>
      <Row xs={2}>
          <Col>
            <Card
              className="mb-4"
              border="warning"
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
                onClick={() => buyProducts(product) }
                >
                 Agregar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        
      </Row>
    </Container>
  );
};

export default ProductList;
