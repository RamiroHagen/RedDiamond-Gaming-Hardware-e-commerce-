import React from 'react'

function ItemDescription({producto}) {
  return (
    <div className='d-flex justify-content-center'>
      <div className='box-description '>
        <h3 style={{textAlign:'center'}}>Descripción</h3>
        <div className='subrrallado'>
        </div>
        <p>{producto.descripcion}</p>
      </div>
    </div>
  )
}

export { ItemDescription } 