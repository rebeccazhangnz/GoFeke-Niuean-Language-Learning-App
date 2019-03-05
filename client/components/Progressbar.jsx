import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const Track = styled.div`
    width: 100%;
    height: 12px;
    background-color: #222;
    border-radius: 10px;
    box-shadow: inset 0 0 5px #000;
`

const Thumb = styled.div`
    width: ${props=>props.percentage}%;
    height: 100%;
    background-color:#ba55d3;
    border-radius: 8px;
    transition: width 0.3s ease-in-out;
`
class Progressbar extends React.Component {
    clamp =(min,value,max)=>{
        return Math.min(Math.max(min, value), max);
    }
    render (){
        return (
            <div>
                <h2>Study progress with your feke:</h2>
                <Track>
                    <Thumb percentage={this.clamp(0,this.props.percentage,100)} />
                </Track>
            </div>    
        )
    }
}
Progressbar.propTypes={
    percentage: PropTypes.number
}

function mapStateToProps(state){
    return {
        percentage:state.percentage
    }
}
export default connect (mapStateToProps)(Progressbar) 