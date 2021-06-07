import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function AdminDash() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    console.log(isLoggedIn)
    const logout = () => {

    }

    if (!isLoggedIn) {
        return <Redirect to="/login" />
    }

    return (
        <div className=".admin-container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a className="btn-logout" href="#" onClick={logout}>Logout <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <h1>Welcome to Admin Dashboard</h1>
            </div>
            <div className="container">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Fluid jumbotron</h1>
                        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDash


// import React, { useState } from 'react'
// import { Redirect } from 'react-router-dom'

// function Admin() {
//     const [auth, setAuth] = useState(false)

//     let isAuthenticated = auth;

//     const logout = () => {
//         localStorage.clear();
//     }

//     if (!isAuthenticated) {
//         return <Redirect to="/" />
//     }

//     return (
//         <div className=".admin-container">
//             <nav class="navbar navbar-expand-lg navbar-light bg-light">
//                 <div class="collapse navbar-collapse" id="navbarNav">
//                     <ul class="navbar-nav">
//                         <li class="nav-item active">
//                             {/* <a className="btn-logout" href="#" onClick={logout}>Logout <span class="sr-only">(current)</span></a> */}
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//             <div className="container">
//                 <h1>Welcome to Admin Dashboard</h1>
//             </div>
//             <div className="container">
//                 <div class="jumbotron jumbotron-fluid">
//                     <div class="container">
//                         <h1 class="display-4">Fluid jumbotron</h1>
//                         <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Admin

// function admin_main() {
//     const [auth, setAuth] = useState(false)
//     if (localStorage.getItem('auth') === null) {
//         auth = false;
//     } else {
//         auth = localStorage.getItem('auth');
//     }

//     useEffect(() => {

//     }, [])

    // const logout = () => {
    //     localStorage.clear();
    //     auth = false
    //     return <Redirect to="/login" />
    // }

//     if (!auth) {
//         return <Redirect to="/login" />
//     }
//     return (
//         <div className=".admin-container">
//             <nav class="navbar navbar-expand-lg navbar-light bg-light">
//                 <div class="collapse navbar-collapse" id="navbarNav">
//                     <ul class="navbar-nav">
//                         <li class="nav-item active">
//                             <a className="btn-logout" href="#" onClick={logout}>Logout <span class="sr-only">(current)</span></a>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//             <div className="container">
//                 <h1>Welcome to Admin Dashboard</h1>
//             </div>
//             <div className="container">
//                 <div class="jumbotron jumbotron-fluid">
//                     <div class="container">
//                         <h1 class="display-4">Fluid jumbotron</h1>
//                         <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default admin_main

