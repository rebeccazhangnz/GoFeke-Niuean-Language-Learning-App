import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'


const App = () => {
  return (
    <Switch>
      <Route exact path="/welcome" component={Home} />
    </Switch>
  )
}

export default App