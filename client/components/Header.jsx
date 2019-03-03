import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Link to = {`/category`}>
        <h1 className="header">GO Feke!</h1>
      </Link>
    </div>
  )
}

export default Header
