import React from 'react'
import {connect} from 'react-redux'
import {getFekeStatus} from '../actions/getFekeStatus'
import styled from 'styled-components'
import Progressbar from './Progressbar'

const AppWrapper = styled.div`
  display:flex;
  justify-content: center;
`

const ProgressbarContainer = styled.div`
  width: 300px;
  margin-top: 10px;
`

class FekeStatus extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      percentage: 5
    }
  }
  componentDidMount () {
    this.props.dispatch(getFekeStatus())
  }
  render () {
    return (
      <div className = 'fekeStatus'>
        <div>
          {this.props.feke.map(feke => {
            return (
              <div key = {feke.name}>
                <img style={{width:100,height:100}} src = {`/images/${feke.image}`}/>
                <h1>{feke.name}
                {' '}{feke.village}</h1>
              </div>
            )})
          }
        </div>
        <AppWrapper>
          <ProgressbarContainer>
            <Progressbar />
          </ProgressbarContainer>
        </AppWrapper>
      </div>  
    )
  }
}

function mapStateToProps (state) {
  return {
    feke: state.feke
  }
}

export default connect(mapStateToProps)(FekeStatus)
