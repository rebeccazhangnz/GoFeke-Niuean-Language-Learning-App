const initialState = false

function isUpdated (state = initialState, action) {
  switch (action.type) {
    case 'UPDATED' :
      return true
    case 'RESET_UPDATE':
      return false
    default:
      return state
  }
}

export default isUpdated