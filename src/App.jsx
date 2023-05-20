import { userRef, useState, useEffect } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemsListContainer'
import { NavBar } from './components/NavBar/NavBar'
import { BuscadorContainer } from './components/BuscadorContainer/BuscadorContainer'
import { Menu } from './components/Menu/Menu'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Banner } from './components/Banner/Banner'
import { Footer } from './components/Footer/Footer'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import { CartContextProvider } from './context/CartContext'
import { CartContainer } from './components/CartContainer/CartContainer'






function App() {
  const [count, setCount] = useState(0)

  return (
    <CartContextProvider>
      <Router>
        < NavBar />
        < BuscadorContainer />

          <Routes>
            <Route 
              path='/' 
              element={< Menu />} 
            />
          
            <Route 
              path='/products'
              element={<ItemListContainer />} 
            />

            <Route
            path='/categorias/:categoria' 
            element={< ItemListContainer />}
            />

            <Route 
              path='/detail/:pid' 
              element={< ItemDetailContainer />}
            />  

            <Route 
              path='/cart' 
              element={< CartContainer />}
            />  

            <Route path='*' element={ <Navigate to='/' /> } />            
          </Routes>

        < Banner />  
        < Footer />
      </Router>
    </CartContextProvider>            
  )
}

export default App
