const connection = require('./index')

function getQuestions (db = connection) {
  return db('questions')
    .join('answerOptions', 'questions.id', 'answerOptions.questions_id')
    .select()
}

module.exports = {
    getQuestions
}