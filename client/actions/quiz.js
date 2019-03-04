import {getQuestions} from '../api/quiz'

export function getQuizQuestions(){
    return function (dispatch){
        dispatch(requestQuestions())
        getQuestions()
            .then(questions =>{
                dispatch(receiveQuestions(questions))
            })
    }    
}