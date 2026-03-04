import React from 'react'
import Sidebar from '../components/layout/sidebar'
import Navbar from '../components/layout/Navbar'
import ProductGrid from '../components/product/ProductGrid'
import { useState } from 'react';

const Home = (elem) => {
  const [cartValue, setCartValue] = useState(0)
  const addToCart = () => {
    setCartValue(prev => prev + 1)
  }

  return (

    <div className="app-container">
      <Sidebar cartValue={cartValue} />
      <div className="main-content">
        <Navbar />
        <ProductGrid prod={elem.prod} addToCart={addToCart} />
      </div>
    </div>
  )
}

export default Home