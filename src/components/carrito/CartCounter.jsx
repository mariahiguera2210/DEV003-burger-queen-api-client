import React, {useContext} from 'react';
import Button from 'react-bootstrap/Button';
import { AiOutlineLine } from 'react-icons/ai';
import { BsPlus } from 'react-icons/bs';
import { CartContext } from './CartContext';
 
 function CartCounter({ products, qty}) {
  const { buyProducts, cart, setCart } = useContext(CartContext);

  const removeProduct = () => {
    const productRepeat = cart.find((item) => item.id === products.id)
    
    productRepeat.qty !== 1 &&
   setCart(cart.map((item) => item.id === products.id ? 
   {...products, qty: productRepeat.qty - 1}: item))
  
    
  }

   return (
    <>
    <Button variant="outline-warning" style={{ marginRight: '10px' }} onClick={() => removeProduct(products)}>
      <AiOutlineLine />
    </Button>

      <p style={{ marginTop: '15%', marginRight: '10px' }}>{qty}</p> 

    <Button variant="outline-warning" onClick={() => buyProducts(products)}>
      <BsPlus />
    </Button>
    </>
                
                

   )
 }
 
 export default CartCounter