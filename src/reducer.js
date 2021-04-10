import { INCREASE, DECREASE, CLEAR_CART, REMOVE } from './actions'

function reducer(state, action) {
  const { payload } = action
  let tempCart = []

  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] }
    case DECREASE:
      tempCart = []
      if (payload.amount === 1) {
        tempCart = state.cart.filter((item) => item.id !== payload.id)
      } else {
        tempCart = state.cart.map((item) => {
          if (item.id === payload.id) {
            item = { ...item, amount: item.amount - 1 }
          }
          return item
        })
      }
      return { ...state, cart: tempCart }
    case INCREASE:
      tempCart = state.cart.map((item) => {
        if (item.id === payload.id) {
          item = { ...item, amount: item.amount + 1 }
        }
        return item
      })
      return { ...state, cart: tempCart }
    case REMOVE:
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
