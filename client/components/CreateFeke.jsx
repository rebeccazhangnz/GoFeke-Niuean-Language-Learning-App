import React from 'react'

class CreateFeke extends React.Component {
constructor(props) {
  super(props)
  this.state = { image: '', name: '', village: '' }


  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleOnclick = this.handleOnclick.bind(this)
  this.handleDropdown = this.handleDropdown.bind(this)
  this.handleChange = this.handleChange.bind(this)
}


handleOnclick(e){
this.setState({
  image : e.target.name
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
  alert('name : '+ this.state.name + '  village : ' + this.state.village + '  image : ' + this.state.image)
}


render() {
  return (
    <div className='createfeke-page'>
      <form onSubmit={this.handleSubmit}>

      <img className="feke-image" src = "images/feke-blue.png" name = 'feke-blue.png' onClick = {this.handleOnclick}/>
      <img className="feke-image" src = "images/feke-green.png" name = 'feke-green.png' onClick = {this.handleOnclick}/>
      <img className="feke-image" src = "images/feke-purple.png" name = 'feke-purple.png' onClick = {this.handleOnclick}/>
      <img className="feke-image" src = "images/feke-red.png" name = 'feke-red.png' onClick = {this.handleOnclick}/>

      <label htmlFor="name">Name </label>
        <input type="text" name='name' value={this.state.name} onChange={this.handleChange} />

      <label htmlFor="village">Village </label>
        <select value = {this.state.village} onChange={this.handleDropdown}>
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
      </form>
    </div>
  )
}
}

export default CreateFeke