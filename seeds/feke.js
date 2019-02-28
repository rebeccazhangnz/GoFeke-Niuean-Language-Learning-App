
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('feke').del()
    .then(function () {
      // Inserts seed entries
      return knex('feke').insert([
        {id: 1, name: 'rowValue1', village: '', },
        {id: 2, name: 'rowValue2'},
        {id: 3, name: 'rowValue3'}
      ]);
    });
};
