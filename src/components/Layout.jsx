import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { useAuth } from '../context/AuthContext';

function Layout() {
    const { isLoggedIn } = useAuth();

    return (
        <div className="grid grid-cols-3 gap-4">
            {isLoggedIn && (
                <Navbar className="col-span-1" />
            )}
            <main className={`col-span-3 col-start-${isLoggedIn ? 2 : 1}`}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;