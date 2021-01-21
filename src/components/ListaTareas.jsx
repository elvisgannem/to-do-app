import React from 'react';
import Tareas from './Tareas';

const ListaTareas = ({tareas, cambiarTareas, mostrarCompletadas}) => {

    const toggleCompletada = (id) => {
        cambiarTareas(tareas.map((tarea) => {
            if(tarea.id === id){ //pregunta por cada tarea si el id es el mismo que tiene la funcion toggleCompletada.
                return {...tarea, completada: !tarea.completada}
            }
            return tarea;
        }));
    }

    const editarTarea = (id, nuevoTexto) => {
        cambiarTareas(tareas.map((tarea) => {
            if(tarea.id === id){ //pregunta por cada tarea si el id es el mismo que tiene la funcion toggleCompletada.
                return {...tarea, texto: nuevoTexto}
            }
            return tarea;
        }));
    }

    const borrarTarea = (id) => {
        cambiarTareas(tareas.filter((tarea) => { //filter permite que si una tarea es verdadera, no la devuelve en el arreglo. 
            if(tarea.id !== id){
                return tarea;
            }
            return;
        }));
    }

    return (
        <ul className="lista-tareas">
            {/* Si la cantidad de tareas es mayor a cero, ejecutar: */}
            {tareas.length > 0 ? 
                tareas.map((tarea) => {
                if(mostrarCompletadas){
                    return <Tareas 
                                key ={tarea.id} 
                                tarea={tarea}
                                toggleCompletada = {toggleCompletada} 
                                editarTarea={editarTarea}
                                borrarTarea={borrarTarea}
                                //pasando las funciones y propiedades a Tareas
                            />   
                            //si no está completada, la devuelve al arreglo.
                } else if (!tarea.completada) {
                    return <Tareas 
                    key ={tarea.id} 
                    tarea={tarea}
                    toggleCompletada = {toggleCompletada} 
                    editarTarea={editarTarea}
                    borrarTarea={borrarTarea}/>
                }    
                return;

            })
            : <div className="lista-tareas__mensaje">No hay tareas agregadas</div>
        }
        </ul>
    );
}
 
export default ListaTareas;