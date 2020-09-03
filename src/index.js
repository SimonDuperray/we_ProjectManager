import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './App'
import Connexion from './components/project-manager/Connexion'
import NotFound from './components/NotFound'
import * as serviceWorker from './serviceWorker'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path={process.env.PUBLIC_IRL + '/kartodix.github.io/ProjectManager/'} component={Connexion} />
      {/* <Route exact path='http://Kartodix.github.io/ProjectManager' component={Connexion} /> */}
      {/* <Route exact path='/' component={Connexion} /> */}
      <Route path='/pseudo/:pseudo' component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'))

serviceWorker.unregister()