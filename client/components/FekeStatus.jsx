import React from 'react'
import {connect} from 'react-redux'
import {getFekeStatus} from '../actions/getFekeStatus'

class FekeStatus extends React.Component {
  componentDidMount () {
    this.props.dispatch(getFekeStatus())
  }
  render () {
    return (
      <div className = 'fekeStatus'>
        <h1>This is the Feke Status Component</h1>
        <div>{this.props.feke.map((feke) => {
          return (

            <div key = {feke.name}>
              <img src = {`/images/${feke.image}`} />
              <h1>{feke.name}</h1>
              <h1>{feke.village}</h1>
            </div>
          )
        })}</div>
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
