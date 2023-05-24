import React, { useState } from "react";
import ClientForm from '../components/ClientForm';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const [name, setName] = useState([]);
  const [products, setProducts] = useState([])
  const [showProducts, setShowProducts] = useState([])
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const token = localStorage.getItem("sesionToken");
  const navigate = useNavigate();

  const  handleProducts = () => {
    fetch('http://localhost:8080/products',{
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


  const handleBreakfast = () => {
    handleProducts();
    setShowProducts(products.filter(product => product.type === "Desayuno"));
  }

  const handleLunch = () => {
    handleProducts();
    setShowProducts(products.filter(product => product.type === "Almuerzo"));
  }
 

  return (
    <div className="text-center">
      <Header />
      <div>
        <ClientForm
          onChange={(name) => {
            setName(name);
          }}
        />
        <Button
          style={{ fontSize: '1.4rem' }}
          className="mb-5 mx-3"
          variant="warning"
          onClick={() => handleBreakfast()}
        >
          Desayuno
        </Button>
        <Button
          style={{ fontSize: '1.4rem' }}
          className="mb-5 mx-3"
          variant="warning"
          onClick={() => handleLunch()
          }
        >
          Almuerzo y Cena
        </Button>
        {showProducts.map((product) => (
        <ProductList
          key={product.id}
          product={product}
          setProducts={setProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
      ))}
      </div>
    </div>
  );
};

export default Menu;
