import React from 'react'

class CreateFeke extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '', village: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }



  handleSubmit = () => {
    // this.setState({value: event.target.value});
    alert(this.state.name)
  }


  render() {
    return (
      <div className='createfeke-page'>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="name">Name</label>
          <input type="text" name='name' value={this.state.name} onChange={this.handleChange} />

          <label htmlFor="village">Village</label>
          <input type="text" name='village' value={this.state.village} onChange={this.handleChange} />
          <input type="submit" value="Create feke" />
        </form>
      </div>
    )
  }
}

export default CreateFeke

// handleSubmit will need to be defined.
