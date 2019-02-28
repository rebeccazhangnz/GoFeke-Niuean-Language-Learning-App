import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Welcome from './Welcome'


const App = () => {
  return (
    <Switch>
      <Route exact path="/welcome" component={Welcome} />
    </Switch>
  )
}

export default App