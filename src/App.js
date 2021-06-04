import Header from './components/shared/Header'
import Login from './components/Login'
import AccountHolders from './components/accountholders/AccountHolders'
import Landing from './components/Landing'
import Footer from './components/shared/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
    return (
        <Router >
            <Header />
            <Switch>
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/accountholders">
                    <AccountHolders />
                </Route>
            </Switch>
            <Footer />
        </Router>

    );
}

export default App;
