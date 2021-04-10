import React from 'react'
// components
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
// items
import cartItems from './cart-items'

import { createStore } from 'redux'
import reducer from './reducer'
// react-redux - Provider wraps app, connect - used in components
import { Provider } from 'react-redux'

//initial store
const intialStore = {
  cart: cartItems,
  total: 99.99,
  amount: 5,
}

// store.getState() -
// reducer here is imported at the top
const store = createStore(reducer, intialStore)

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  )
}

export default App
