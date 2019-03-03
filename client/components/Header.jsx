import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to = {`/category`}>
        <h1>GO Feke!</h1>
      </Link>
    </div>
  )
}

export default Header
