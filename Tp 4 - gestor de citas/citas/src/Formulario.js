import './index.css';
import React, { useState, useEffect } from 'react';

function Formulario() {
  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  useEffect(() => {
    console.log('Estado actual:', { mascota, propietario, fecha, hora, sintomas });

    return () => {
      console.log('Componente desmontado');
    };
  }, [mascota, propietario, fecha, hora, sintomas]);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Datos enviados:', { mascota, propietario, fecha, hora, sintomas });

    setMascota('');
    setPropietario('');
    setFecha('');
    setHora('');
    setSintomas('');
  };

  return (
    <div>
      <div className="one-half column">
        <h2>Crear mi Cita</h2>
        <form onSubmit={handleSubmit}>
          <label>Nombre Mascota</label>
          <input
            type="text"
            name="mascota"
            className="u-full-width"
            placeholder="Nombre Mascota"
            value={mascota}
            onChange={(event) => setMascota(event.target.value)}
          />

          <label>Nombre Dueño</label>
          <input
            type="text"
            name="propietario"
            className="u-full-width"
            placeholder="Nombre dueño de la mascota"
            value={propietario}
            onChange={(event) => setPropietario(event.target.value)}
          />

          <label>Fecha</label>
          <input
            type="date"
            name="fecha"
            className="u-full-width"
            value={fecha}
            onChange={(event) => setFecha(event.target.value)}
          />

          <label>Hora</label>
          <input
            type="time"
            name="hora"
            className="u-full-width"
            value={hora}
            onChange={(event) => setHora(event.target.value)}
          />

          <label>Síntomas</label>
          <textarea
            name="sintomas"
            className="u-full-width"
            value={sintomas}
            onChange={(event) => setSintomas(event.target.value)}
          ></textarea>

          <button type="submit" className="u-full-width button-primary">
            Agregar Cita
          </button>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
