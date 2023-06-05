import React, { useState } from 'react';
import Formulario from './Formulario';
import Tarjetas from './Tarjetas';

function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (nuevaCita) => {
    //los 3 puntitos se utilizan para realizar una copia del arreglo citas y luego agregar el elemento nuevaCita al final de la copia.
    setCitas([...citas, nuevaCita]);
  };
  const eliminarCita = (index) => {
    const citasActualizadas = [...citas];
    citasActualizadas.splice(index, 1);
    setCitas(citasActualizadas);
  };

  //adentro de formulario y tarjetas paso los Prop
  return (
    <div className="App">
      <Formulario agregarCita={agregarCita} />
      <Tarjetas citas={citas } eliminarCita={eliminarCita} />
    </div>
  );
}


export default App;
