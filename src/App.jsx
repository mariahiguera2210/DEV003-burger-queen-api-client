import React from 'react';
import './App.css';
import Login from './Pages/Login';
import AdminEmpleados from './Pages/AdminEmpleados';
import AdminProducts from './Pages/AdminProducts';
import Menu from './Pages/Menu';
import Orders from './Pages/Orders';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/carrito/CartContext';

function App() {

  return (
    <div className="App">
    <main className="App-main">
      <CartProvider>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/Products" element={<AdminProducts/>}/>
          <Route path="/Empleados" element={<AdminEmpleados/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartProvider>
       
      </main>
    </div>
  );
}

export default App;