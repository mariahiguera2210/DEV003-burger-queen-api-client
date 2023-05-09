import React from 'react';
import ClientForm from './ClientForm';
import Header from './Header';
import ProductList from './ProductList';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';


const Menu = () => {
  const [name, setName] = useState([]);
  return (
    <div>
      <Header/>
      <div>
        <Button
          variant="warning"
          // onClick={() =>
          // }
        >
          Desayuno
        </Button>
        <Button
          variant="warning"
          // onClick={() =>
          // }
        >
          Almuerzo y Cena
        </Button>
        <ClientForm
          onChange={(name) => {
            setName(name);
          }}
        />
        <ProductList />
      </div>
    </div>
  );
};

export default Menu;
