import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';

const Header = ({mostrarCompletadas, cambiarMostrarCompletadas}) => {
    const [black, setBlack] = useState(false)

    const toggleCompletadas = () => {
        cambiarMostrarCompletadas(!mostrarCompletadas);
    }

    const toggleColor = () => {
        setBlack(!black)
    }

    return (
        <header className={black ? 'header black-header' : 'header'}>
            <h1 className="header__titulo">Lista de Tareas</h1>
            <div className={black ? 'blue-theme' : 'black-theme'} onClick={toggleColor}></div>
            {mostrarCompletadas ? 
            <button 
            className={black ? 'header__boton black-button' : 'header__boton'} 
            onClick={() => toggleCompletadas()}
            >
                Ocultar tareas completadas
                <FontAwesomeIcon icon={faEyeSlash} className="header__icono-boton" />
            </button>
            :
            <button 
            className={black ? 'header__boton black-button' : 'header__boton'}
            onClick={() => toggleCompletadas()}
            >
                Mostrar tareas completadas
                <FontAwesomeIcon icon={faEye} className="header__icono-boton" />
            </button>
            }
        </header>
    );
}
 
export default Header;