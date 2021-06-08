import React, { useState, useEffect, useContext } from 'react'
import { AuthorizationContext } from '../../AuthorizationContext'
import { Redirect } from 'react-router-dom'

function UserDash() {
    useEffect(() => {
        console.log('user dash mounted')
    })

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
        <div>
            <h1>User Dashboard</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default UserDash
