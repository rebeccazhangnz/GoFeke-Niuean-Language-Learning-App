const connection = require('./index')

function getFood (db = connection) {
  return db('content')
    .where('category_id', 2)
    .select()
}

module.exports = {
  getFood
}
