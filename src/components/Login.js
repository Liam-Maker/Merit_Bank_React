import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'
import { BASE_URL_ADD } from '../ResourceEndpoints'


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const user = this.state

        axios.post(BASE_URL_ADD, user).then(res => {
            console.log(res.data)
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

                    <Button variant="dark" type="submit" style={{ width: 360 }}>Login</Button>
                </Form>
            </div>
        )
    }
}

export default Login

// import React, { Component } from 'react'
// import { Form, Button } from 'react-bootstrap';
// import axios from 'axios'

// const BASE_URL = "http://localhost:8080/api/accountholders/"

// class Login extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             username: '',
//             password: ''
//         }

//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleChange(e) {
//         const { name, value } = e.target
//         this.setState({
//             [name]: value
//         })

//     }

//     handleSubmit(e) {
//         e.preventDefault();

//         const user = this.state
//         console.log(user);
//         axios.post(BASE_URL, user).then(res => {
//             console.log(res.data)
//         })
//             .catch((err) => {
//                 console.error(err.message)
//             })

//         this.setState({
//             username: '',
//             password: ''
//         })
//     }

//     render() {
//         return (
//             <div className="container login" style={{ width: 400 }}>
//                 <Form onSubmit={this.handleSubmit}>
//                     <h2 className="text-center">Log In</h2>
//                     <Form.Group controlId="formBasicEmail">
//                         <Form.Label>User Name</Form.Label>
//                         <Form.Control onChange={this.handleChange} name="username" autoComplete="off" type="text" placeholder="Enter email" />
//                     </Form.Group>

//                     <Form.Group controlId="formBasicPassword" className="mb-3">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="password" onChange={this.handleChange} autoComplete="off" name="password" placeholder="Password" />
//                     </Form.Group>

//                     <Button variant="dark" type="submit" style={{ width: 376 }}>Login</Button>
//                 </Form>
//             </div>
//         )
//     }
// }

// export default Login;