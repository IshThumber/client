import React from 'react'
import { Home, Page } from './routes'
// import Page from "./routes/Page";
import { Switch, Route, Link } from 'react-router-dom';

const App = () => {

  return (
    <>
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/Page">Page</Link>
      </div>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/Page" component={Page} />
        </Switch>
      </div>

    </>
  )
}

export default App