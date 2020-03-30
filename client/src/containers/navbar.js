import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const navBar = () => {
    const router = useLocation();
    console.log(router)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Google Books</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className={router.pathname === '/search' || router.pathname === '/' ? "nav-item active" : "nav-item"}>
                    <Link to="/search" className="nav-link" >Search</Link>
                </li>
                <li className={router.pathname === '/saved' ? "nav-item active" : "nav-item"}>
                    <Link to="/saved" className="nav-link">Saved</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default navBar;