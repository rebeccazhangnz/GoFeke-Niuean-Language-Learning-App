import React from 'react'
import {connect} from 'react-redux'
import {getQuizQuestions} from '../actions/quiz'

class Quiz extends React.Component {
    componentDidMount(){
        this.props.dispatch(getQuizQuestions())
    }
    render(){
        const quiz = this.props.questions
        const allQuestions = quiz.map(question =>question.question)
        const answers = quiz.answer
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">  
                    {this.props.questions.map(question => {
                                return(    
                                    <div key={question.questions_id}>     
                                    {question.question}
                                    <form>                            
                                        <div className="radio">
                                           
                                            <input type="radio" name ={question.id} value={question.option1}  />
                                                {question.option1}<br/>
                                                                  
                                            <input type="radio" name ={question.id} value={question.option2} />
                                                {question.option2}<br/>                               
                                          
                                            <input type="radio" name ={question.id} value={question.option3} />
                                                {question.option3}<br/>
                                                                                     
                                             <input type="radio" name ={question.id} value={question.option4}/>
                                                {question.option4}
                                           
                                        </div>                                  
                                    </form>  
                                </div>   
                            )})}                                 
                    </div>
                </div>
            </div>         
        )
    }
} 

function mapStateToProps(state){
    return {
        questions: state.quiz
    }
}
export default connect (mapStateToProps)(Quiz)