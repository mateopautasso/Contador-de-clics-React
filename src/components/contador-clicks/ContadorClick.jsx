import React from "react";
import Boton from "./boton/Boton";
import Contador from "./contador/Contador";
import "./ContadorClick.css";
import { useState } from "react";

function ContadorClic() {

    let [numClic, setNumClic] = useState(0); 

    const sumarClic = () => {
        setNumClic(numClic + 1);
    };

    const reiniciarContador = () => {
        setNumClic(0);
    };
    
    return (
        <div className="contador__container">
            <Contador
                numClic={numClic}
            />
            <Boton 
                text="Clic" 
                isButtonClick={true}
                manejarClic={sumarClic}/>
            <Boton 
                text="Reiniciar" 
                isButtonClick={false}
                manejarClic={reiniciarContador}/>
        </div>
    ) 
}

export default ContadorClic;