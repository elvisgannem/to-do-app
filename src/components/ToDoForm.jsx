import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';

const ToDoForm = ({tareas, cambiarTareas}) => {

    const [inputTarea, cambiarInputTarea] = useState('');

    const handleInput = (e) => {
        cambiarInputTarea(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

//Toma todo el valor de las tareas ..., y agrega otro objeto que contiene la información de la nueva tarea.

            cambiarTareas([...tareas, {
            id:uuidv4(), //Cada que la función se ejecuta, genera un identificador único.
            texto: inputTarea,
            completada: false
        }]);
        cambiarInputTarea('');
    }

    return ( 
        <form action="" className="form-to-do" onSubmit={handleSubmit}>
            <input 
            type="text" 
            className="form-to-do__input"
            placeholder="Escribe una tarea"
            value={inputTarea}
            onChange={(e) => handleInput(e)}
            />

            <button 
            type="submit" 
            className="form-to-do__btn"
            >
                <FontAwesomeIcon 
                icon={faPlusSquare} className="form-to-do__icon-btn"/>
            </button>
        </form>
     );
}
 
export default ToDoForm;