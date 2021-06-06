import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL_AUTHENTICATE } from '../../ResourceEndpoints';

class AccountHoldersList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            accountHolder: []
        }
    }

    componentDidMount() {
        //Get jwt token from local storage
        let jwt;

        if (localStorage.getItem('token') === null) {
            jwt = ''
        } else {
            jwt = JSON.parse(localStorage.getItem('token')).jwt;
        }

        axios.get(BASE_URL_AUTHENTICATE, {
            headers: {
                'Authorization': `Bearer ${jwt}`,
            }
        }).then((res) => {
            this.setState({
                accountHolder: res.data
            })
            console.log(this.state.accountHolder)
        }).catch((error) => {
            console.error(error)
        })
    }



    render() {
        return (
            <div className="container">
                <h1 className="text-center">Account Holders List</h1>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>SSN</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.accountHolder.map(emp =>
                                    <tr key={emp.id}>
                                        <td>{emp.id}</td>
                                        <td>{emp.firstName}</td>
                                        <th>{emp.lastName}</th>
                                        <th>{emp.ssn}</th>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default AccountHoldersList

