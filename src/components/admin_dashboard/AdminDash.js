import React, { useState, useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthorizationContext } from '../../AuthorizationContext'

function AdminDash() {
    const [auth, setAuth] = useContext(AuthorizationContext)
    let isLoggedIn = auth.isLoggedIn;
    let role = auth.role;
    console.log(role)
    const logout = () => {
        setAuth({
            jwt: '',
            role: '',
            isLoggedIn: false
        })
    }

    console.log('auth comeing from admin dash', auth.isLoggedIn)

    if (!isLoggedIn && role !== "[ROLE_ADMIN]") {
        return <Redirect to="/login" />
    }

    return (
        <div className=".admin-container">
            <aside className="aside">
                <a href="#">Create AccountHolder</a>
                <a href="#">Create AccountHolder</a>
                <a href="#">Create AccountHolder</a>
                <a href="#">Create AccountHolder</a>
                <a href="#">Create AccountHolder</a>
                <a href="#">Create AccountHolder</a>

            </aside>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <button onClick={logout}>Logout</button>
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
