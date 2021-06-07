import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/Store'

import Header from './components/shared/Header'
import Login from './components/Login'
import AccountHolders from './components/accountholders/AccountHolders'
import Landing from './components/Landing'
import Footer from './components/shared/Footer'
import AdminDashboard from './components/admin_dashboard/AdminDash'
import UserDashboard from './components/user_dashboard/UserDash'

function App() {
    return (
        <Provider store={store}>
            <Router >
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Landing />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/admin">
                        <AdminDashboard />
                    </Route>
                    <Route exact path="/user">
                        <UserDashboard />
                    </Route>
                    <Route exact path="/accountholders">
                        <AccountHolders />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </Provider>
    );
}

export default App;
