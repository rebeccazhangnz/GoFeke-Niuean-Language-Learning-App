const connection = require('./index')

function getCategories(db = connection) {
    return db('content')
        .where('category_id', '1')
        .select()
}

module.exports = {
    getCategories
}