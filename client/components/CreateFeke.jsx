import React from 'react'
import { connect } from 'react-redux'
import { createFeke } from '../actions/createFeke'
import { Redirect } from 'react-router'
import classNames from 'classnames'

class CreateFeke extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category_id: 1,
      name: '',
      village: 'Avatele',
      image: '',
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
      return <Redirect to='/category' />
    }

    const classesFor = color => {
      console.log('triggered')
      return classNames(
        {
          'createfeke-image': true,
          'selected': this.state.image.includes(color)
        })
    }
    return (
      <div className="createfeke-page">
      <h1>Mitaki! Select and name your feke</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='createfeke-container'>
            <img
              className={classesFor('blue')}
              src="images/feke-blue.png"
              name="feke-blue.png"
              onClick={this.handleOnclick}
            />
            <img
              className={classesFor('green')}
              src="images/feke-green.png"
              name="feke-green.png"
              onClick={this.handleOnclick}
            />
            <img
              className={classesFor('purple')}
              src="images/feke-purple.png"
              name="feke-purple.png"
              onClick={this.handleOnclick}
            />
            <img
              className={classesFor('red')}
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
            <select className="createfeke-select" value={this.state.village} onChange={this.handleDropdown}>
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
            <input className="createfeke-submit ui purple button" type="submit" value="GO! FEKE" />
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isUpdated: state.isUpdated,
  fekeColor: null
})

export default connect(mapStateToProps)(CreateFeke)