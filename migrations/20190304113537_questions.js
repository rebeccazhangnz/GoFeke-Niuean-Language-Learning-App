exports.up = function (knex, Promise) {
  return knex.schema.createTable('questions', function (table) {
    table.increments('id').primary()
    table.string('question')
    table.string('answer')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('questions')
}
