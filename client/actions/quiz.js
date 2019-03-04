import {getQuestions} from '../api/quiz'

function requestQuestions () {
    return {
      type: 'REQUESTING_QUESTIONS'
    }
  }
  
  function receiveQuestions (questions) {
    return {
      type: 'RECEIVING_QUESTIONS',
      questions: questions
    }
  }
export function getQuizQuestions(){
    return function (dispatch){
        dispatch(requestQuestions())
        getQuestions()
            .then(questions =>{
                dispatch(receiveQuestions(questions))
            })
    }    
}