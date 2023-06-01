import { createContext, useContext, useState } from "react"
// crear un contexto inicializado con []
// exportar app


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children})=> {
    // estados y funciones globales
    const [cartList, setCartList] = useState([])

    const addToCart = (newProduct)=>{
        // localStorage.setItem('cartList', cartList)
        // manejar con base de dato ? 
        const idx = cartList.findIndex(prod => newProduct. id === prod.id) 

        if (idx === -1) {
            setCartList([
                ...cartList,
                newProduct
            ])
        }else{
            cartList[idx].cantidad = cartList[idx].cantidad + newProduct.cantidad
            setCartList([ ... cartList ])
        }
        
        // agregar logica de producto repetido

    }

    // catidad total de productos
    const cantidadTotal = () => cartList.reduce((total, obProducto) => total += obProducto.cantidad, 0)
    // precio total de la compra
    const precioTotal = ()=> cartList.reduce((total, obProducto) => total += (obProducto.cantidad * obProducto.price), 0)
    // eliminar por item
    const eliminarProducto = (pid)=>{
        setCartList(cartList.filter(prod => prod.id !== pid))
    }
    // vaciarCarrtio
    const vaciarCarrito = () => {
        setCartList([])
    }

    return (
       <CartContext.Provider value={{
            // estado y func inyectados
            cartList,
            addToCart,
            vaciarCarrito,
            cantidadTotal,
            precioTotal,
            eliminarProducto
       }}>
            {children}
       </CartContext.Provider>
    )
}
