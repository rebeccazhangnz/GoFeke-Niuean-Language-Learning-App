import { updateFeke as updateFekeApi } from '../api/feke'
import { getFeke } from '../api/feke'
import {receiveFeke} from './getFekeStatus'


function isUpdated(){
    return {
        type: 'UPDATED'
    }
}

export function createFeke(feke) {
  return function(dispatch) {
    updateFekeApi(feke)
    .then(newfeke => {
      dispatch(receiveFeke(newfeke))
    })
    .then(dispatch(isUpdated()))
  }
}
