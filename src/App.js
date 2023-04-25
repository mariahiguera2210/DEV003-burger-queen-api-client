import React from "react";
import './App.css';
import Login from './components/Login.jsx';
// import Menu from './components/Menu.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <main className="App-main">
 
         <Login />
          {/* <Menu/> */}
       
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        </main> 
    </div>
  );
}

export default App;
