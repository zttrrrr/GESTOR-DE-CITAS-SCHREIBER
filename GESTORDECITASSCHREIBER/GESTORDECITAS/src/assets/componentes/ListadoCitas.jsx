import React from "react";
import Cita from "./Cita";
import './listadocitas.css';

function ListadoCitas({ citas, eliminarCita }) {
  return (
    <div className="listado-citas">
      {citas.length === 0
        ? <p>No hay citas registradas</p>
        : citas.map((cita, index) => (
            <Cita
              key={index}
              index={index}
              {...cita}
              eliminarCita={eliminarCita}
            />
        ))}
    </div>
  );
}

export default ListadoCitas;
