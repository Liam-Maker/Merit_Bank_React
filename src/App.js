import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import Header from './components/Header';
import Landing from './components/Landing';
<<<<<<< HEAD
<<<<<<< HEAD
import Footer from './components/Footer';
import Login from './components/Login'
import AccountHoldersList from './components/AccountHolders'
=======
import Footer from './components/footer';
import Welcome from './components/Welcome'
>>>>>>> f2aeeabceab6d7064a9a0f0ea03b7433a90a08d3
=======
import Footer from './components/footer';
import Login from './components/Login'
import AccountHoldersList from './components/AccountHolders'
>>>>>>> e3a85006c59bc20cf05c6e832fae4e95b970d809


function App() {
    return (

        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Landing />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/accountholders">
                        <AccountHoldersList />
                    </Route>
                </Switch>

                <Footer />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e3a85006c59bc20cf05c6e832fae4e95b970d809
            </Router>
        </div>

    );
<<<<<<< HEAD
=======
                
            </div>
        );
    }
>>>>>>> f2aeeabceab6d7064a9a0f0ea03b7433a90a08d3
=======
>>>>>>> e3a85006c59bc20cf05c6e832fae4e95b970d809
}

export default App
