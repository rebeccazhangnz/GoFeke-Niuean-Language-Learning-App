import React from 'react'
import { Link } from 'react-router-dom'

const CreateFeke = () => {
  return (
    <div>
      <p>Name your feke and your village</p>
        <form onSubmit={this.handleSubmit}>

        <label htmlFor="name">Name</label>
        <input type="text" />

        <label htmlFor="village">Village</label>
        <input type="text" />
        <input type="submit" value="Create feke" />
        </form>
      </div>
  )
}

export default CreateFeke