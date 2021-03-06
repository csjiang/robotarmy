'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import Home from './components/Home'
import Products from './components/Products'

import { loadAllProducts } from './reducers/products'

const App = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav> 
      {children}
    </div>
)

const onProductsEnter = function (nextRouterState) {
  store.getState().products.bases.length === 0 && store.dispatch(loadAllProducts());
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/products" component={Products} onEnter={onProductsEnter}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)