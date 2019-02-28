import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
// import Welcome from './Welcome'
import CreateFeke from './CreateFeke'
import Study from './Study'
// import Quiz from './Quiz'
 
const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path='/welcome' component={Welcome} />
      <Route exact path='/feke' component={CreateFeke} />
      <Route exact path='/studymaterial/:category' component={Study} />
      <Route exact path='/quiz/:category' component={Quiz} /> */}
    </Switch>
  )
}

export default App