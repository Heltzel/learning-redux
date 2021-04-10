import React from 'react'
// components
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'

import { createStore } from 'redux'
import reducer from './reducer'
// react-redux - Provider wraps app, connect - used in components
import { Provider } from 'react-redux'

// store.getState() -
// reducer here is imported at the top
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  )
}

export default App
