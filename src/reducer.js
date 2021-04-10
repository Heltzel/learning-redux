import { INCREASE, DECREASE, CLEAR_CART, REMOVE } from './actions'

function reducer(state, action) {
  const { payload } = action
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] }
    case DECREASE:
      console.log('You decreased the amount')
      return state
    case INCREASE:
      console.log('You increased the amount')
      return state
    case REMOVE:
      console.log(payload.id)
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      }
    default:
      return state
  }

  // if (action.type === CLEAR_CART) {
  //   return { ...state, cart: [] }
  // }
  // return state
}

export default reducer
