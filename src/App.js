import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://test-node-vercel-phi.vercel.app/')
      .then(response => response.json())
      .then(data => {
        setData(data);
        // Manipula los datos de respuesta aquí
      })
      .catch(error => {
        // Maneja los errores aquí
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
   
        {data && (
          <p>{data}</p>
        )}
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
