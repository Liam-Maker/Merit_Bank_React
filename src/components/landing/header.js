import React, { Component } from 'react'

export class header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar text-light bg-dark justify-content-end">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="projeto-lyceum-login.html">
                                <i className="fas fa-user"></i> Login
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="container">
                    <nav className="navbar sticky-top navbar-expand-lg shadow navbar-light bg-white scrolling-navbar top-nav-collapse">
                        <div className="container">
                            <img src="/images/merit_logo.jpeg" height="70"
                                alt="logo" />
                            <ul className="nav ml-auto nav-flex-icons">
                                <li className="nav-item">
                                    <a class="nav-link waves-effect waves-light">
                                        <i className="grey-text fab fa-facebook-square fa-2x"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link waves-effect waves-light">
                                        <i className="grey-text fab fa-instagram fa-2x"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link waves-effect waves-light">
                                        <i className="grey-text fab fa-twitter fa-2x"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

        )
    }
}

export default header
