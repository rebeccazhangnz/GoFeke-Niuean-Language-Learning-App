const initialState = false

function isUpdated (state = initialState, action) {
  switch (action.type) {
    case 'UPDATED' :
    console.log('isupdated')
      return true
    default:
      return state
  }
}

export default isUpdated