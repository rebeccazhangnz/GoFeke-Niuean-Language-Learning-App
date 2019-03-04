
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        { id: 1, question: 'How do you say father?', answer: 'Matua Taane' },
        { id: 2, question: 'How do you say mother?', answer: 'Matua Fifine' },
        { id: 3, question: 'How do you say lollies?', answer: 'Lole' },
        { id: 4, question: 'How do you say cake?', answer: 'Keke' },
        { id: 5, question: 'How do you say hello?', answer: 'Fakaalofa lahi atu' },
        { id: 6, question: 'How do you say goodbye?', answer: 'Koe kia' },
        { id: 7, question: 'How do you say 1?', answer: 'Taha' },
        { id: 8, question: 'How do you say 10?', answer: 'Hogofulu' },
        { id: 9, question: 'How do you say morning?', answer: 'Mogo Pogipogi' },
        { id: 10, question: 'How do you say evening?', answer: 'Afiafi' },
        { id: 11, question: 'How do you say sad/cold?', answer: 'Momoko' },
        { id: 12, question: 'How do you say eye?', answer: 'Mata' }
      ])
    })
}
