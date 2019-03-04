
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('answerOptions').del()
    .then(function () {
      // Inserts seed entries
      return knex('answerOptions').insert([
        { id: 1, questions_id: 1, option1: 'Matua Taane', option2: 'Matua Fifine', option3: 'Matua', option4: 'Taane' },
        { id: 2, questions_id: 2, option1: 'Fifine', option2: 'Matua Fibine', option3: 'Matua Fifine', option4: 'Fifine Maua' },
        { id: 3, questions_id: 3, option1: 'Lolelole', option2: 'inu', option3: 'Lomu', option4: 'Lole' },
        { id: 4, questions_id: 4, option1: 'Keikei', option2: 'kofe', option3: 'kake', option4: 'Keke' },
        { id: 5, questions_id: 5, option1: 'Fakamofa mahi mafu', option2: 'Fakaalofa lahi atu', option3: 'lahi atu', option4: 'Atu lahi faka' },
        { id: 6, questions_id: 6, option1: 'Koe atu', option2: 'Koe koe', option3: 'Koe kia', option4: 'Kiakia' },
        { id: 7, questions_id: 7, option1: 'Ua', option2: 'Tasi', option3: 'Tahi', option4: 'Taha' },
        { id: 8, questions_id: 8, option1: 'Hogofulu', option2: 'Hogoulu', option3: 'Hogofulu', option4: 'fulufulu' },
        { id: 9, questions_id: 9, option1: 'Mogo Pogipogi', option2: 'Mongo pongi pongi', option3: 'Moninga', option4: 'Mafana' },
        { id: 10, questions_id: 10, option1: 'Afimafi', option2: 'Afiafi', option3: 'Tupou laa', option4: 'Pale laa' },
        { id: 11, questions_id: 11, option1: 'Mokomo', option2: 'Hoge', option3: 'Tatalu', option4: 'Momoko' },
        { id: 12, questions_id: 12, option1: 'Mata', option2: 'Ulu', option3: 'Gutu', option4: 'Mama' }

      ])
    })
}
