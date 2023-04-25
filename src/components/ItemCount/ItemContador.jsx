import React from 'react'
import { useContador } from '../../hooks/useContador'

const ItemContador = ({inital=1, stock=5, onAdd }) => {

    const { counter, sumaContador, restaContador } = useContador(inital, 1, stock)
    
    return (
    <>
        <button onClick={sumaContador}> + </button>
        <label>{counter}</label>
        <button onClick={restaContador}> - </button>

        <button>Agregar al Carrito</button>
    </>
    )
}

export default ItemContador