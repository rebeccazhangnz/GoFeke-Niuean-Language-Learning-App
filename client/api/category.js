import request from 'superagent'

const categoryApi = 'http://localhost:3000/api/v1/category'

export function getCategoryList(){
  return request
  .get(categoryApi)
  .then(res=>res.body)
  .catch(err=>{
    if(err) throw Error('Cannot get categoryList')
  })
}

export function getCategory (name) {
  return request
    .get(`${categoryApi}/${name}`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get contents')
    })
}
