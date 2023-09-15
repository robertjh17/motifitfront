import React from 'react';
import GDPRConsent from './GDPRConsent';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <GDPRConsent />
                <span className="text-muted">© 2021 - <a href="https://nl.linkedin.com">Robert-Jan Haasnoot</a></span>
            </div>
        </footer>
    );
}

export default Footer;