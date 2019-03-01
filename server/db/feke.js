const connection = require('./index')

module.exports = {
  getFeke,
  addFeke
}

function getFeke (db = connection) {
  return db('feke')
    .select()
}

function addFeke (fekeInfo, db = connection) {
  return db('feke')
    .insert(
      {}
    )
}
