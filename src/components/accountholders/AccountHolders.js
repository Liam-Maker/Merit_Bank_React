import { AuthorizationContext } from '../../AuthorizationContext'
import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import { BASE_URL_AUTHENTICATE } from '../../ResourceEndpoints';

function AccountHolders() {
    const [auth, setAuth] = useContext(AuthorizationContext)
    let jwt = auth.jwt;
    // const [accountHolders, setAccountHolders] = useState([]);

    const accountHolders = [];
    useEffect(() => {
        console.log('accountholders mounted')
        console.log('auth:', auth)
        axios.get(BASE_URL_AUTHENTICATE, {
            headers: {
                'Authorization': `Bearer ${jwt}`,
            }
        }).then((res) => {
            accountHolders = res.data

            console.log(accountHolders)
        }).catch((error) => {
            console.error(error)
        })
    })
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
                            accountHolders.map(accountHolder =>
                                <tr key={accountHolder.id}>
                                    <td>{accountHolder.id}</td>
                                    <td>{accountHolder.firstName}</td>
                                    <th>{accountHolder.lastName}</th>
                                    <th>{accountHolder.ssn}</th>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AccountHolders

// class AccountHoldersList extends React.Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             accountHolder: []
//         }
//     }

//     componentDidMount() {
//         //Get jwt token context
//         // let jwt = ''
//         const { jwt, role, isLoggedIn } = this.context
//         console.log('from accountholders : ', jwt)
//         axios.get(BASE_URL_AUTHENTICATE, {
//             headers: {
//                 'Authorization': `Bearer ${jwt}`,
//             }
//         }).then((res) => {
//             this.setState({
//                 accountHolder: res.data
//             })
//             console.log(this.state.accountHolder)
//         }).catch((error) => {
//             console.error(error)
//         })
//     }



//     render() {
//         return (
//             <div className="container">
//                 <h1 className="text-center">Account Holders List</h1>
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
//                                 this.state.accountHolder.map(accountHolder =>
//                                     <tr key={accountHolder.id}>
//                                         <td>{accountHolder.id}</td>
//                                         <td>{accountHolder.firstName}</td>
//                                         <th>{accountHolder.lastName}</th>
//                                         <th>{accountHolder.ssn}</th>
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

