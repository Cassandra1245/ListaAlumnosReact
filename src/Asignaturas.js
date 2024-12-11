import React, { useState, useEffect } from 'react';

function Asignaturas({ alumno }) {
    const [notaPromedio, setNotaPromedio] = useState(0);

    const calcularPromedio = () => {
        let totalPromedios = 0;

        for (let asignatura in alumno.asignaturas) {
                let notas = alumno.asignaturas[asignatura];
                totalPromedios += notas.promedio;  
        }

        const promedioGeneral = totalPromedios / 3;
        setNotaPromedio(promedioGeneral);
    };

    useEffect(() => {
        calcularPromedio();
    }, [alumno]);

    return (
        <div>
            
            {Object.keys(alumno.asignaturas).map((asignatura) => {
                const notas = alumno.asignaturas[asignatura];
                return (
                    <div key={asignatura}>
                        <h4>{asignatura}</h4>
                        <ul>
                            <li>Primera evaluación: {notas.primera_evaluacion}</li>
                            <li>Segunda evaluación: {notas.segunda_evaluacion}</li>
                            <li>Tercera evaluación: {notas.tercera_evaluacion}</li>
                            <li>Promedio: {notas.promedio}</li>
                        </ul>
                    </div>
                );
            })}
            <h4>Promedio General: {notaPromedio.toFixed(2)}</h4>
        </div>
    );
}

export default Asignaturas;