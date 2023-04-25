import { useEffect, useState } from "react"
//import { mFetch } from "../../mFetch"//
import { Item } from '../Item/Item'

const ItemList = ({productos}) =>{
  return(

    <div style={{
      display: "flex",
      flexDirection: 'row',
      flexWrap: "wrap",
      justifyContent: "space-around"
  }}>

      {productos.map( producto => 
        <Item key={producto.id} producto={producto}/>
      )}
      
    </div>
  )
}

  export { ItemList }