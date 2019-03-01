import React from 'react'
import {connect} from 'react-redux'

class FekeStatus extends React.Component {
  // componentDidMount () {
  //   this.props.dispatch(getFeke())
  // }

  render () {
    return (
      <div className = 'fekeStatus'>
        <h1>This is the fekeStatus component</h1>
      </div>
    )
  }
}

export default FekeStatus
