import React  from "react";
import './App.css';
import Login from './components/Login';
import AdminMenu from './Pages/AdminMenu';
import AdminEmpleado from './Pages/AdminEmpleado';
import Header from './components/Header';
import Menu from './components/Menu';
import Orders  from './Pages/Orders'; 
import NotFound from "./components/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";


function App() {

  // const [order,setOrder]=useState({})

  // fetch("data/orders.json")
  // .then(response => response.json())
  // .then(data => {
  //   // El objeto JSON está almacenado en la variable 'data'
  //   console.log(data);
  // });
  return (
    <div className="App">
    <main className="App-main">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/productos" element={<AdminMenu/>}/>
          <Route path="/empleados" element={<AdminEmpleado/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>

        </main> 
    </div>

  );
}

export default App;
