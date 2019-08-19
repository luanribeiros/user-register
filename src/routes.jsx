import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import Login from './components/Login/index.jsx'
import Register from './components/Register/index.jsx'
import Perfil from './components/Perfil/index.jsx'

import { history } from './history.js'

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/register' exact component={Register} />
      <Route path='/perfil' exact component={Perfil} />
    </Switch>
  </Router>
)

export default Routes
