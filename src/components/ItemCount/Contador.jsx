import React, { useState } from 'react'
import ItemContador from './ItemContador'
import { Link, NavLink, useParams } from "react-router-dom"
import { useCartContext } from '../../context/CartContext'

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
                    <Link to= {'/cart'} className='button-contador'> Terminar Compra </Link>
                    <Link to= {'/products'} className='button-contador'> Seguir Comprando </Link>
                </>
        }

    </>
  )
}
