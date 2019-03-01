exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('feke').del()
    .then(function () {
      // Inserts seed entries
      return knex('feke').insert([
        {id: 1, category_id: '1', name: 'Fetufeke', village: 'Makefu', image: 'feke-purple.png', status: 'Level 1'}

      ])
    })
}
