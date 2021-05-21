import '../css/Header.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Merit Bank</h1>
            <div className="links">
                <Link to="/" className="link">Home</Link>
                <Link to="/login" className="link">Log In</Link>
            </div>
        </nav>
    )
}

export default Navbar
