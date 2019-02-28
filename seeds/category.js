exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {id: 1, name: 'Family'},
        {id: 2, name: 'Food and drink'},
        {id: 3, name: 'Greetings'},
        {id: 4, name: 'Numbers'}
      ])
    })
}
