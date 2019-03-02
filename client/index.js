import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {BrowserRouter as Router} from 'react-router-dom'

import App from './components/App'
import reducers from './reducers'

let store = createStore(reducers, compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

document.addEventListener('DOMContentLoaded', () => {
  render()
     store.subscribe(render)
})

function render () {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>,
    </Provider>,
    document.getElementById('root')
  )
}
