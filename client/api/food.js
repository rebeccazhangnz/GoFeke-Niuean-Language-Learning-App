import request from 'superagent'

const foodApi = 'http://localhost:3000/api/v1/food'

export function getUsers () {
  request
    .get(`${foodApi}/`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get users')
    })
}