import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({producto}) => {
  return (
    <>
      <div className="detalle">
        <div className="caja1">
          <img src={producto.foto} className="imagenDetail"/>
        </div>
        <div className="caja2">ererrrr</div>
        <div className="caja3">tretttrrtrtrt</div>
        <div className="caja4">cuacua</div>
        <div className="caja5">ccinccinco</div>
      </div>
    </>
  )
}

export { ItemDetail }