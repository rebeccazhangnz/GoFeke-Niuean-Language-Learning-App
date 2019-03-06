import React from 'react'
import { connect } from 'react-redux'
import { getQuizQuestions } from '../actions/quiz'
import { isThisISOWeek } from 'date-fns';

class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            score: 0,
            scoreUpdated: false,
            checked: false,
            submitted: false,
            selectedOption: '',
            message: ''
        }
    }
    componentDidMount() {
        this.props.dispatch(getQuizQuestions())
    }

    handleChange = (e) => {
        this.setState({
            selectedOption: e.currentTarget.value,
            checked: true
        })
    }
    checkAnswerSelected = () => {
        if (!this.state.checked) {
            this.setState({
                message: 'please choose your answer first, then press submit button'
            })
        }
    }

    checkAnswerSubmitted = () => {
        if (!this.state.submitted) {
            this.setState({
                message: 'please select your answer first, then press next button'
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.checkAnswerSelected()
        const allAnswers = this.props.questions.map(question => question.answer)
        if (!this.state.scoreUpdated && this.state.checked && this.state.selectedOption === allAnswers[this.state.index]) {
            this.setState({
                score: this.state.score + 5,
                submitted: true,
                scoreUpdated: true,
                message: 'correct answer! Good work!'
            })
        }
        else if (this.state.scoreUpdated) {
            this.setState({
                message: 'you have submitted your answer!'
            })
        }
        else if (this.state.checked) {
            this.setState({
                message: `correct answer is ${allAnswers[this.state.index]}`,
                submitted: true
            })
        }
    }

    handleNext = (e) => {
        this.checkAnswerSelected()
        this.checkAnswerSubmitted()
        if (this.state.checked && this.state.submitted && this.props.questions.length && this.state.index + 1 < this.props.questions.length) {
            this.setState({
                index: this.state.index + 1,
                checked: false,
                submitted: false,
                scoreUpdated: false,
                message: ''
            })
        }
        else if (this.state.index + 1 === this.props.questions.length) {
            this.setState({
                message: 'Congratulations! You have completed all the quiz questions. Well done!'
            })
        }
        e.preventDefault()
    }
    render() {
        const quiz = this.props.questions
        const ids = quiz.map(question => question.id)
        const allQuestions = quiz.map(question => question.question)
        const allOptions1 = quiz.map(question => question.option1)
        const allOptions2 = quiz.map(question => question.option2)
        const allOptions3 = quiz.map(question => question.option3)
        const allOptions4 = quiz.map(question => question.option4)
        return (
            <div>
                <div>
                    <p className="scoreboard">Your score is: <br></br>{this.state.score}</p>
                    <h2></h2>
                </div>
                <h1>Question {this.state.index + 1} of {this.props.questions.length}</h1>
                <h1>{allQuestions[this.state.index]}</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="quiz-grid-container">
                        <div className="quizRadio answer">
                            <input className="answer" type="radio" name={ids[this.state.index]} value={allOptions1[this.state.index]} checked={this.state.selectedOption === allOptions1[this.state.index]} onChange={this.handleChange} />
                            {allOptions1[this.state.index]}<br />

                            <input className="answer" type="radio" name={ids[this.state.index]} value={allOptions2[this.state.index]} checked={this.state.selectedOption === allOptions2[this.state.index]} onChange={this.handleChange} />
                            {allOptions2[this.state.index]}<br />

                            <input className="answer" type="radio" name={ids[this.state.index]} value={allOptions3[this.state.index]} checked={this.state.selectedOption === allOptions3[this.state.index]} onChange={this.handleChange} />
                            {allOptions3[this.state.index]}<br />

                            <input className='answer' type="radio" name={ids[this.state.index]} value={allOptions4[this.state.index]} checked={this.state.selectedOption === allOptions4[this.state.index]} onChange={this.handleChange} />
                            {allOptions4[this.state.index]}
                        </div>
                        <div className="check-answers">
                            <h1>{this.state.message}</h1>
                        </div>
                        <button className="quizSubmit ui purple button" type='submit' key='submit'>check answer</button>
                        <button className="quizSubmit ui purple button" key='next' onClick={this.handleNext}>next</button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        questions: state.quiz
    }
}
export default connect(mapStateToProps)(Quiz)