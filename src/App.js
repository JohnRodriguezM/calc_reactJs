import './App.css';
//importacion del useState
import { useState } from 'react';
// importacion de evaluate para mathsjs
import { evaluate } from 'mathjs';
import Boton from './components/Boton';
import Entrada from './components/Entrada';
import Btnclear from './components/Btnclear';


const STYLE_H_ONE = {
  marginTop: '15px',
  textAlign: 'center',
}


function App() {
  //definicion del estado
  const [input, setInput] = useState('')
  // manejador del agregar números
  const handlerInput = val => {
    let result = (input + val);
    setInput(result);
  };

  const handlerResult = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      return alert("ingresa un valor")
    }
  }

 

  return (
    <main className="App">
      <h1 style={STYLE_H_ONE}>Calculadora Interactiva con React</h1>
      <div className="container-calculadora">
        <Entrada entrada={input} />
        <div className="fila-calculadora">
          <Boton clickear={handlerInput}>1</Boton>
          <Boton clickear={handlerInput} >2</Boton>
          <Boton clickear={handlerInput} >3</Boton>
          <Boton clickear={handlerInput} >+</Boton>
        </div>
        <div className="fila-calculadora">
          <Boton clickear={handlerInput} >4</Boton>
          <Boton clickear={handlerInput} >5</Boton>
          <Boton clickear={handlerInput} >6</Boton>
          <Boton clickear={handlerInput} >-</Boton>
        </div>
        <div className="fila-calculadora">
          <Boton clickear={handlerInput} >7</Boton>
          <Boton clickear={handlerInput} >8</Boton>
          <Boton clickear={handlerInput} >9</Boton>
          <Boton clickear={handlerInput} >*</Boton>
        </div>
        <div className="fila-calculadora">
          <Boton clickear={handlerResult}>=</Boton>
          <Boton clickear={handlerInput} >0</Boton>
          <Boton clickear={handlerInput} >.</Boton>
          <Boton clickear={handlerInput} >/</Boton>
        </div>
        <Btnclear
          clickResult={() => { setInput('') }}
        />
      </div>
    </main>
  );
}

export default App;
