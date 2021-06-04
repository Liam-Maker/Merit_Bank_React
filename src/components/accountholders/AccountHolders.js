import React, { Component } from 'react'
// import { Button } from 'react-bootstrap'
import axios from 'axios'


const BASE_URL = "http://localhost:8080/api/accountholders/"
const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjIyODA3MjUzLCJpYXQiOjE2MjI3NzEyNTN9.ltj4qVcbnWmq9VtkBK5MskLGCqANmgmolVK7cJryaac"

class AccountHoldersList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            accountHolder: []
        }

    }

    componentDidMount() {

        axios.get(BASE_URL, {
            headers: {
                'Authorization': `Bearer ${access_token}`,
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then((res) => {
                this.setState({
                    accountHolder: res.data
                })
                console.log(this.state.accountHolder)
            })
            .catch((error) => {
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

// import React, { Component } from 'react'
// import { Form, Button } from 'react-bootstrap';
// import axios from 'axios'

// const BASE_URL = "http://localhost:8080/api/accountholders/"
// const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYyMjgwNTQwNywiaWF0IjoxNjIyNzY5NDA3fQ.lrgHHkGDlvMcQ_P2PGfsb-2yq2RHSLzmfehaxllOIwA"

// class AccountHolders extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             dataLoaded: false,
//             accountHolder: [
//                 {
//                     "id": "1",
//                     "firstName": "Blank",
//                     "middleName": "j",
//                     "lastName": "Blank",
//                     "ssn": "00000000"
//                 }
//             ]
//         }
//     }

//     componentDidMount() {
//         const token = localStorage.getItem('token');
//         console.log(token);
//         console.log('list component mounted')
//         console.log('token', token);
//         console.log('component mounted')
//         fetch(BASE_URL, {
//             headers: {
//                 'Authorization': 'Bearer ' + access_token
//             }
//         }).then(res => {
//             this.setState({
//                 accountHolder: res.data
//             })
//             console.log(this.state.accountHolder)
//         }).catch((err) => {
//             console.log('Catch Error', err.message)
//         })

//     }

//     render() {
//         return (
//             <div className="container">
//                 <h1 className="text-center">Account Holders List</h1>
//                 <div className="row">
//                     <Button onClick={this.addList}>Add AccountHolder</Button>
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
//                                 this.state.accountHolder.map(acchold =>
//                                     <tr key={acchold.id}>
//                                         <td>{acchold.id}</td>
//                                         <td>{acchold.firstName}</td>
//                                         <th>{acchold.lastName}</th>
//                                         <th>{acchold.ssn}</th>
//                                     </tr>)
//                             }
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         )
//     }
// }

// export default AccountHolders
