import React from 'react'
import "./styles.css"

function SearchBar() {
  return (
    <div>
      <div>
        <input className='search' type = 'text' placeholder='Buscar itens...'></input>
      </div>
      <div>             
        <button className='button1'>Shorts</button>                 
        <button className='button1'>Camisetas</button>                 
        <button className='button1'>Calças</button>                 
        <button className='button1'>Casacos</button>              
      </div>   
    </div>
    
  )
}

export default SearchBar