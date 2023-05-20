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
        
        // agregar logica de producto repetido
        setCartList([
            ...cartList,
            newProduct
        ])
    }

    // catidad total de productos
    // precio total de la compra
    // eliminar por item

    // vaciarCarrtio
    const vaciarCarrito = () => {
        setCartList([])
    }

    return (
       <CartContext.Provider value={{
            // estado y func inyectados
            cartList,
            addToCart,
            vaciarCarrito
       }}>
            {children}
       </CartContext.Provider>
    )
}
