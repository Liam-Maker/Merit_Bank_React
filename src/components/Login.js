import React, { useState } from 'react'
import { connect } from 'react-redux'

import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'
import { BASE_URL_ADD } from '../ResourceEndpoints'
import loginActionCreater from '../redux/Actions'

function Login(props) {
    console.log(props.token)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //For page redirect
    const history = useHistory();

    const user = {
        username: username,
        password: password
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Clear the form
        setUsername('')
        setPassword('')

        //Call the authentication endpoint
        axios.post(BASE_URL_ADD, user).then(res => {
            console.log(res.data)
            console.log('jwt: ', res.data.jwt)
            props.loginActionCreater(res.data.jwt)
        }).catch(err => {
            console.log(err.message)
        })

        history.push("/admin")
    }

    return (
        <div className="container login" style={{ width: 400 }}>
            <Form onSubmit={handleSubmit}>
                <h2 className="text-center">Log In</h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control onChange={e => setUsername(e.target.value)} name="username" autoComplete="off" type="text" placeholder="Enter email" value={username} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={e => setPassword(e.target.value)} autoComplete="off" name="password" placeholder="Password" value={password} />
                </Form.Group>

                <Button variant="dark" type="submit" style={{ width: 360 }}>Login</Button>
            </Form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginActionCreater: (jwt) => dispatch(loginActionCreater(jwt))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
