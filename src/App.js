import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ListaTareas from './components/ListaTareas';

const App = () => {
  //Tareas guardadas de localstorage.
  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];

  //Estado de las tareas obtenido de localstorage.
  const [tareas, cambiarTareas] = useState (tareasGuardadas);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas)); //guardando el elemento dentro del espacio local. 2do parametro: transformar tareas a cadena de texto formato JSON
     
  }, [tareas]) //el codigo se ejecuta la primera vez y cuando las tareas cambian.

  //Una variable que accede a LocalStorage para ver si mostrarCompletadas es null.
  let configMostrarCompletadas = '';
  if(localStorage.getItem('mostrarCompletadas') === null){
    //Si null, el usuario no tiene cnfiguracion guardada dentro de localstorage, entonces, quiero asignar una.
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }
  //Estado de mostrarCompletadas.
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas); 

  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
     
  }, [mostrarCompletadas])

  return (
    <div className="contenedor">
      <Header 
      mostrarCompletadas={mostrarCompletadas}
      cambiarMostrarCompletadas={cambiarMostrarCompletadas}/>
      <ToDoForm tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas 
      tareas={tareas} 
      cambiarTareas={cambiarTareas} 
      mostrarCompletadas={mostrarCompletadas}/> {/*recibe tareas como propiedad*/}
    </div>
  );
}

export default App;
