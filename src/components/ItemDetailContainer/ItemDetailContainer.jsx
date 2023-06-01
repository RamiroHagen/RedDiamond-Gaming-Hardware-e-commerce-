import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'
import { Loading } from "../Loading/Loading"

export const ItemDetailContainer = () => {
    // Estado para guardar un product
    const [ producto, setProducto ] = useState({})
       const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { pid } = useParams() // pid
    // UseEffect -> traer un proudcto por pid -> guardar en el estado

   // traer un producto(documento) -> ItemDetailContainer - id =>(pid)
     useEffect(()=>{
         const dbFirestore = getFirestore()
         const queryDoc = doc(dbFirestore, 'Productos', pid)

        getDoc(queryDoc) // -> getDocs  ()=>{}  { id: resp.id, ...resp.data() }
             .then( resp => setProducto( { id: resp.id, ...resp.data() } ) )
             .catch(err => console.log(err))
             .finally(()=> setIsLoading(false))
     },[])

    console.log(pid)
    return (
        <div>
            {isLoading ? 
                <Loading/>
                :
                <ItemDetail producto = {producto}/>
            }
        </div>
    )
}
