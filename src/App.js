import './index.css';
import Navbar from './components/landing/header'
import Home from './components/Home'
import CreateUser from './components/CreateUser'
import Footer from './components/footer'

import { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login'

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/createuser">
                <CreateUser />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
