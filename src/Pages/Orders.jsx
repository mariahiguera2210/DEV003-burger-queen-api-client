import React, {useState, useEffect}from "react";
import OrderCard from "../components/OrderCard";


const Orders = () => {
   
    const [orders, setOrders] = useState([])
    
        useEffect(() => {
        fetch("data/orders.json")
            .then(response => response.json())
            .then(data => setOrders(data['orders']))
            .catch(error => console.error(error))
      }, [])
      
      // console.log(orders)
      
    return (
      <>
      <h1 className="titleOrders">Ordenes Pendientes</h1>
        {orders.map(order => (
          <OrderCard
          order={order} 
          key={order.id}
          
         />))}
      </>
    
        )

}

export default Orders;