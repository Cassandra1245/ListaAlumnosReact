import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Carrito from './Carrito';

function App() {
  const [ListaArticulos, setListaArticulos] = useState([]);
  const [CarritoCompra, setCarritoCompra] = useState([]);
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    const fetchListaArticulos = async () => {
      const response = await fetch('./articulos_navideños.json');
      const data = await response.json();
      setListaArticulos(data);
    };
    fetchListaArticulos();
  }, []);

  const setCarritoVisibilidad = () => {
    setShowElement((prevState) => !prevState);
  };

  const añadirAlCarrito = (articulo) => {
    if (!CarritoCompra.some((item) => item.id === articulo.id)) {
      setCarritoCompra([...CarritoCompra, articulo]);
    } 
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {ListaArticulos.map((articulo) => (
            <li key={articulo.id}>
              <h3>{articulo.nombre}</h3>
              <p>{articulo.descripcion}</p>
              <p>{articulo.precio}</p>
              <input
                type="button"
                value="Añadir al carrito"
                onClick={() => añadirAlCarrito(articulo)}
              />
            </li>
          ))}
        </ul>
        <input
          type="button"
          value={showElement ? 'Ocultar carrito' : 'Mostrar carrito'}
          onClick={setCarritoVisibilidad}
        />
        <div>{showElement && <Carrito carrito={CarritoCompra} />}</div>
      </header>
    </div>
  );
}

export default App;