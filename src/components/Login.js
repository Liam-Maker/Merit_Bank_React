import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { actionCreators } from '../redux/index'
import { logIn } from '../redux/Actions'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'
import { BASE_URL_ADD } from '../ResourceEndpoints'

function Login() {
    const role = useSelector(state => state.auth.role)
    const dispatch = useDispatch();

    // const { logIn } = bindActionCreators(actionCreators, dispatch)

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
            dispatch(logIn(res.data))
        }).catch(err => {
            console.log(err.message)
        })

        if (role === "[ROLE_ADMIN]") {
            history.push("/admin")
        }
        else if (role === "[ROLE_USER]") {
            history.push("/user")
        }
        else {
            history.push("/login")
        }
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

// const mapStateToProps = state => {
//     return {
//         token: state.token
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         loginActionCreater: (jwt) => dispatch(loginActionCreater(jwt))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login)

export default Login
