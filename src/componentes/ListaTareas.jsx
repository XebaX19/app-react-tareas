import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../css/ListaTareas.css';

function ListaTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();

      const tareasActualizadas = [tarea, ...tareas]; //agregamos la nueva tarea al principio del arreglo
      setTareas(tareasActualizadas);
    }
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  return (
    //Fragmentos <></>: etiquetas vacias para que se pueda definir la estructura y luego se elimina al renderizar el HTML
    <>
      <TareaFormulario onSubmit={ agregarTarea } />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) => 
            <Tarea
              key={ tarea.id } //Prop Nativa: para que React sepa el orden de cada elemento de la lista y no lo cambie al actualizarlo
              id={ tarea.id }
              texto={ tarea.texto }
              completada={ tarea.completada }
              completarTarea={ completarTarea }
              eliminarTarea={ eliminarTarea } />
          )
        }
      </div>
    </>
  );
}

export default ListaTareas;