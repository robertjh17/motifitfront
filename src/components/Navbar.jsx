import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo, faQuestionCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import MotiFitLogo from '../assets/MotiFitNavbarLogo.png';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

function Navbar() {
    const { isLoggedIn, logout } = useAuth();
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        window.location.href = '/';
        logout();
        setShowDropdown(false);
    };

    return (
        <nav className="fixed z-10 h-screen p-4 w-16 bg-motigreen-600 text-white">
            <div className="flex flex-col items-center space-y-4">
                <img src={MotiFitLogo} alt="Logo" className="h-5 w-5" />
                <NavLink to="/" className="text-2xl relative group">
                    <FontAwesomeIcon icon={faHome} className="mr-2" />
                    <span className="hidden absolute top-0 left-full w-24 p-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">Home</span>
                </NavLink>
                <NavLink to="/about" className="text-2xl relative group">
                    <FontAwesomeIcon icon={faInfo} className="mr-2" />
                    <span className="hidden absolute top-0 left-full w-24 p-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">About</span>
                </NavLink>
                <NavLink to="/helpcentrum" className="text-2xl relative group">
                    <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
                    <span className="hidden absolute top-0 left-full w-24 p-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">Help Centrum</span>
                </NavLink>
                {isLoggedIn && (
                    <>
                        <NavLink data-cy="addpost" to="/posting" className="text-2xl">
                            <FontAwesomeIcon icon={faPlus} className="mr-2" />
                        </NavLink>
                        <div className="relative group" onClick={handleDropdownToggle}>
                            <div className="flex items-center cursor-pointer">
                                <FontAwesomeIcon icon={faUser} data-cy="account" className="text-2xl mr-2" />
                            </div>
                            {showDropdown && (
                                <div className="absolute left-16 top-0 w-24 p-1 bg-black text-white rounded">
                                    <div data-cy="logout" className="cursor-pointer hover:underline flex items-center px-1" onClick={handleLogout}>
                                        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                                        <span >Log Uit</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
