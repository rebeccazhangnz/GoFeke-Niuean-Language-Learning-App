exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('content').del()
    .then(function () {
      // Inserts seed entries
      return knex('content').insert([
        {id: 1, category_id: '1', english: 'Baby', Niuean: 'Tama muke'},
        {id: 2, category_id: '1', english: 'Sibling', Niuean: 'Lafu'},
        {id: 3, category_id: '2', english: 'Apple', Niuean: 'Fua apala'},
        {id: 4, category_id: '2', english: 'Kumara', Niuean: 'Timala'},
        {id: 5, category_id: '3', english: 'Hello', Niuean: 'Fakaalofa atu'},
        {id: 6, category_id: '3', english: 'Goodbye', Niuean: 'Koe kia'},
        {id: 7, category_id: '4', english: 'Ten', Niuean: 'Hogofulu'},
        {id: 8, category_id: '4', english: 'One', Niuean: 'Taha'}

      ])
    })
}
