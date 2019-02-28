import request from 'superagent'

const numbersApi = 'http://localhost:3000/api/v1/category/numbers'

export function getUsers () {
  request
    .get(`${numbersApi}/`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get users')
    })
}
