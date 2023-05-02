import React from "react";
import './App.css';
import Login from './components/Login';
import AdminMenu from './components/AdminMenu';
import Menu from './components/Menu';
import Pedidos  from './components/Pedidos'; 
import NotFound from "./components/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <main className="App-main">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/pedidos" element={<Pedidos/>}/>
          <Route path="/adminMenu" element={<AdminMenu/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>

        </main> 
    </div>

  );
}

export default App;
