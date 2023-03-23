import React, { useState, useEffect } from 'react';


function Clock() {
    const [state, setState] = useState({
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    });

    useEffect(() => {
        const timerID = setInterval(() => {
            setState(prevState => {
                const edad = prevState.edad + 1;
                return {
                    ...prevState,
                    fecha: new Date(),
                    edad
                };
            });
        }, 1000);
        return () => clearInterval(timerID);
    }, []);

    return (
        <div>
            <h2 id='clock'>Hora Actual: {state.fecha.toLocaleTimeString()}</h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    );
}

export default Clock;