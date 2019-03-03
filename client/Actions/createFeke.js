import { updateFeke as updateFekeApi } from '../api/feke'
import { getFeke } from '../api/feke'
import {receiveFeke} from './getFeke'


function updateFeke(feke) {
  return {
    type: 'UPDATE_FEKE',
    feke: feke
  }
}

function isUpdated(){
    return {
        type: 'UPDATED'
    }
}

export function createFeke(feke) {
  return function(dispatch) {
    dispatch(updateFeke(feke))
    dispatch(updateFekeApi(feke))
    getFeke()
    .then(feke => {
      dispatch(receiveFeke(feke))
    })
    .then(dispatch(isUpdated()))
  }
}
