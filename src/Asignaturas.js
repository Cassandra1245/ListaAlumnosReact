import React, { useState, useEffect } from 'react';

function Asignaturas({alumno,}) {

    return (
        <div>
            {alumno.nombre}
            {Object.entries(alumno.asignaturas).map(([asignatura, notas]) => (
                <h4 key={asignatura}>
                    <h4>{asignatura}</h4>
                    <ul>
                        <li>Primera evaluación: {notas.primera_evaluacion}</li>
                        <li>Segunda evaluación: {notas.segunda_evaluacion}</li>
                        <li>Tercera evaluación: {notas.tercera_evaluacion}</li>
                        <li>Promedio: {notas.promedio}</li>
                    </ul>
                </h4>
            ))}
        </div>
    );
}

export default Asignaturas;