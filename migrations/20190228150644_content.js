exports.up = function (knex, Promise) {
  return knex.schema.createTable('content', function (table) {
    table.increments('id').primary()
    table.integer('category_id').references('category.id')
    table.string('english')
    table.string('niuean')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('content')
}
