const initialState = []

const content = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVING_CONTENT':
      return action.content
    default:
      return state
  }
}

export default content
