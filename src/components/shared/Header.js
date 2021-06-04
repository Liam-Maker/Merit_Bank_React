import React from 'react';
import { Link } from 'react-router-dom'
import '../../App.css';

class Header extends React.Component {

    render() {
        return (
            <div className="App">
                <nav className="navbar text-light bg-dark justify-content-end">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login"><i className="fas fa-user"></i> Login</Link>
                        </li>
                    </ul>
                </nav>

                <nav className="navbar navbar-expand-lg shadow navbar-light bg-white">
                    <div className="container">
                        <Link to="/">
                            <img src="/images/logo.png" height="35" alt="logo" />
                        </Link>
                        <ul className="nav ml-auto nav-flex-icons">
                            <li className="nav-item">
                                <a className="nav-link waves-effect waves-dark">
                                    <i class="grey-text fab fa-facebook-square fa-2x"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link waves-effect waves-light">
                                    <i className="grey-text fab fa-instagram fa-2x"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link waves-effect waves-light"><i class="grey-text fab fa-twitter fa-2x"></i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
