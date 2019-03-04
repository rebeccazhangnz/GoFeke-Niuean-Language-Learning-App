const environment = 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = connection
