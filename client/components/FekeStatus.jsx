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
        <h1>This is the Feke StatusComponent</h1>
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
