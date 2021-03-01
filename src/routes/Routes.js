import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage'
import MenuPage from '../pages/MenuPage/MenuPage'

function Routes() {
  return (
    <Switch>
      <Route exact path='/' children={() => <Redirect to='/menu' />} />
      <Route exact path='/menu' component={MenuPage} />
      <Route exact path='/checkout' component={CheckoutPage} />
    </Switch>
  )
}

export default Routes
