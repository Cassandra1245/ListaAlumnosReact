import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Asignaturas from './Asignaturas';
import './App.css';



function App() {
  const [ListaAlumnos, setListaAlumnos] = useState([]);
  const [showElements, setShowElements] = useState({});
  const [filtrado, setFiltrado] = useState("");

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

  const handleChange = (event) => {
    setFiltrado(event.target.value);
  };

  const AlumnoFiltrado = ListaAlumnos.filter((alumno) => {
    return alumno.nombre.toLowerCase().startsWith(filtrado.toLowerCase());
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text"  value={filtrado} onChange={handleChange} placeholder="Filtrar por nombre"/>
        <ul>
          {AlumnoFiltrado.map((alumno) => (
            <div key={alumno.nombre}>
              <button onClick={() => setNotasVisibilidad(alumno.nombre)}>{alumno.nombre}</button>
              {showElements[alumno.nombre] && <Asignaturas alumno={alumno} />}
            </div>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;