import React from 'react'
import { connect } from 'react-redux'

class FekeStatus extends React.Component {
  // componentDidMount () {
  //   this.props.dispatch(getFeke())
  // }

  render() {
    return (
      <div className='fekeStatus'>
        <div className='feke-image'>
          <img className='feke-image' src='/images/feke-red.png'></img>
        </div>
        <div className='feke-details-container'>
          <div className='feke-details'>
            <p className='feke-name'>Name:     PLACEHOLDER_NAME</p>
          </div>
          <div className='ls'>
            <p className='feke-village'>Village:    PLACEHOLDER_VILLAGE</p>
          </div>
        </div>
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

