import React from 'react'
import {connect} from 'react-redux'
import {getQuizQuestions} from '../actions/quiz'

class Quiz extends React.Component {
    constructor(props){
        super(props)
        this.state={
            index:0,
            score:0,
            scoreUpdated:false,
            checked: false,
            submitted:false,
            selectedOption:''

        }
    }
    componentDidMount(){
        this.props.dispatch(getQuizQuestions())
    }
    
    handleChange=(e)=>{
        this.setState({
            selectedOption: e.currentTarget.value,
            checked: true
        })
    }
    checkAnswerSelected=()=>{
        if(!this.state.checked){
            return alert('Please choose your answer first, then press submit')
        } 
    }

    checkAnswerSubmitted=()=>{
        if(!this.state.submitted){
            return alert('Please submit your answer first, then press next')
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.checkAnswerSelected()
        const allAnswers = this.props.questions.map(question =>question.answer)
        if(!this.state.scoreUpdated && this.state.checked && this.state.selectedOption === allAnswers[this.state.index] ){
            this.setState({
                score: this.state.score+5,
                submitted: true,
                scoreUpdated:true
            })
        }
        else if (this.state.scoreUpdated){
            alert('You have already submitted your answer! Go to next question')
        }
        else if (this.state.checked) {
            alert(`Nakai, the correct answer is ${allAnswers[this.state.index]}`)
             this.setState({
                 submitted:true
             })
        }

    }

    handleNext =(e) =>{ 
        this.checkAnswerSelected()
        this.checkAnswerSubmitted()
        if(this.state.checked && this.state.submitted && this.props.questions.length && this.state.index+1<this.props.questions.length){
            this.setState({
                index: this.state.index+1,
                checked:false,
                submitted:false,
                scoreUpdated:false
            }) 
        }
    }
    render(){
        const quiz = this.props.questions
        const ids = quiz.map(question=>question.id)
        const allQuestions = quiz.map(question =>question.question)
        const allOptions1=quiz.map(question=>question.option1)
        const allOptions2=quiz.map(question=>question.option2)
        const allOptions3=quiz.map(question=>question.option3)
        const allOptions4=quiz.map(question=>question.option4)
        return (
            <div>
                <img className= 'quiz-image ui centered' src='./images/quiz.png'></img>
                <h1>Question {this.state.index+1}</h1>
                <h1>{allQuestions[this.state.index]}</h1>
                <form onSubmit = {this.handleSubmit}> 
                    <div className="radio">   
                        <input type="radio" name ={ids[this.state.index]} value={allOptions1[this.state.index]} checked={this.state.selectedOption === allOptions1[this.state.index]} onChange={this.handleChange}/>
                            {allOptions1[this.state.index]}<br/>
                        
                        <input type="radio" name ={ids[this.state.index]} value={allOptions2[this.state.index]}  checked={this.state.selectedOption === allOptions2[this.state.index]}onChange={this.handleChange} />
                            {allOptions2[this.state.index]}<br/>                             
                        
                        <input type="radio" name ={ids[this.state.index]} value={allOptions3[this.state.index]} checked={this.state.selectedOption === allOptions3[this.state.index]} onChange={this.handleChange} />
                            {allOptions3[this.state.index]}<br/>
                                                                                            
                        <input type="radio" name ={ids[this.state.index]} value={allOptions4[this.state.index]}  checked={this.state.selectedOption === allOptions4[this.state.index]} onChange={this.handleChange} />
                            {allOptions4[this.state.index]}        
                    </div>
                    <button type='submit' className="ui purple button" key='submit'>submit</button>  
                </form>
                <p></p>
                <button className="ui purple button" key='next' onClick={this.handleNext}>next</button> <br/>
                Your score is : {this.state.score}
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