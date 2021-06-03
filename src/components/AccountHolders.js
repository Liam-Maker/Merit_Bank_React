import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'

const BASE_URL = "http://localhost:8080/api/accountholders/"
const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYyMjY3NjM4NywiaWF0IjoxNjIyNjQwMzg3fQ.aMJSxmCjYnTLAmOLHCDMzPcIl_4EOT-Lwrmd4Et_4wE"

class AccountHolders extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dataLoaded: false,
            accountHolder: [
                {
                    "id": "1",
                    "firstName": "Blank",
                    "middleName": "j",
                    "lastName": "Blank",
                    "ssn": "00000000"
                }
            ]
        }
    }

    componentDidMount() {
        // const token = localStorage.getItem('token');
        // console.log(token);
        // console.log('list component mounted')
        // const token = localStorage.getItem('Token');
        // console.log('token', token);
        // axios.get(BASE_URL, {
        //     headers: {
        //         'Authorization': `Bearer ${access_token}`
        //     }
        // }).then((res) => {
        //     this.setState({
        //         accountHolder: res.data
        //     })
        //     console.log(this.state.accountHolder)
        // }).catch((err) => {
        //     console.error(err.message)
        // })
        // axios.get(BASE_URL, {
        //     headers: {
        //         'Authorization': `Bearer ${access_token}`
        //     }
        // }).then((res) => {
        //     this.setState({
        //         accountHolder: res.data
        //     })
        //     console.log(this.state.accountHolder)
        // }).catch((err) => {
        //     console.error(err.message)
        // })
    }

    addList = () => {
        const token = localStorage.getItem('Token');
        console.log('token', localStorage.getItem('Token'));
        console.log('list mounted')
        axios.get(BASE_URL, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        }).then((res) => {
            this.setState({
                accountHolder: res.data
            })
            console.log(this.state.accountHolder)
        }).catch((err) => {
            console.error(err.message)
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Account Holders List</h1>
                <div className="row">
                    <Button onClick={this.addList}>Add AccountHolder</Button>
                </div>
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

export default AccountHolders

// import React, { Component } from 'react'
// import { Button } from 'react-bootstrap'
// import axios from 'axios'


// const BASE_URL = "http://localhost:8080/api/accountholders/"
// const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYyMjY0MzY1OCwiaWF0IjoxNjIyNjA3NjU4fQ.FQ9P7bwT1Xa2GhP0nOiVk3hyCek-2f0uJPNjn9kyuus"

// class AccountHoldersList extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             accountHolder: []
//         }

//     }

//     componentDidMount() {
//         const token = localStorage.getItem('token');
//         console.log(token);
//         axios.get(BASE_URL, {
//             headers: {
//                 'Authorization': `Bearer ${access_token}`
//             }
//         })
//             .then((res) => {
//                 this.setState({
//                     accountHolder: res.data
//                 })
//                 console.log(this.state.accountHolder)
//             })
//             .catch((error) => {
//                 console.error(error)
//             })
//     }

//     render() {
//         return (
//             <div className="container">
//                 <h1 className="text-center">Account Holders List</h1>
//                 <div className="row">
//                     <Button onClick={this.addEmployee}>Add Employee</Button>
//                 </div>
//                 <div className="row">
//                     <table className="table table-striped table-bordered">
//                         <thead>
//                             <tr>
//                                 <th>ID</th>
//                                 <th>First Name</th>
//                                 <th>Last Name</th>
//                                 <th>SSN</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 this.state.accountHolder.map(emp =>
//                                     <tr key={emp.id}>
//                                         <td>{emp.id}</td>
//                                         <td>{emp.firstName}</td>
//                                         <th>{emp.lastName}</th>
//                                         <th>{emp.ssn}</th>
//                                     </tr>)
//                             }
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         )
//     }
// }


// export default AccountHoldersList