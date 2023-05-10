import React, { useState } from "react";
// import OrderCard from "../components/PendingOrderCard";
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import Col from 'react-bootstrap/Col';
import PendingCard from "../components/PendingOrderCard";
import CookedCard from "../components/CookedOrderCard";


const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [showPending, setShowPending] = useState(false); 
  const [showCooked, setShowCooked] = useState(false);
  const token = localStorage.getItem('sesionToken')
  

  const handleClick = (status) => {
    fetch('http://localhost:8080/orders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
        setShowPending(status === 'pending');
        setShowCooked(status === 'cooked');
      })
      .catch((error) => console.error(error));  
  };
  
  //solo aparece el useffect cuando el componente al que pertenece en este caso Orders se renderiza 
  // si pongo una dependecia (variable) en el array vacio se va a ejecutar el usseEffet cada vez que cambia esa variable.

  const pendingOrders = orders.filter((order) => order.status === "pending");
  const cookedOrders = orders.filter((order) => order.status === "cooked");
  return (
    <Col className='text-center'>
      <Header/>
      <div>
      <Button
         style={{ fontSize: '1.4rem'}}
         className='mt-5 mb-5 mx-3'
          variant="warning"
          onClick={() => handleClick('pending') 

          }
        >  
        Ordenes Pendientes
        </Button>
        <Button
          style={{ fontSize: '1.4rem'}}
          className='mt-5 mb-5 mx-3'
          variant="warning"
          onClick={() =>   handleClick('cooked') 
          }
        >
          Ordenes Por Entregar
        </Button>

        {showPending && (
          <>
            {pendingOrders.map((order) => (
              <PendingCard order={order} key={order.id} setOrders={setOrders} />
            ))}
          </>
        )}
        
        {showCooked && (
          <>
            {cookedOrders.map((order) => (
              <CookedCard order={order} key={order.id} setOrders={setOrders} />
            ))}
          </>
        )}
      </div>
    </Col>
  );
};

export default Orders;