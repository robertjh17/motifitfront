import React from 'react';
import GDPRConsent from './GDPRConsent';
function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 relative col-span-3">
            <div className="container mx-auto">
                
                    <GDPRConsent />
                
            </div>
        </footer>
    );
}

export default Footer;