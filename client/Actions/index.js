import {getCategory} from '../api/category'

function requestCategory () {
  return {
    type: 'REQUESTING_CATEGORY'
  }
}

function receiveCategory (content) {
  return {
    type: 'RECEIVING_CATEGORY',
    content: content
  }
}

export function fetchCategory () {
  return function (dispatch) {
    dispatch(requestCategory())
    getCategory(name)
      .then(content => {
        dispatch(receiveCategory(content))
      })
  }
}
