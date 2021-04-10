// items
import cartItems from './cart-items'
import {
  INCREASE,
  DECREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
} from './actions'

//initial store
const intialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
}

function reducer(state = intialStore, action) {
  const { payload } = action
  let tempCart = []

  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] }
    case DECREASE:
      tempCart = state.cart.map((item) => {
        if (item.id === payload.id) {
          item = { ...item, amount: item.amount - 1 }
        }
        return item
      })

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
    case GET_TOTALS:
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem
          const itemTotal = price * amount
          cartTotal.total += itemTotal
          cartTotal.amount += amount
          return cartTotal
        },
        {
          total: 0,
          amount: 0,
        },
      )
      total = parseFloat(total.toFixed(2))
      return { ...state, total, amount }
    case TOGGLE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === payload.id) {
            if (payload.toggle === 'inc') {
              return (cartItem = { ...cartItem, amount: cartItem.amount + 1 })
            }
            if (payload.toggle === 'dec') {
              return (cartItem = { ...cartItem, amount: cartItem.amount - 1 })
            }
          }
          return cartItem
        }),
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
