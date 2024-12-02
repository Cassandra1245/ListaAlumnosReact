import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Carrito from './Carrito';

function App() {

  const [ListaArticulos, setListaArticulos] = useState([])
  const [CarritoCompra, setCarritoCompra] = useState([])
  const [showElement, setShowElement] = useState([false])

  useEffect(() => {

    const fetchListaArticulos = async () => {
      const response = await fetch('./articulos_navideños.json');
      const data = await response.json();
      setListaArticulos(data);
    };
    fetchListaArticulos();
  }, [])

  function setCarritoVisibilidad() {
    setShowElement(prevState => !prevState); 
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {ListaArticulos.map(articulo => (
            <li key={articulo.id}>
              <h3>{articulo.nombre}</h3>
              <p>{articulo.descripcion}</p>
              <p>{articulo.precio}</p>
              <button onClick={() => setCarritoCompra([...CarritoCompra, articulo])} >Añadir al carrito</button>
            </li>
          ))}
        </ul>
        <button onClick={setCarritoVisibilidad}>
        {showElement ? 'Ocultar carrito' : 'Mostrar carrito'}
        </button>
        <div >
            {showElement && <Carrito carrito={CarritoCompra}/>}
        </div>
      </header>
    </div>
  );
}

export default App;

