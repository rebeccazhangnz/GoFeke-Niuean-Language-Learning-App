const connection = require('./index')

function getCategories(db = connection) {
    return db('content')
        .select()
}


module.exports = {
    getCategories
}