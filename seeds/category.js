
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {id: 1, name: 'Family'},
        {id: 2, name: 'rowValue2'},
        {id: 3, name: 'rowValue3'},
        {id: 3, name: 'rowValue3'}
      ]);
    });
};
