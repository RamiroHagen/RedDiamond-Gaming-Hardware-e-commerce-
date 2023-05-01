import { useEffect, useState } from "react"
//import { mFetch } from "../../mFetch"//
import { Item } from '../Item/Item'
import { Categorias } from "../Categorias/Categorias"

const ItemList = ({productos}) =>{
  return(

    <div>
      {productos.map( producto => 
        <Item key={producto.id} producto={producto}/>
      )}  
    </div>
  )
}

  export { ItemList }