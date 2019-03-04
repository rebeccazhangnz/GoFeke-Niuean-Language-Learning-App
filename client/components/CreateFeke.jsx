import React from 'react'
import { connect } from 'react-redux'
import { createFeke } from '../actions/createFeke'
import { Redirect } from 'react-router'

class CreateFeke extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category_id: '1',
      name: '',
      village: 'Avatele',
      image: 'feke-blue.png',
      status: 'Level 1'
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnclick = this.handleOnclick.bind(this)
    this.handleDropdown = this.handleDropdown.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleOnclick(e) {
    this.setState({
      image: e.target.name
    })
  }

  handleDropdown(e) {
    this.setState({
      village: e.target.value
    })
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = () => {
    let feke = this.state
    this.props.dispatch(createFeke(feke))
  }

  render() {
    if (this.props.isUpdated) {
      return <Redirect to= '/category'/>
    }

    return (
      <div className="createfeke-page">
        <form onSubmit={this.handleSubmit}>
        <div className='createfeke-container'>
          <img
            className="createfeke-image"
            src="images/feke-blue.png"
            name="feke-blue.png"
            onClick={this.handleOnclick}
          />
          <img
            className="createfeke-image"
            src="images/feke-green.png"
            name="feke-green.png"
            onClick={this.handleOnclick}
          />
          <img
            className="createfeke-image"
            src="images/feke-purple.png"
            name="feke-purple.png"
            onClick={this.handleOnclick}
          />
          <img
            className="createfeke-image"
            src="images/feke-red.png"
            name="feke-red.png"
            onClick={this.handleOnclick}
          />
  </div>
  <div className="createfeke-container">
          <label htmlFor="name">Name </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label htmlFor="village">Village </label>
          <select value={this.state.village} onChange={this.handleDropdown}>
            <option village="alofi">Alofi</option>
            <option village="avatele">Avatele</option>
            <option village="hakupu">Hakupu</option>
            <option village="hikutavake">Hikutavake</option>
            <option village="lakepa">Lakepa</option>
            <option village="liku">Liku</option>
            <option village="makefu">Makefu</option>
            <option village="mutalau">Mutalau</option>
            <option village="namukulu">Namukulu</option>
            <option village="tamakautoga">Tamakautoga</option>
            <option village="toi">Toi</option>
            <option village="tuapa">Tuapa</option>
            <option village="vaiea">Vaiea</option>
          </select>
           <input type="submit" value="Create feke" />
           </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isUpdated: state.isUpdated
})

export default connect(mapStateToProps)(CreateFeke)