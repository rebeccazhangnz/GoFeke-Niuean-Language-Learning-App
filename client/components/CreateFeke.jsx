import React from 'react'
// import {Link} from 'react-router-dom'

const CreateFeke = () => {
  return (
    <div className='create-page'>
    <form>
      <h2>Create your feke friend</h2>
        <img className='create-img' src='/images/feke-green.png'/>
        <label htmlFor="name">Name </label>
        <input type="text" />

        <label htmlFor="village">Village </label>
        <input type="text" />
        <input type="submit" value="Go feke!" />
      </form>
    </div>
  )
}

export default CreateFeke

// handleSubmit will need to be defined.
