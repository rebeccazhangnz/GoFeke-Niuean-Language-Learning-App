import request from 'superagent'

const categoryApi = 'http://localhost:3000/api/v1/category'

export function getCategory (name) {
  request
    .get(`${categoryApi}/${name}`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get contents')
    })
}
