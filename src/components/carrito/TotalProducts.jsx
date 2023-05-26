import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function TotalProducts() {
  const { cart } = useContext(CartContext);
  const productsAdd = cart.reduce((acc, el) => acc + el.qty, 0);
  
  return (
    <div style={{ width: '20px', height: '20px', backgroundColor: '#007bff',  color: 'white', borderRadius: '14px'}}>{productsAdd}</div>
  );
}

export default TotalProducts;
