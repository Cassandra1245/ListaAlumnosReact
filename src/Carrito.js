import React from 'react';

function Carrito({ carrito }) {

  return (
    <div>
      <h2>Carrito de la Compra</h2>
        <ul>
          {carrito.map((articulo) => (
            <li key={articulo.id}>
              {articulo.nombre}
            </li>
          ))}
        </ul>
    </div>
  );
}

export default Carrito;