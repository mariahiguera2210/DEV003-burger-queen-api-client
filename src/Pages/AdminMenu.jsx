import React, { useEffect, useState } from 'react';
import TableAdmin from '../components/TableAdmin';

function AdminMenu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data.menu))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = productId => {
    fetch(`http://localhost:3000/products/${productId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        const updatedProducts = products.filter(item => item.id !== productId);
        setProducts(updatedProducts);
      })
      .catch(error => console.error(error));
  };

  return(
  <>
  <TableAdmin products={products} handleDelete={handleDelete} />;
  </> 
  )
}

export default AdminMenu;
