const initialState = []

const feke = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVING_FEKE':
      return action.feke
    case 'UPDATE_FEKE':
      return action.feke
    default:
      return state
  }
}

export default feke
