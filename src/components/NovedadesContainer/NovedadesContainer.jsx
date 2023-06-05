import React from 'react'
import './NovedadesContainer.css'
import { Novedades } from './../Novedades/Novedades'
import { useEffect, useState } from "react"
import { Link, useParams} from "react-router-dom"
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'

const NovedadesContainer = () => {
  const [productos, setProductos] = useState([])
  const [producto, setProducto] = useState({})
  const [isLoading, setIsLoading] = useState(true)
// pid
   // UseEffect -> traer un proudcto por pid -> guardar en el estado
   useEffect(()=>{
       const dbFirestore     = getFirestore()
       const queryCollection = collection(dbFirestore, 'Productos')
 
           getDocs(queryCollection)
               .then(res => setProductos(  res.docs.map(producto => ( { id: producto.id, ...producto.data() } )) ))
               .catch( error => console.log(error) )
               .finally(()=> setIsLoading(false))
               
           const queryCollectionFiltered = query(
               queryCollection, 
               where('oferta','==', 'oferta'),
               // orderBy('price', 'asc'),
           )
   
           getDocs(queryCollectionFiltered)
               .then(res => setProductos(  res.docs.map(producto => ( { id: producto.id, ...producto.data() } )) ))
               .catch( error => console.log(error) )
               .finally(()=> setIsLoading(false))
       }, [])


  return (
    <Novedades productos={productos}/>
  )
}

export { NovedadesContainer } 