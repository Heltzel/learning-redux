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
// dispatch method -  send actions to the store
// actions (objects) - must have type proprty -  what kind of action
// don't mutate the state - redux build on immutability (copy)

//initial store
const intialStore = {
  count: 0,
}

// reducer
function reducer(state, action) {
  console.log(state, action)
  if (action.type === 'DECREASE') {
    return { count: state.count - 1 }
  }
  if (action.type === 'INCREASE') {
    return { count: state.count + 1 }
  }
  if (action.type === 'RESET') {
    return { count: 0 }
  }
  return state
}

// store.getState() -
const store = createStore(reducer, intialStore)
store.dispatch({ type: 'DECREASE' })
store.dispatch({ type: 'INCREASE' })
store.dispatch({ type: 'INCREASE' })
store.dispatch({ type: 'RESET' })
console.log(store.getState())

//------------------------------------------

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  )
}

export default App
