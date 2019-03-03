exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {id: 1, name: 'family'},
        {id: 2, name: 'food'},
        {id: 3, name: 'greetings'},
        {id: 4, name: 'numbers'}
        {id: 5, name: 'time'},
        {id: 6, name: 'body'}
      ])
    })
}
