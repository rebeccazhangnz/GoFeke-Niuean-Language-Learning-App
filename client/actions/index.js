import {getCategory, getCategoryList} from '../api/category'

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
function requestCategoryList(){
  return {
    type: 'REQUESTING_CATEGORY_LIST'
  }
}
function receiveCategoryList(list){
  return {
    type: 'RECEIVING_CATEGORY_LIST',
    categoryList: list
  }
}
export function fetchCategoryList(){
  return function (dispatch){
    dispatch(requestCategoryList())
     getCategoryList()
     .then(list=>{
      console.log('actionside', list)
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
