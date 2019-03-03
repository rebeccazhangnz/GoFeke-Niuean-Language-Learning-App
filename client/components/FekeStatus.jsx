import React from 'react'
import { connect } from 'react-redux'
import { getFekeStatus } from '../actions/getFekeStatus'
import { resetUpdate } from '../actions/createFeke'

class FekeStatus extends React.Component {
  componentDidMount() {
    this.props.dispatch(getFekeStatus())
    this.props.dispatch(resetUpdate())
  }

  render() {
    return (
      <div className="fekeStatus">
        <h1>{this.props.isLoading && <span>isLoading...</span>}</h1>
        <div>
          {this.props.feke.map(feke => {
            return (
              <div key={feke.name}>
                <img className="feke-image" src={`/images/${feke.image}`} />
                <h1>{feke.name}</h1>
                <h1>{feke.village}</h1>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    feke: state.feke
  }
}

export default connect(mapStateToProps)(FekeStatus)
