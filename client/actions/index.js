import {getCategory, getCategoryList} from '../api/category'

function requestContent () {
  return {
    type: 'REQUESTING_CONTENT'
  }
}

function requestCategoryList () {
  return {
    type: 'REQUESTING_CATEGORY_LIST'
  }
}

function receiveContent (content) {
  return {
    type: 'RECEIVING_CONTENT',
    content: content
  }
}

function receiveCategoryList (list) {
  return {
    type: 'RECEIVING_CATEGORY_LIST',
    categoryList: list
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

export function fetchCategoryList () {
  return function (dispatch) {
    dispatch(requestCategoryList())
    getCategoryList()
      .then(list => {
        dispatch(receiveCategoryList(list))
      })
  }
}
