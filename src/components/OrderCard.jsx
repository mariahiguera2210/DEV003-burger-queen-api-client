import React, { useState } from "react";
import Table from "./Table";

const OrderCard = ({ order }) => {

const [status, setStatus] = useState(order.status)
const handleUpdate = (status) => { console.log("este es el status ", status) }

  return (
    <div
      className="card mb-3"
      style={{
        maxWidth: "30rem",
        background: "#E6AF2E",
        borderRadius: "15px",
        padding: "15px",
        fontSize: "18px"
      }}
    > 
      <p><b>Orden id:</b> {order.id}</p>
      <p><b>Estatus: </b>{order.status}</p>
      <Table products={order.products} />

      <button type="button" className="btn btn-danger" onClick={() => handleUpdate(order.status)}>Enviar</button>
      { // aca hacer el cambio de status
       }
      
    </div>
  );
};

export default OrderCard;
