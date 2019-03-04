exports.up = function (knex, Promise) {
  return knex.schema.createTable('feke', function (table) {
    table.increments('id').primary()
    table.integer('category_id').references('category.id')
    table.string('name')
    table.string('village')
    table.string('image')
    table.string('status')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('feke')
}
