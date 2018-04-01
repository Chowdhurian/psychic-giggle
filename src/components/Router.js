import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ListPicker from './ListPicker'
import App from './App'
import NotFound from './NotFound'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListPicker} />
        <Route path="/list/:listId" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
