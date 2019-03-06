import {getCategory, getCategoryList} from '../api/category'

export function requestContent () {
  return {
    type: 'REQUESTING_CONTENT'
  }
}

export function receiveContent (content) {
  return {
    type: 'RECEIVING_CONTENT',
    content: content
  }
}
export function requestCategoryList () {
  return {
    type: 'REQUESTING_CATEGORY_LIST'
  }
}
export function receiveCategoryList (list) {
  return {
    type: 'RECEIVING_CATEGORY_LIST',
    categoryList: list
  }
}
export function fetchCategoryList () {
  return function (dispatch) {
    dispatch(requestCategoryList())
    getCategoryList()
      .then(list => {
        dispatch(receiveCategoryList(list))
      })
  }
}

export function fetchCategory (name) {
  return function (dispatch) {
    dispatch(requestContent())
    getCategory(name)
      .then(content => {
        dispatch(receiveContent(content))
      })
  }
}