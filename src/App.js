import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header, Home } from './components'
// lazy load login and signup pages
// using lazy and Suspence
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' children={<p>login</p>} />
        <Route exact path='/checkout' children={<p>checkout </p>} />
        <Route exact path='/'>
          <Header />
          <Home />
        </Route>

        <Route path='*' children={<p>404 error page not found</p>} />
      </Switch>
    </Router>
  )
}

export default App
