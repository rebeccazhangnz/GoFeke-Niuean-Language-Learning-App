import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Link to = {`/category`}>
        <h1 className="header-left">GO! Feke</h1>
      </Link>
      <Link to = {`/quiz`}>
      <h1 className="header-right">Quiz time</h1>
      </Link>
    </div>
  )
}

export default Header
