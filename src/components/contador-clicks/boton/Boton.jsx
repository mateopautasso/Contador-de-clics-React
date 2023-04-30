import React from "react";
import './Boton.css'

function Boton({ text, isButtonClick, manejarClic }){
    return (
        <button 
            className={isButtonClick ? 'boton-clic' : 'boton-reiniciar'}
            onClick={manejarClic} >
            {text}
        </button>
    )
}

export default Boton;