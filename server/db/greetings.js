const connection = require('./index')

function getGreetings (db = connection) {
return db('content')
.where('category_id','3')
.select()
}

module.exports = {
getGreetings
}