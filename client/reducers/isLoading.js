const initialState = false

function isLoading (state = initialState, action) {
  switch (action.type) {
    case 'REQUESTING_CONTENT' :
      return true
    case 'RECEIVING_CONTENT' :
      return false
    default:
      return state
  }
}

export default isLoading
