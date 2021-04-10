import React from 'react'
// components
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
// items
import cartItems from './cart-items'
// redux stuff
// store - stores data, think of state
// reducer - function that used to update store
// reducer -  takes 2 arguments: state, action
// state - old state/ state  before update
// action - what happened/ what update
// action - return updated state

import { createStore } from 'redux'
import reducer from './reducer'

// dispatch method -  send actions to the store
// actions (objects) - must have type proprty -  what kind of action
// don't mutate the state - redux build on immutability (copy)

//initial store
const intialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
}

// store.getState() -
// reducer here is imported at the top
const store = createStore(reducer, intialStore)

function App() {
  // cart setup

  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  )
}

export default App
