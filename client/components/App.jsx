import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './Home'
import CreateFeke from './CreateFeke'
import Dashboard from './Dashboard'
// import Quiz from './Quiz'
import Welcome from './Welcome'
import FekeStatus from './FekeStatus'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path='/welcome' component={Welcome} />
      <Route exact path='/feke' component={CreateFeke} />
      <Route exact path='/dashboard' component={Dashboard} />
      {/* <Route exact path='/quiz/:category' component={Quiz} />  */}

    </Switch>
  )
}

export default App
