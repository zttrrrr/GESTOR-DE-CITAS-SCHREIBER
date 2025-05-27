import React, { useState, useEffect } from 'react';
import './index.css';
import Form from './assets/componentes/Form';
import ListadoCitas from './assets/componentes/ListadoCitas';

function App() {
  const [citas, setCitas] = useState(() => {
    const citasGuardadas = localStorage.getItem('citas');
    return citasGuardadas ? JSON.parse(citasGuardadas) : [];
  });

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (index) => {
    const nuevasCitas = citas.filter((_, i) => i !== index);
    setCitas(nuevasCitas);
  };

  return (
    <div>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="contenedor">
        <div className="column">
          <h2>CREAR MI CITA</h2>
          <Form agregarCita={agregarCita} />
        </div>
        <div className="column">
          <h2>ADMINISTRA TUS CITAS</h2>
          <ListadoCitas citas={citas} eliminarCita={eliminarCita} />
        </div>
      </div>
    </div>
  );
}

export default App;
