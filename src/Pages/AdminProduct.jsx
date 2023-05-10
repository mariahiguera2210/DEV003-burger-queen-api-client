import React, { useEffect, useState } from 'react';
import TableAdmin from '../components/TableAdmin';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import Col from 'react-bootstrap/Col';
import AgregarAdmin from '../components/AgregarAdmin';

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem('sesionToken');

  useEffect(() => {
    fetch('http://localhost:8080/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (productId) => {
    fetch(`http://localhost:8080/products/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedProducts = products.filter((item) => item.id !== productId);
        setProducts(updatedProducts);
      })
      .catch((error) => console.error(error));
  };

  const handleAddProduct = (newProduct) => {
    fetch('http://localhost:8080/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts([...products, data]);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
        <Header/>
 <AgregarAdmin handleAddProduct={handleAddProduct} />
        <TableAdmin className="text-center" products={products} handleDelete={handleDelete} />
    </div>
    
       
  
  );
};

export default AdminProducts;
