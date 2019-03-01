import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
// import Welcome from './Welcome'
// import CreateFeke from './CreateFeke'
import Dashboard from './Category'
// import Quiz from './Quiz'
import Welcome from './Welcome'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path='/welcome' component={Welcome} />
      {/* <Route exact path='/feke' component={CreateFeke} /> */}
      <Route exact path='/category' component={Dashboard} />
      <Route path='/category'
      {/* <Route exact path='/quiz/:category' component={Quiz} />  */}
    </Switch>
  )
}

export default App
