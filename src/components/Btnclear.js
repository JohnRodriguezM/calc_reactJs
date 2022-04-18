import React from 'react'
import '../stylesheets/BotonClear.css'
export default function Btnclear(props) {
  return (
    <button 
    onClick={props.clickResult}
    className="btnclear">Clear calculator
    </button>
  )
}
