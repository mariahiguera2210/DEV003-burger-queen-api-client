import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

    //------------------ Agregar productos al carrito, sin repetirse ------------------------
    const buyProducts = (product) => {
      const productRepeat = cart.find((item) => item.id === product.id)
     //Si hay un producto igual
      if(productRepeat){
        setCart(cart.map((item) => item.id === product.id ? {...product, qty: productRepeat.qty + 1}: item))
      }else{
        setCart([...cart, product]);
      }
      
    };

  return (
    <CartContext.Provider value={{ cart, setCart, buyProducts }}>
      {children}
    </CartContext.Provider>
  );
};
