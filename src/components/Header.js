import React from 'react';
import '../App.css';

class Header extends React.Component {

    render() {
        return (
            <div className="App">
                <nav className="navbar text-light bg-dark justify-content-end">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fas fa-user"></i> Login</a>
                        </li>
                    </ul>
                </nav>

                <nav class="navbar sticky-top navbar-expand-lg shadow navbar-light bg-white scrolling-navbar top-nav-collapse">
                    <div class="container">
                        <img src="/images/logo.png" height="35" alt="logo" />
                        <ul class="nav ml-auto nav-flex-icons">
                            <li class="nav-item">
                                <a class="nav-link waves-effect waves-dark">
                                    <i class="grey-text fab fa-facebook-square fa-2x"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link waves-effect waves-light">
                                    <i class="grey-text fab fa-instagram fa-2x"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link waves-effect waves-light"><i class="grey-text fab fa-twitter fa-2x"></i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
