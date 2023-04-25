import { useEffect, useState } from "react"
import { mFetch } from "./asyncMock"
import { Link, useParams} from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { ItemList } from "../ItemList/ItemList"



export const ItemListContainer = ({greeting}) => {
   const [productos, setProductos] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   const { categoria } = useParams() // pid
    // UseEffect -> traer un proudcto por pid -> guardar en el estado

    console.log(categoria)

   useEffect(()=>{
        if (!categoria){
            mFetch()
            // .then(res => res.json())
            .then( resultado=> { 
                setProductos(resultado)
            })
            // .then(resul => console.log(resul))
            .catch( error => console.log(error) )
            .finally(()=> setIsLoading(false))
        }else{
            mFetch()
            // .then(res => res.json())
            .then( resultado=> { 
                setProductos(resultado.filter(producto => producto.categoria === categoria))
            })
            // .then(resul => console.log(resul))
            .catch( error => console.log(error) )
            .finally(()=> setIsLoading(false))
        }
   }, [categoria])

   console.log(productos)

   //map <- nuevo array transformadio mediante una función transformadora
   // [1,2,3,4,5,6,7] <- map <- [<li key=1 >1</li>, <li key=2 >2</li>, <li key=3 >3</li>, ....]
return (    
  isLoading ?
        <h2>Cargando...</h2>
    : 
        < ItemList productos={productos} />
   )
}

export default ItemListContainer