const connection = require('./index')

function getCategoryIdByName(category, db = connection) {
  return db('category')
    .where('category.name', category)
    .select('id')
}

function getContent(id, db=connection){
  return db('content')
  .join('category', 'category.id', 'content.category_id')
  .where('category_id',id)
  .select()
}
module.exports = {
  getContent,
  getCategoryIdByName
}
