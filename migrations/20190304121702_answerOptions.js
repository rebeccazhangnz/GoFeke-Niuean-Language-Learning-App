exports.up = function (knex, Promise) {
  return knex.schema.createTable('answerOptions', function (table) {
    table.increments('id').primary()
    table.string('option1')
    table.string('option2')
    table.string('option3')
    table.string('option4')
    table.integer('questions_id').references('questions.id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('answerOptions')
}
