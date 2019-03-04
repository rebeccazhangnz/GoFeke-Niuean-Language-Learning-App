import request from 'superagent'

const quizApi = 'http://localhost:3000/api/v1/quiz'

export function getQuestions () {
  return request
    .get(quizApi)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get quiz Questions')
    })
}