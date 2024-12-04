import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Asignaturas from './Asignaturas';
import './App.css';

function App() {
  const [ListaAlumnos, setListaAlumnos] = useState([]);
  const [showElements, setShowElements] = useState({});

  useEffect(() => {
    const fetchListaArticulos = async () => {
      const response = await fetch('./alumnos.json');
      const data = await response.json();
      setListaAlumnos(data.alumnos);
    };
    fetchListaArticulos();
  }, []);

  const setNotasVisibilidad = (nombreAlumno) => {
    setShowElements((prevState) => ({
      ...prevState,
      [nombreAlumno]: !prevState[nombreAlumno]
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {ListaAlumnos.map((alumno) => (
            <li key={alumno.nombre}>
               <button onClick={() =>setNotasVisibilidad(alumno.nombre)}>{alumno.nombre}</button>
               {showElements[alumno.nombre] && <Asignaturas alumno={alumno} />}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;