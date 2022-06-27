import './App.css';
import freeCodeCampLogo from './imagenes/freeCodeCamp-logo.png';
import ListaTareas from './componentes/ListaTareas.jsx';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={ freeCodeCampLogo }
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
