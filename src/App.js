import './css/App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
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
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
