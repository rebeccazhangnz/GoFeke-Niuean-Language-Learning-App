import {combineReducers} from 'redux'
import content from './content'
import isLoading from './isLoading'
import categoryList from './categoryList'
import feke from './feke'
import percentage from './percentage'
import isUpdated from './isUpdated'
import quiz from './quiz'
// import actions here

export default combineReducers({
  // include actions here
  content,
  isLoading,
  categoryList,
  feke,
  percentage,
  isUpdated,
  quiz
})
