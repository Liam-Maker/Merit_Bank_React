import axios from 'axios'
import { Jumbotron, Button } from 'react-bootstrap'
import React, { Component } from 'react'

export class Home extends Component {
    componentDidMount() {
        axios.get()
    }
    render() {
        return (
            <div className="container">
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
            </div>
            // <div>
            //     <div className="mb-3">
            //         <div className="mb-31">
            //         </div>
            //     </div>
            //     <div className="container" style={{ marginTop: '310px' }}>
            //         <div className="d-flex flex-column text-white py-3 align-items-center">
            //             <h4 className="h5 text-center">Welcome to Merit Bank</h4>
            //             <h1 class="font-weight-bold text-center pb-3">Your Bank</h1>

            //             <a className="font-weight-bold btn btn-dark btn-lg mb-1 px-5 shadow" href="#"
            //                 style={{ borderRadius: '50px' }}>Click Here To Open an Account</a>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default Home
