import React from 'react'
import { ItemNovedades } from '../ItemNovedades/ItemNovedades'

const Novedades = ({productos}) => {
  return (
    <>
    <div className='Secciones'>
    <h2 style={{color: 'red'}}>NOVEDADES</h2>
  </div>

    <div className='novedades'>

      <div className="productosNovedades">
        {productos.map( producto => 
        <ItemNovedades key={producto.id} producto={producto}/>
      )}  
      </div>
     
    </div>
    </>
  )
}

export { Novedades }
