import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemsListContainer'
import { NavBar } from './components/NavBar/NavBar'


function App() {
  const [count, setCount] = useState(0)
  let titulo = `Hasta pronto.`

  return (
    <div className="">

      < NavBar />
      < ItemListContainer titulo={titulo}/>
    </div>
  )
}

export default App
