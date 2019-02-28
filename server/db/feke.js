const connection = require('./index')

module.exports = {
  // placeholder function
  getFeke
}

function getFeke (db = connection) {
  return db(/* placeholder table name*/)
    .select()
}
