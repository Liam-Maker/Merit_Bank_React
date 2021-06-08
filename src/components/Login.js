import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthorizationContext } from '../AuthorizationContext'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'
import { BASE_URL_ADD } from '../ResourceEndpoints'

function Login() {
    const [auth, setAuth] = useContext(AuthorizationContext)

    // const [jwt, setJwt] = useState('');
    // const [role, setRole] = useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //for redirect

    //For page redirect
    const history = useHistory();

    const user = {
        username: username,
        password: password
    }

    // useEffect()

    async function handleSubmit(e) {
        e.preventDefault();
        //Clear the form
        setUsername('')
        setPassword('')

        //Call the authentication endpoint
        axios.post(BASE_URL_ADD, user).then(res => {
            setAuth({
                jwt: res.data.jwt,
                role: res.data.roles,
                isLoggedIn: true
            });
            console.log('token from fetch', res.data)
            // setRole(res.data.roles)
            // setJwt(res.data.jwt)
            // console.log('role from fetch', res.data.roles)

            if (res.data != null) {
                if (res.data.roles === "[ROLE_ADMIN]") {
                    history.push("/admin")
                }
                if (res.data.roles === "[ROLE_USER]") {
                    history.push("/user")
                }

            }
        }).catch(err => {
            console.log(err.message)
        })


    }


    const updateName = (e) => {
        setUsername(e.target.value)
    }

    return (
        <div className="container login" style={{ width: 400 }}>
            <Form onSubmit={e => handleSubmit(e)}>
                <h2 className="text-center">Log In</h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control onChange={updateName} name="username" autoComplete="off" type="text" placeholder="Enter email" value={username} />
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
