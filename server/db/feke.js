const connection = require('./index')

module.exports = {
  getFeke,
  updateFeke
}

function getFeke (db = connection) {
  return db('feke')
    .select()
}

function updateFeke (fekeInfo, db = connection) {
  return db('feke')
    .where('id', 1)
    .update(
      {
        name: fekeInfo.name,
        village: fekeInfo.village,
        image: fekeInfo.image
      }
    )
 }
