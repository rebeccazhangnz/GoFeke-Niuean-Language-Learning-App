
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        { id: 1, question: 'How do you say father?', answer: 'Matua taane' },
        { id: 2, question: 'How do you say mother?', answer: 'Matua fifine' },
        { id: 3, question: 'How do you say lollies?', answer: 'Lole' },
        { id: 4, question: 'How do you say cake?', answer: 'Keke' },
        { id: 5, question: 'How do you say hello?', answer: 'Fakaalofa lahi atu' },
        { id: 6, question: 'How do you say goodbye?', answer: 'Koe kia' },
        { id: 7, question: 'How do you say 1?', answer: 'Taha' },
        { id: 8, question: 'How do you say 10?', answer: 'Hogofulu' },
        { id: 9, question: 'How do you say morning?', answer: 'Mogo pogipogi' },
        { id: 10, question: 'How do you say evening?', answer: 'Afiafi' },
        { id: 11, question: 'How do you say sad / cold?', answer: 'Momoko' },
        { id: 12, question: 'How do you say boy?', answer: 'Tama taane' },
        { id: 13, question: 'How do you say girl?', answer: 'Tama fifine' },
        { id: 14, question: 'How do you say banana?', answer: 'Futi' },
        { id: 15, question: 'How do you say cabbage?', answer: 'Kapisi' },
        { id: 16, question: 'How do you say good night?', answer: 'Monuina e po' },
        { id: 17, question: 'How do you say greetings to you all?', answer: 'Fakaalofa lahi atu kia mutolu oti' },
        { id: 18, question: 'How do you say midnight?', answer: 'Tuloto po' },
        { id: 19, question: 'How do you say hot?', answer: 'Mafana' },
        { id: 20, question: 'How do you say thirsty?', answer: 'Fia inu' }
      ])
    })
}
