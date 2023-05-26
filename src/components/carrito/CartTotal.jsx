import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function CartTotal() {

const { cart } = useContext(CartContext);

const total = cart.reduce((acc, el) => acc + el.price, 0)
  return (
    <div>
        <p>Total ${total}</p>
    </div>
  )
}

export default CartTotal