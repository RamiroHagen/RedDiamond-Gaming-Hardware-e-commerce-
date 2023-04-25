import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './Item.css'


const Item = ({producto: {id, foto, name, price, categoria}}) => {
    return(
        < Link to={`/detail/${id}`} >
            <div key={id} className="card items">
                <img src={foto} className="card-img-top imagenes" alt="imagen-card" />
                <div className="card-body">
                    <h6>{name}</h6>
                    <label>Precio: {price}</label>
                    <label>Categoria: {categoria}</label>
                </div>
            </div>
         </ Link >
    )
}
  export { Item }