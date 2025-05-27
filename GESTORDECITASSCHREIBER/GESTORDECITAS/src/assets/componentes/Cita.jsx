import React from "react";
import './cita.css';

function Cita({ mascota, dueño, fecha, hora, sintomas, index, eliminarCita }) {
  return (
    <div className="cita">
      <p><strong>Mascota:</strong> {mascota}</p>
      <p><strong>Dueño:</strong> {dueño}</p>
      <p><strong>Fecha:</strong> {fecha}</p>
      <p><strong>Hora:</strong> {hora}</p>
      <p><strong>Síntomas:</strong> {sintomas}</p>
      <button onClick={() => eliminarCita(index)}>Eliminar</button>
    </div>
  );
}

export default Cita;
