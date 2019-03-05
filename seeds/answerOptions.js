
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('answerOptions').del()
    .then(function () {
      // Inserts seed entries
      return knex('answerOptions').insert([
        { id: 1, questions_id: 1, option1: 'Matua taane', option2: 'Matua fifine', option3: 'Matua', option4: 'Taane' },
        { id: 2, questions_id: 2, option1: 'Fifine', option2: 'Matua fibine', option3: 'Matua fifine', option4: 'Fifine maua' },
        { id: 3, questions_id: 3, option1: 'Lolelole', option2: 'Inu', option3: 'Lomu', option4: 'Lole' },
        { id: 4, questions_id: 4, option1: 'Keikei', option2: 'kofe', option3: 'kake', option4: 'Keke' },
        { id: 5, questions_id: 5, option1: 'Fakamofa mahi mafu', option2: 'Fakaalofa lahi atu', option3: 'lahi atu', option4: 'Atu lahi faka' },
        { id: 6, questions_id: 6, option1: 'Koe atu', option2: 'Koe koe', option3: 'Koe kia', option4: 'Kiakia' },
        { id: 7, questions_id: 7, option1: 'Ua', option2: 'Tasi', option3: 'Tahi', option4: 'Taha' },
        { id: 8, questions_id: 8, option1: 'Hogofulu', option2: 'Hogoulu', option3: 'Hogomulu', option4: 'Fulufulu' },
        { id: 9, questions_id: 9, option1: 'Mogo pogipogi', option2: 'Mongo pongi pongi', option3: 'Moninga', option4: 'Mafana' },
        { id: 10, questions_id: 10, option1: 'Afimafi', option2: 'Afiafi', option3: 'Tupou laa', option4: 'Pale laa' },
        { id: 11, questions_id: 11, option1: 'Mokomo', option2: 'Hoge', option3: 'Tatalu', option4: 'Momoko' },
        { id: 12, questions_id: 12, option1: 'Tama taane', option2: 'Fifine', option3: 'Taane tama', option4: 'Tama tama' },
        { id: 13, questions_id: 13, option1: 'Tama taane', option2: 'Tama fifine', option3: 'Futi', option4: 'Tama' },
        { id: 14, questions_id: 14, option1: 'Futi', option2: 'Keke', option3: 'Fepuali', option4: 'Mulu' },
        { id: 15, questions_id: 15, option1: 'Cabegi', option2: 'Cabbagi', option3: 'Kapesi', option4: 'Kapisi' },
        { id: 16, questions_id: 16, option1: 'Monuina e po', option2: 'Monuina e pa', option3: 'Monuina poi e', option4: 'Monu e po' },
        { id: 17, questions_id: 17, option1: 'Fakofa lahi kia mu', option2: 'Fakaalofa lahi', option3: 'Fakaalofa lahi atu', option4: 'Fakaalofa lahi atu kia mutolu oti' },
        { id: 18, questions_id: 18, option1: 'Po tuloto', option2: 'Tuloto po', option3: 'Monuina e loto', option4: 'Uga' },
        { id: 19, questions_id: 19, option1: 'Manana', option2: 'Mafana', option3: 'Makalili', option4: 'Fia inu' },
        { id: 20, questions_id: 20, option1: 'Mategugu', option2: 'Fia inu', option3: 'Tupetupe', option4: 'Hoge' }

      ])
    })
}
