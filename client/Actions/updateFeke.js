import {getFeke} from '../api/feke'

function requestFeke () {
  return {
    type: 'REQUESTING_FEKE'
  }
}

function receiveFeke (feke) {
  return {
    type: 'RECEIVING_FEKE',
    feke: feke
  }
}

export function getFekeStatus () {
  return function (dispatch) {
    dispatch(requestFeke())
    getFeke()
      .then(feke => {
        dispatch(receiveFeke(feke))
      })
  }
}