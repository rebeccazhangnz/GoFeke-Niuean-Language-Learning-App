import React from 'react'
import {connect}from 'react-redux'
import FekeStatus from './FekeStatus'
import { Link } from 'react-router-dom'
import {fetchCategory} from '../actions'
import {updatePercentage}from '../actions/getFekeStatus'

class Flashcard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            index:0,
            percentage:this.props.percentage
        }
    }

    componentDidMount(){
        const name =this.props.match.params.name
        this.props.dispatch(fetchCategory(name))
    }

    handlePrevious =(e)=>{
        if(this.props.content.length && this.state.index-1>=0){
            this.setState({
                index: this.state.index-1
            })
        }
    }

    handleNext =(e) =>{ 
        if(this.props.content.length && this.state.index+1<this.props.content.length){
            this.props.dispatch(updatePercentage(this.state.percentage+1))
            this.setState({
                index: this.state.index+1,
                percentage:this.state.percentage + 1
            }) 
        }
    }
    render(){
        const {content} = this.props
        const niueanWords = content.map(word=>word.niuean)
        const englishWords = content.map(word=>word.english)

        return (   
            <div>
               <FekeStatus />
               <div className="three column centered grid">
               <div className="column">
               <h1>{niueanWords[this.state.index]}</h1> 
               <h2>{englishWords[this.state.index]}</h2>
               </div>
               <div className="column">
               <button className="ui purple button" key='previous' onClick={this.handlePrevious}>Previous</button>
                <button className="ui purple button" key='next' onClick={this.handleNext}>Next</button>
                <Link to='/category'><button className="ui purple button" key='homebtn'>Home</button></Link>
                </div>
                </div>
            </div>
           
        )
    }
}
function mapStateToProps(state){
    return {
        content: state.content,
        percentage:state.percentage
    }
}
export default connect (mapStateToProps)(Flashcard)
