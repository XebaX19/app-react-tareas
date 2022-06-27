import React, { useState } from 'react';
import '../css/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = (e) => {
    setInput(e.target.value); //e.target.value contiene el valor actual del campo
  };

  const manejarEnvio = (e) => {
    e.preventDefault(); //Para que no se recargue la página con el envío del form

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };

    props.onSubmit(tareaNueva); //Pasamos la tarea en una props
  };

  return (
    <form className='tarea-formulario'
      onSubmit={ manejarEnvio }>
      <input 
        className='tarea-input'
        type='text'
        placeholder='Escribe una tarea'
        name='texto' 
        onChange={ manejarCambio } />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;