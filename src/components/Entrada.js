import React from 'react'
import '../stylesheets/inputPantalla.css'
export default function Entrada({ entrada }) {
  return (
    <div >
      <input className="input" defaultValue = {entrada}/>
    </div>
  )
}
