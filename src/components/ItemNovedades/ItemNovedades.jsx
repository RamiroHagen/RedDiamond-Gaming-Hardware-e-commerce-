import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemNovedades.css'


const ItemNovedades = ({producto: {id, foto, name, price, oferta}}) => {
    return(
            < Link to={`/detail/${id}`} >
                <div key={id} className="itemsNovedades">
                    <img src={foto} className="imagenesNovedades" alt="imagen-card" />
                    <div className="d-flex row justify-content-center">
                        <h6 style={{fontSize:'larger', marginTop:'10px', marginLeft:'8px'}}>{name}</h6>
                        <div className='box-item-stock' style={{marginLeft:'25px'}}>
                            <p style={{marginRight:'10px', marginTop:'-2px'}}>Stock</p>
                            <h5 style={{color: 'rgb(107, 215, 97)'}}>DISPONIBLE</h5>
                        </div>  
                        <div className="nuevo">
                            Nuevo!
                        </div>
                        <p className="bottom">${price}</p>
                        <div className="bottom detalle-precio-item">
                        </div>
                    </div>
                </div>
            </ Link >
    )
}
  export { ItemNovedades }