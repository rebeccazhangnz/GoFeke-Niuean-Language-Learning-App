const initialState = []

const quiz = (state = initialState, action) => {
  console.log('reducerSide', action.questions)
  switch (action.type) {
    case 'RECEIVING_QUESTIONS':
      return action.questions
    default:
      return state
  }
}

export default quiz