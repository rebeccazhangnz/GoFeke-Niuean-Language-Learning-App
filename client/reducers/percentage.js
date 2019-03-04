const initialState = 0

const percentage = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PERCENTAGE':
      return action.percentage
    default:
      return state
  }
}

export default percentage