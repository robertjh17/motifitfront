import React from 'react';
import GDPRConsent from './GDPRConsent';
function Footer() {
    return (
        <>
            <footer className="container-fluid bg-dark text-white">
                <GDPRConsent />
            </footer>
        </>
    );
}

export default Footer;