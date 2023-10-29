import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import PostItem from '../components/PostItem';
import Connector from '../components/SignalrConnector';
import Login from './Login';
import Register from './Register'; // Importeer het Registratie-component
import MotiFitLogo from '../assets/MotiFitLogo.png';
import HomePageBanner from '../assets/HomePageBanner.jpg';

function HomePage() {
    const { isLoggedIn } = useAuth();
    const [connector, setConnector] = useState(null);

    useEffect(() => {
        const newConnector = new Connector();
        setConnector(newConnector);
    }, []);

    const [showRegistration, setShowRegistration] = useState(false);

    const handleToggleRegistration = () => {
        setShowRegistration(!showRegistration);
    };

    return (
        <div>
            {!isLoggedIn && (
                <div className="bg-gray-100 flex justify-center items-center">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <img src={HomePageBanner} style={{ height: '90%' }} className="w-full object-cover" />
                        </div>
                        <div className="col-span-1 flex flex-col justify-center items-center">
                            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                                <img
                                    src={MotiFitLogo}
                                    alt="Instagram"
                                    className="w-60 mx-auto mb-4"
                                />
                                <h1 className="text-2xl font-semibold mb-4 text-center">Welkom bij Motifit!</h1>
                                {showRegistration ? <Register /> : <Login />}
                                <div className="text-center mb-4">
                                    <div className="w-2/4 mx-auto">
                                        <hr className="border-t-2 border-gray-500 border-opacity-80 shadow-sm" />
                                    </div>
                                </div>
                                <p className="text-center text-gray-500">
                                    {showRegistration ? (
                                        <>
                                            Heb je al een account? <a href="#" className="text-blue-500" onClick={handleToggleRegistration}>Log in</a>
                                        </>
                                    ) : (
                                        <>
                                            Heb je geen account? <a href="#" className="text-blue-500" onClick={handleToggleRegistration}>Registreer dan</a>
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isLoggedIn && (
                <PostItem connector={connector} />
            )}
        </div>
    );
}

export default HomePage;
