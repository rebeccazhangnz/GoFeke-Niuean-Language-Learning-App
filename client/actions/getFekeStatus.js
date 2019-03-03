import {getFeke} from '../api/feke'

export function requestFeke () {
  return {
    type: 'REQUESTING_FEKE'
  }
}

export function receiveFeke (feke) {
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

export function updatePercentage(percentage){
  return {
    type: 'UPDATE_PERCENTAGE',
    percentage: percentage
  }
}
