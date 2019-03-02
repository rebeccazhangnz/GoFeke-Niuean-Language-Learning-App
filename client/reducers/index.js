import {combineReducers} from 'redux'
import content from './content'
import isLoading from './isLoading'
import categoryList from './categoryList'
// import actions here

export default combineReducers({
  // include actions here
  content,
  isLoading,
  categoryList
})
