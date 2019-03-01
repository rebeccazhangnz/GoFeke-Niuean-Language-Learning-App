import request from 'superagent'

const familyApi = 'http://localhost:3000/api/v1/category/family'

export function getUsers () {
  request
    .get(`${familyApi}/`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get users')
    })
}