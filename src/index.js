import React from "react"
import ReactDom from "react-dom"
import { useRoutes, A } from "hookrouter"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"

import Home from "./Home"
import Cart from "./Cart"
import productsReducer from "./store/reducers/products"

import "./App.css"

const rootReducer = combineReducers({
  products: productsReducer
})

const store = createStore(rootReducer)

const routes = {
  "/": () => <Home />,
  "/cart": () => <Cart />
}

function App() {
  return (
    <div className="App">
      <A href="/">Home</A>
      <A href="/cart">Cart</A>
      {useRoutes(routes)}
    </div>
  )
}

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
