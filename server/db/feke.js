const connection = require('./index')

module.exports = {
  getFeke
}

function getFeke (db = connection) {
  return db('feke')
    .select()
}
