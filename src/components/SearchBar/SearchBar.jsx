import React from 'react'
import './SearchBar.css'
import { useEffect, useState } from "react"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const snapshot = await firebase
        .firestore()
        .collection('productos')
        .where('nombre', '>=', searchTerm)
        .get();

      const results = snapshot.docs.map((doc) => doc.data());
      setSearchResults(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='backgroundBuscador'>
      <input className='buscador'
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>O</button>
      {searchResults.map((product) => (
        <div key={product.nombre}>
          <h3>{product.nombre}</h3>
          <p>{product.descripcion}</p>
          <p>Precio: {product.precio}</p>
        </div>
      ))}
    </div>
  );
};

export { SearchBar }