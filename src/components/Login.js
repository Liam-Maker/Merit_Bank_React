import axios from 'axios';
import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("works");
        const data = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post('http://localhost:8080/authenticate', data)
            .then(response => {
                console.log(response.data);
                localStorage.setItem('token', response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <div className="">
                        <h2 className="title">Login</h2>
                    </div>

                    <div className="input-container">
                        <input type="text" placeholder="Username" name="username" onChange={this.handleChange} />
                        <i class="zmdi zmdi-account zmdi-hc-lg"></i>
                    </div>

                    <div className="input-container">
                        <input type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                        <i class="zmdi zmdi-lock zmdi-hc-lg"></i>
                    </div>

                    <div className="input-container">
                        <button type="submit">Sign In</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
