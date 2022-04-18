
import React from 'react';
import '../stylesheets/boton.css'


function Boton (props){
  const esOperador = valor => {
    return isNaN(valor)
  };
  // de manera general todos los botones van a tener la clase boton-contenedor, sin embargo si son botón de operador se les va a añadir la calse operador y si no simplemente no se agrega nada
  return (
  <button
  className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
    onClick={() => props.clickear(props.children)}>
    {props.children}
  </button>

  )
};

export default Boton


