import React from 'react'
import { Link } from 'react-router-dom'
import {fetchCategory} from '../actions'
import {connect}from 'react-redux'

class Flashcard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            index:0
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
            this.setState({
                index: this.state.index+1                
            })
        }
    }
    render(){
        const {content} = this.props
        const niueanWords = content.map(word=>word.niuean)
        const englishWords = content.map(word=>word.english)

        return (   
            <div>
               {niueanWords[this.state.index]} means {englishWords[this.state.index]}<br/>
               <button key='previous' onClick={this.handlePrevious}>previous</button>
                <button key='next' onClick={this.handleNext}>next</button><br/>
                <button key='homebtn'><Link to='/category'>Home</Link></button>
            </div>
           
        )
    }
}
function mapStateToProps(state){
    return {
        content: state.content
    }
}
export default connect (mapStateToProps)(Flashcard)