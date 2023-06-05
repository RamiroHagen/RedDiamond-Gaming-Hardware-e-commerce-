import React from 'react'
import { useContador } from '../../hooks/useContador'

const ItemContador = ({inital=1, stock=5, onAdd }) => {

    const { counter, sumaContador, restaContador } = useContador(inital, 1, stock)
    
    return (
    <>
        <button className='button-contador' onClick={sumaContador}> + </button>
        <label className='button-contador'>{counter}</label>
        <button className='button-contador' onClick={restaContador}> - </button>

        <button className='agregarCarritoText' onClick={() => {onAdd(counter)}}>Agregar al Carrito</button>
    </> 
    )
}

export default ItemContador