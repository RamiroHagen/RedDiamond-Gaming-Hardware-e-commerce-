import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { mFetch } from "../ItemListContainer/asyncMock"
import { Loading } from "../Loading/Loading"

export const ItemDetailContainer = () => {
    // Estado para guardar un product
    const [ producto, setProducto ] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { pid } = useParams() // pid
    // UseEffect -> traer un proudcto por pid -> guardar en el estado

    useEffect(() =>{
        mFetch(pid)
        .then(resp => setProducto(resp))
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
    }, [])

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
