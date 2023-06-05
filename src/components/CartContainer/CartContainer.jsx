import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore"
import { useState } from "react"
import './CartContainer.css'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


export const CartContainer = () => {
    const {cartList, vaciarCarrito, precioTotal, eliminarProducto,} = useCartContext()
    const [dataForm, setDataForm] = useState({
      name: '',
      phone: '',
      email: ''
  })

  const generarOrden = (evt)=>{
      evt.preventDefault()

      const order = {}
      order.buyer = dataForm
      order.items = cartList.map(({name, id, price, cantidad}) => ({id, name, price, cantidad}))
      order.total = precioTotal()
      // console.log(order)

      // insertar la orden a firebase -> firestore(productos, etc..)
      const dbFirestore = getFirestore()
      const ordersCollection = collection(dbFirestore, 'orders')

      addDoc(ordersCollection, order)
      .then(resp => console.log(resp.id)
        )
      .catch(err => console.log(err))
      .finally(()=> {
        vaciarCarrito()
        setDataForm({
            name: '',
            phone: '',
            email: ''
        })
      })

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 8000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: ('Orden Creada: ID de la orden:') 
      })
      // actualizar update
      
      // const queryDoc = doc(dbFirestore, 'productos', 'oF5JEM8kPSGRoB2Ucz1i')
      // const queryDoc2 = doc(dbFirestore, 'productos', '4GlOn8NgTU3V8s16NTgr')
      

      // updateDoc(queryDoc, {
      //     stock: 0
      // })
      // .finally(() => console.log('finalizó la actualización'))

      // borrado lógico
      // updateDoc(queryDoc, {
      //     isActive: false
      // })
      // .finally(() => console.log('finalizó la actualización'))

      // const batch = writeBatch(dbFirestore)
      // batch.update(queryDoc, {
      //     stock: 150
      // })
      // batch.update(queryDoc2, {
      //     stock: 100
      // })
      // // batch.set()

      // batch.commit()

      
  }

  const handleOnChange = (evt)=>{
      console.log('nombre del input',evt.target.name)
      console.log('valor del input',evt.target.value)
      setDataForm({
          ...dataForm,
          [evt.target.name]: evt.target.value
      })
  }


    
  return (
    <div>
        <div className='Secciones'>
            <h2 style={{color: 'red'}}>CARRITO DE COMPRAS</h2>
        </div>
        { cartList.length !== 0 ?
        <>
        {cartList.map(product =>(
                        <div key={product.id} className="card items">
                        <img src={product.foto} className="imagenes" alt="imagen-card" />
                        <div className="d-flex row">
                            <h6>{product.name}</h6>
                            <div className='box-item-stock'>
                                <p style={{marginRight:'10px', marginTop:'-2px'}}>Stock</p>
                                <h5 style={{color: 'rgb(107, 215, 97)'}}>DISPONIBLE</h5>
                            </div>  
                            <p className="precio">${product.price}</p>
                            <p className="precio">CANTIDAD: {product.cantidad}</p>
                            <button onClick={()=> eliminarProducto(product.id)} className="eliminar"> X </button>
                            <div className="detalle-precio-item">
                            </div>
                        </div>
                    </div>
        ))}
            <button className='vaciarCarro' onClick={vaciarCarrito}> Vaciar el Carrito </button>

            <h2 className='precioTotal'>Total: ${precioTotal()}</h2>

            <div className='Secciones'>
                <h2 style={{color: 'red'}}>ORDEN DE COMPRA</h2>
            </div>

            <form onSubmit={generarOrden}>
                <div className='d-flex row justify-content-center'>
                    <input className='inputOrden'
                        type='text' 
                        name="name" 
                        onChange={handleOnChange}
                        value={dataForm.name} 
                        placeholder="ingrese su nombre" 
                    /> 
                    <input className='inputOrden'
                        type='text' 
                        name="phone" 
                        onChange={handleOnChange}
                        value={dataForm.phone} 
                        placeholder="ingrese su celular" 
                    /> 
                    <input className='inputOrden'
                        type='text' 
                        name="email" 
                        onChange={handleOnChange}
                        value={dataForm.email} 
                        placeholder="ingrese su email" 
                    /> 
                    <input className='inputOrden'
                        type='text' 
                        name="email" 
                        onChange={handleOnChange}
                        value={dataForm.email} 
                        placeholder="ingrese nuevamente su email" 
                    /> 

                    <button className="btn btn-outline-danger btnOrden">Generar Orden de Compra</button>
                </div> 
            </form>
      </>

        :
          <div>
            <h2 className='tituloCarritoVacio'>Ups.. No hay productos en el carrito aún!</h2>
            <Link to='/products' className='volver'>Ir al catalogo de productos</Link>
          </div>
        }   
        </div>)
    }
