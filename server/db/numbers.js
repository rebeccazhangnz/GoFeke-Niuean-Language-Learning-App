const connection = require('./index')

function getNumbers (db = connection) {
    return db('content')
        .where('category_id','4')
        .select()
}

module.exports = {
    getNumbers
}