import {combineReducers} from 'redux'
import content from './content'
import isLoading from './isLoading'
import feke from './getFekeStatus'
// import actions here

export default combineReducers({
  // include actions here
  content,
  isLoading,
  feke

})
