import React from 'react'
import './RuteoContainer.css'

const RuteoContainer = ({producto: {name, categoria}}) => {
  return (
    <div className='ruteo'>
      <div className='box-ruteo'>Home</div>
      <div className='box-ruteo'>Productos</div>
      <div className='box-ruteo'>{categoria}</div>
      <div className='box-name'>{name}</div>
    </div>
  )
}

export { RuteoContainer } 