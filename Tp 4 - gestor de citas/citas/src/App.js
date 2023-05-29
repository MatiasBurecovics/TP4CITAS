import React, { useState } from 'react';
import Formulario from './Formulario';
import Tarjetas from './Tarjetas';

const App = () => {
  const [citas, setCitas] = useState([]);
  return (
    <div>
      <Formulario />
      <Tarjetas citas={citas}/>
    </div>
  );
};

export default App;
