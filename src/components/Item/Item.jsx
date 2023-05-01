import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './Item.css'


const Item = ({producto: {id, foto, name, price, categoria}}) => {
    return(
        < Link to={`/detail/${id}`} >
            <div key={id} className="card items">
                <img src={foto} className="imagenes" alt="imagen-card" />
                <div className="d-flex row">
                    <h5>{name}</h5>
                    <h5>{price}</h5>
                    <button className="button-verMas">Ver más</button>
                </div>
            </div>
         </ Link >
    )
}
  export { Item }