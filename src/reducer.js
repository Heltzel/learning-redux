import { INCREASE, DECREASE, CLEAR_CART, REMOVE } from './actions'

function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] }
    case DECREASE:
      console.log('You decreased the amount')
      break
    case INCREASE:
      console.log('You increased the amount')
      break
    case REMOVE:
      console.log('You removed the item')
      break
    default:
      return state
  }

  // if (action.type === CLEAR_CART) {
  //   return { ...state, cart: [] }
  // }
  // return state
}

export default reducer
