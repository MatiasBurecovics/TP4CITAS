import './index.css';
import React from 'react';

function Tarjetas({ citas }) {
  const eliminarCita = (index) => {
    // Lógica para eliminar la cita
  };

  return (
    <div>
      <div className="one-half column">
        <h2 className="aizquierda">Administra tus citas</h2>
        {citas.length === 0 ? (
          <p>No hay citas</p>
        ) : (
          citas.map((cita, index) => (
            <div className="cita aizquierda" key={index}>
              <p>Mascota: <span>{cita.mascota}</span></p>
              <p>Dueño: <span>{cita.propietario}</span></p>
              <p>Fecha: <span>{cita.fecha}</span></p>
              <p>Hora: <span>{cita.hora}</span></p>
              <p>Síntomas: <span>{cita.sintomas}</span></p>
              <button className="button eliminar u-full-width" onClick={() => eliminarCita(index)}>
                Eliminar ×
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Tarjetas;