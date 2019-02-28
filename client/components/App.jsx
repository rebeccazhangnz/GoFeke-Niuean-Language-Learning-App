import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Welcome from './Welcome'
// initial App.js file, subject to change


const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
    </Switch>
  )
}

export default App