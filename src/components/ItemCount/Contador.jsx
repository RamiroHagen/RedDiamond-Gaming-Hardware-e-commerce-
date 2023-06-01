import React, { useState } from 'react'
import ItemContador from './ItemContador'
import { Link, NavLink, useParams } from "react-router-dom"
import { useCartContext } from '../../context/CartContext'
import './Contador.css'

export const Contador = ({producto}) => {
    const [isCant, setIsCant] = useState(false)

    const {addToCart, cartList} = useCartContext()

    const onAdd = (cantidad) =>{
        console.log('cantidad seleccionada: ', cantidad)
        addToCart( { ...producto, cantidad } )
        setIsCant(true)
    }

    console.log(cartList)

  return (
    <>
        {
            !isCant ?
                <ItemContador onAdd={onAdd}/>
                :
                <> 
                    <div className='d-flex align-items-center row'>
                        <Link to= {'/cart'} className='button-carrito'> Terminar Compra </Link>
                        <Link to= {'/products'} className='button-carrito'> Seguir Comprando </Link>
                    </div>
                </>
        }

    </>
  )
}
