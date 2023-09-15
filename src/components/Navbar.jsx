import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white border-bottom brdr-primary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}

export default Navbar;