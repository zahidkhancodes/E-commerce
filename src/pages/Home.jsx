import React from 'react'
import Sidebar from '../components/layout/sidebar'
import Navbar from '../components/layout/Navbar'
import ProductGrid from '../components/product/ProductGrid'

const Home = (elem) => {
  return (

    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <ProductGrid prod={elem.prod}/>
      </div>
    </div>
  )
}

export default Home