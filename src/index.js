import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './App'
import Connexion from './components/project-manager/Connexion'
import NotFound from './components/NotFound'
import * as serviceWorker from './serviceWorker'

import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const Root = () => (
  // <Router>
  //   <Switch>
  //     <Route exact path='/' component={Connexion} />
  //     <Route path='/pseudo/:pseudo' component={App} />
  //     <Route component={NotFound} />
  //   </Switch>
  // </Router>
  <Router>
    <Switch>
      <Route exact path='/' component={Connexion} />
      <Route exact path='/pseudo/:pseudo' component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'))

serviceWorker.unregister()
