import { useEffect, useState } from "react"
import { Link, useParams} from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import './ItemListContainer.css'
import { Categorias } from "../Categorias/Categorias"
import { Loading } from "../Loading/Loading"
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'

export const ItemListContainer = ({greetins}) => {
   const [productos, setProductos] = useState([])
   const [producto, setProducto] = useState({})
   const [isLoading, setIsLoading] = useState(true)

   const { categoria } = useParams() // pid
    // UseEffect -> traer un proudcto por pid -> guardar en el estado
    useEffect(()=>{
        const dbFirestore     = getFirestore()
        const queryCollection = collection(dbFirestore, 'Productos')

        if (!categoria) {  
            getDocs(queryCollection)
                .then(res => setProductos(  res.docs.map(producto => ( { id: producto.id, ...producto.data() } )) ))
                .catch( error => console.log(error) )
                .finally(()=> setIsLoading(false))
        }else{
            const queryCollectionFiltered = query(
                queryCollection, 
                where('categoria','==', categoria),
                // orderBy('price', 'asc'),
                // limit(1)
            )
    
            getDocs(queryCollectionFiltered)
                .then(res => setProductos(  res.docs.map(producto => ( { id: producto.id, ...producto.data() } )) ))
                .catch( error => console.log(error) )
                .finally(()=> setIsLoading(false))
        }
    }, [categoria])

    console.log(categoria)

return (    
  isLoading ?
        <Loading/>
    :
    <>
        <div className='Secciones'>
            <h2 style={{color: 'red'}}>PRODUCTOS</h2>
        </div>
        
        <div style={{display: "grid", gridTemplateColumns: '30% 65%', margin: '5vw',}}>  
            < Categorias />

            < ItemList productos={productos} />
        </div>
    </>    
   )
}

export default ItemListContainer