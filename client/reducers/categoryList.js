const initialState = []

const categoryList = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVING_CATEGORY_LIST':
      return action.categoryList
    default:
      return state
  }
}

export default categoryList
