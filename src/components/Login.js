import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { fetchToken } from '../redux/actions/loginAction'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })

    }

    handleSubmit(e) {
        e.preventDefault();

        const user = this.state

        this.props.fetchToken(user)

        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        return (
            <div className="container login" style={{ width: 400 }}>
                <Form onSubmit={this.handleSubmit}>
                    <h2 className="text-center">Log In</h2>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control onChange={this.handleChange} name="username" autoComplete="off" type="text" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={this.handleChange} autoComplete="off" name="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="dark" type="submit" style={{ width: 376 }}>Login</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    token: state.token

});

export default connect(mapStateToProps, { fetchToken })(Login);