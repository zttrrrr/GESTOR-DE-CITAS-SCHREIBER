import React, { useState } from "react";
import './form.css';

function Form({ agregarCita }) {
  const [formulario, setFormulario] = useState({
    mascota: '',
    dueño: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formulario).some(campo => campo.trim() === '')) {
      setError(true);
      return;
    }

    setError(false);
    agregarCita(formulario);

    setFormulario({
      mascota: '',
      dueño: '',
      fecha: '',
      hora: '',
      sintomas: ''
    });
  };

  return (
    <div className="txt">
      <form onSubmit={handleSubmit}>
        {error && <p className="error">Todos los campos son obligatorios</p>}

        <label>Nombre Mascota</label>
        <input type="text" name="mascota" value={formulario.mascota} onChange={handleChange} />

        <label>Nombre Dueño</label>
        <input type="text" name="dueño" value={formulario.dueño} onChange={handleChange} />

        <label>Fecha</label>
        <input type="date" name="fecha" value={formulario.fecha} onChange={handleChange} />

        <label>Hora</label>
        <input type="time" name="hora" value={formulario.hora} onChange={handleChange} />

        <label>Síntomas</label>
        <textarea name="sintomas" value={formulario.sintomas} onChange={handleChange} />

        <button type="submit">Agregar Cita</button>
      </form>
    </div>
  );
}

export default Form;
