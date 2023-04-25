import { userRef, useState, useEffect } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemsListContainer'
import { NavBar } from './components/NavBar/NavBar'
import ItemContador from './components/ItemCount/ItemContador'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      < NavBar />

        <Routes>
          <Route 
            path='/' 
            element={<ItemListContainer />} 
          />
        
          <Route 
            path='/categoria/:categoria' 
            element={<ItemListContainer />} 
          />

          <Route 
            path='/detail/:pid' 
            element={< ItemDetailContainer />}
          />   

          <Route path='*' element={ <Navigate to='/' /> } />            
        </Routes>

      < ItemContador />
      {/* <Footer /> */}
    </Router>            
  )
}

export default App
