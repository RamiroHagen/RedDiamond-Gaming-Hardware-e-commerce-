import React from 'react'
import './Buscador.css'
const Buscador = () => {
  return (
    <div className='backgroundBuscador'>
    <form>
      <input className='buscador' type="text" id="nombre" name="nombre">  
      </input>
    </form>

    </div>
  )
}

export { Buscador }