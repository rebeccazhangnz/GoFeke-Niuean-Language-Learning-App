const connection = require('./index')

function getCategoryList(db=connection){
  return db('category')
  .select()
}

function getCategoryIdByName (name, db = connection) {
  return db('category')
    .where('category.name', name)
    .select('id')
}

function getContent (id, db = connection) {
  return db('content')
    .join('category', 'category.id', 'content.category_id')
    .where('category_id', id)
    .select('content.id as id', 'content.category_id', 'content.english', 'content.Niuean', 'category.name')
}
module.exports = {
  getContent,
  getCategoryIdByName,
  getCategoryList
}
