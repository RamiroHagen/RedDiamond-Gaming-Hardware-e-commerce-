import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './Item.css'


const Item = ({producto: {id, foto, name, price, categoria}}) => {
    return(
        < Link to={`/detail/${id}`} >
            <div key={id} className="card items">
                <img src={foto} className="imagenesProductos" alt="imagen-card" />
                <div className="d-flex row">
                    <h6>{name}</h6>
                    <div className='box-item-stock'>
                        <p style={{marginRight:'10px', marginTop:'-2px'}}>Stock</p>
                        <h5 style={{color: 'rgb(107, 215, 97)'}}>DISPONIBLE</h5>
                    </div>  
                    <p className="precio">${price}</p>
                    <div className="detalle-precio-item-Productos">
                    </div>
                </div>
            </div>
         </ Link >
    )
}
  export { Item }