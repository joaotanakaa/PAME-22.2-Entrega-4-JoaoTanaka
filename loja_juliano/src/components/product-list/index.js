import React from 'react'
import "./styles.css"
import calcas from "../imagens/calcas.jfif"
import camisetas from "../imagens/camisetas.jfif"
import casaco from "../imagens/casaco.jfif"
import shorts from "../imagens/shorts.webp"

 




function ProductList() {
  return (
    <div className='flexbox'>
        <div className='galeria'>
            <img src={calcas} alt="Calça Jeans" width="175" height="100" />
          <div class="descricao">Categoria, tamanho, material, preço</div>
        </div>

        <div className='galeria'>          
            <img src={casaco} alt="Casaco básico" width="175" height="100" />
          <div class="descricao">Categoria, tamanho, material, preço</div>
        </div>
          
        <div className='galeria'>
            <img src={camisetas} alt="Camisetas Básicas" width="175" height="100" />
          <div class="descricao">Categoria, tamanho, material, preço</div>
        </div>

        <div className='galeria'>
            <img src={shorts} alt="Casaco básico" width="175" height="100" />          
          <div class="descricao">Categoria, tamanho, material, preço</div>
        </div>
    </div>
  )
}

export default ProductList