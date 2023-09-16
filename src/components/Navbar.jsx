import React from 'react';
import { NavLink } from 'react-router-dom';
import MotiFitLogo from '../assets/MotiFitLogo.png';

function Navbar() {
    return (
        <nav className="container mx-auto max-w-full border-b-2 border-motigreen-500">
            <div className="grid grid-rows-1 grid-cols-3">
                <div className="flex items-center space-x-4 ml-3">
                    <img src={ MotiFitLogo} alt="Logo" className="h-8 w-auto" />
                </div>

                <ul className="flex space-x-4 col-start-2">
                    <div className="py-3 px-3 text-center border-b-2 border-transparent hover:cursor-pointer hover:border-motigreen-500 hover:text-motigreen">
                        <NavLink to="/">Home</NavLink>
                    </div>
                    <div className="py-3 px-3 text-center border-b-2 border-transparent hover:cursor-pointer hover:border-motigreen-500 hover:text-motigreen">
                        <NavLink to="/about">About</NavLink>
                    </div>
                </ul>

                {/* Voeg eventuele andere content aan de rechterkant toe */}
                <div>
                    {/* Plaats hier bijvoorbeeld inlogknoppen, meldingen, etc. */}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;