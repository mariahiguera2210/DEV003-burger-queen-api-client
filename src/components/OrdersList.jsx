import React from "react";
import Table from "./Table";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const OrdersList = ({ order, setOrders }) => {
  const handleClick = () => {
    const token = localStorage.getItem("sesionToken");

    fetch(`http://localhost:8080/orders/${order.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status: "cooked" }),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));

    fetch("http://localhost:8080/orders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setOrders(data))

      .catch((error) => console.error(error));
  };

  return (
    <Container
      style={{
        maxWidth: "500px",
        background: "rgba(0,0,0)",
        borderRadius: "1px",
        padding: "1px",
        fontSize: "1.3rem",
      }}
    >
      <Card
        className="mb-4"
        border="warning"
        style={{
          width: "30 vw",
          height: "25 vh",
          maxWidth: "30rem",
          background: "rgba(0,0,0)",
          color: "fff",
          borderRadius: "1rem",
          padding: "15px",
          fontSize: "18px",
          display: "flex",
        }}
      >
        <Card.Header style={{ height: "8vh", margin: "2px" }}>
          <p>
            <b>Id de la ordern: </b> {order.id}
          </p>
          <p>
            <b>Mesa:</b> {order.table}  &nbsp; &nbsp; <b>Estatus:</b> {order.status}
          </p>
     
        </Card.Header>
        <Card.Body>
          <Table products={order.products} />

          <button
            type="button"
            className="btn btn-warning"
            onClick={() => handleClick()}
          >
            Enviar
          </button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OrdersList;
