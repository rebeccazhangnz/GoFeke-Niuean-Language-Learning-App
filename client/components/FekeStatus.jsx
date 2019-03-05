import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { getFekeStatus } from '../actions/getFekeStatus'
import { resetUpdate } from '../actions/createFeke'

class FekeStatus extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      percentage: this.props.percentage
    }
  }
  componentDidMount() {
    this.props.dispatch(getFekeStatus())
    this.props.dispatch(resetUpdate())
  }
  //                   
  render() {
    return (
      <Fragment >
        <div className='feke-container'>
          <div className="feke">
            {this.props.feke.map(feke => {
              return (
                <Fragment>
                  <div className="feke-image-container" key={feke.name}>
                    <img className='feke-image' src={`/images/${feke.image}`} />
                    <h1>{feke.name} from {feke.village}</h1>
                  </div>
                </Fragment>
              )
            })
            }
          </div>

        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    feke: state.feke,
    percentage: state.percentage
  }
}

export default connect(mapStateToProps)(FekeStatus)
