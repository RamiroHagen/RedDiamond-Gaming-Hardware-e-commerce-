import React from 'react'
import { NavLink } from 'react-router-dom'

const Categorias = () => {
  return (
    <>
    <div className='categorias'>

      <div>
        
        <h4 style={{textAlign:'center', margin:'30px'}}>Categorias</h4>

        <ul>
          <NavLink to='/categorias/sillasGamer'>
          <li>Sillas Gamers</li>
          </NavLink>
          <NavLink to='/categorias/perifericos'>
          <li>Perifericos</li>
          </NavLink>
        </ul>

      </div>

    </div>
    </>
  )
}

export { Categorias }