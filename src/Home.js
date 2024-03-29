import React from "react"
import { useSelector } from "react-redux"

import Item from "./Item"

const Home = () => {
  const products = useSelector(state => state.products.products)

  const renderProducts = () => {
    return products.map(product => {
      return (
        <Item
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      )
    })
  }

  return (
    <div className="home">
      <h1>Home</h1>
      <div className="products">{renderProducts()}</div>
    </div>
  )
}

export default Home
