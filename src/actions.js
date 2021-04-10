// action.type needs to be a sring
// to get a trown error incase op a typo set a const to that string

export const DECREASE = 'DECREASE'
export const INCREASE = 'INCREASE'
export const REMOVE = 'REMOVE'
export const CLEAR_CART = 'CLEAR_CART'
export const GET_TOTALS = 'GET_TOTALS'
export const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT'

export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } }
}
