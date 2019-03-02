import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './Home'
import Welcome from './Welcome'
import CreateFeke from './CreateFeke'
// import Quiz from './Quiz'
import CategoryList from './CategoryList'
import Flashcard from './Flashcard'
import FekeStatus from './FekeStatus'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path='/welcome' component={Welcome} />
      <Route exact path='/feke' component={CreateFeke} />
      <Route exact path='/category' component={CategoryList} /> 
      <Route  path ='/category/:name' component={Flashcard}/>
      {/* <Route exact path='/quiz/:category' component={Quiz} />  */}
    </Switch>
  )
}

export default App
