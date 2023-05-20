import React from 'react'
import { useCartContext } from '../../context/CartContext'
import './CartContainer.css'

export const CartContainer = () => {
    const {cartList, vaciarCarrito} = useCartContext()
    
  return (
    <div>
        {cartList.map(product =>(
                        <div key={product.id} className="card items">
                        <img src={product.foto} className="imagenes" alt="imagen-card" />
                        <div className="d-flex row">
                            <h6>{product.name}</h6>
                            <div className='box-item-stock'>
                                <p style={{marginRight:'10px', marginTop:'-2px'}}>Stock</p>
                                <h5 style={{color: 'rgb(107, 215, 97)'}}>DISPONIBLE</h5>
                            </div>  
                            <p className="precio">{product.price}</p>
                            <div className="detalle-precio-item">
                            </div>
                        </div>
                    </div>
        ))}

            <button onClick={vaciarCarrito}> Vaciar el Carrito </button>

    </div>
  )
}
