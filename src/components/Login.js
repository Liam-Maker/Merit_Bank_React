import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <div className="">
                        <h2 className="title">Sign In</h2>
                    </div>
                    <div className="input-container">
                        <input type="text" placeholder="Username" />
                        <i class="zmdi zmdi-account zmdi-hc-lg"></i>
                    </div>

                    <div className="input-container">
                        <input type="password" placeholder="Password" />
                        <i class="zmdi zmdi-lock zmdi-hc-lg"></i>
                    </div>
                    <div className="input-container">
                        <button type="submit">Sign In</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
