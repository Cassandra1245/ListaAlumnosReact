import React, { useState, useEffect } from 'react';

function Carrito({ carrito }) {

  const [cantidadTotal, setCantidad] = useState ()

  const establecerCantidad = (cantidad) => {
      const newCantidad = (cantidad.target.value)
      setCantidad(newCantidad);
  };


  return (
    <div>
      <h2>Carrito de la Compra</h2>
      <ul>
        {carrito.map((articulo) => (
          <li key={articulo.id}>
            <p>{articulo.id} - {articulo.nombre}</p>
            <input type="number"  step="1" min="0" value={cantidadTotal} onChange={establecerCantidad}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carrito;