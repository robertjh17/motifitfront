import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState(null);

    async function loginCheck() {
        const token = localStorage.getItem('accessToken');
        try {
            const response = await axios.get('https://localhost:7150/api/Auth/loginCheck', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                setIsLoggedIn(true);
                setUserName(response.data);
            }
        } catch (error) {

            setIsLoggedIn(false);
        }
        
    }

    useEffect(() => {
        loginCheck();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, userName }}>
            {children}
        </AuthContext.Provider>
    );
}