const initialState = false

function isLoading (state = initialState, action) {
  switch (action.type) {
    case 'REQUESTING_CONTENT' :
      return true
    case 'RECEIVING_CONTENT' :
      return false
    case 'REQUESTING_CATEGORY_LIST':
      return true
    case 'RECEIVE_CATEGORY_LIST':
      return false
    case 'REQUESTING_FEKE':
      return true
    case 'RECEIVING_FEKE':
      return false
    default:
      return state
  }
}

export default isLoading
