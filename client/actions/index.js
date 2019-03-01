import {getCategory} from '../api/category'

function requestContent () {
  return {
    type: 'REQUESTING_CONTENT'
  }
}

function receiveContent (content) {
  return {
    type: 'RECEIVING_CONTENT',
    content: content
  }
}

export function fetchCategory () {
  return function (dispatch) {
    dispatch(requestContent())
    getCategory(name)
      .then(content => {
        dispatch(receiveContent(content))
      })
  }
}
