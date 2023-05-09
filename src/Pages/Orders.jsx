import React, { useState, useEffect } from "react";
import OrderCard from "../components/OrderCard";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem('sesionToken')
  useEffect(() => {
    fetch('http://localhost:8080/orders', { method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
    },)
      .then((response) => response.json())
      .then((data) => setOrders(data))
      
      .catch((error) => console.error(error));
  }, []);

  const pendingOrders = orders.filter((order) => order.status === "pending");
  console.log('pendingOrders: ', pendingOrders);

 

  return (
    <>
      <h1 className="titleOrders">Ordenes Pendientes</h1>
      {pendingOrders.map((order) => (
        <OrderCard order={order} key={order.id} />
      ))}

    </>
  );
};

export default Orders;