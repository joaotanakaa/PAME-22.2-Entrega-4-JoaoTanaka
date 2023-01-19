import React from 'react'
import Header from "../header"
import SearchBar from "../search-bar"
import ProductList from "../product-list"
import Footer from "../footer"
import "./styles.css"


function Site() {
  return (
    <div className='site'>
        
        <Header></Header>
        <SearchBar></SearchBar>
        <ProductList></ProductList>
        <Footer></Footer>

    </div>
  )
}

export default Site