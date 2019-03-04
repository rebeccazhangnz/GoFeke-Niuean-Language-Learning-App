import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Welcome from './Welcome'
import CreateFeke from './CreateFeke'
import Dashboard from './Dashboard'
import Flashcard from './Flashcard'
import Header from './Header'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/welcome' component={Welcome} />
        <Route exact path='/feke' component={CreateFeke} />
        <Route exact path='/category' component={Dashboard} />
        <Route path ='/category/:name' component={Flashcard}/>
      </Switch>
    </React.Fragment>
  )
}

export default App
