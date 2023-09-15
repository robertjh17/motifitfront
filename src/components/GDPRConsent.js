import React, { useState, useEffect } from 'react';
function GDPRConsent() {
    const [showGDPRPopup, setShowGDPRPopup] = useState(true);

    useEffect(() => {
        const hasAcceptedGDPR = localStorage.getItem('hasAcceptedGDPR');
        if (hasAcceptedGDPR === 'true' || hasAcceptedGDPR === 'false') {
            setShowGDPRPopup(false);
        }
    }, []);


    const handleAccept = () => {
        localStorage.setItem('hasAcceptedGDPR', 'true');
        setShowGDPRPopup(false);
    };

    const handleDecline = () => {
        localStorage.setItem('hasAcceptedGDPR', 'false');
        setShowGDPRPopup(false);
    };

    return (
        showGDPRPopup && (
            <div className="container bg-white shadow rounded-top">
            <section>
            <div className="row py-2">
            
                    <div className="col-8 d-flex align-items-center">
                            <p>Deze website gebruikt cookies.
                                We gebruiken cookies om content te personaliseren, voor social media en het analyseren
                van verkeer op de website, advertenties.</p>
                    </div>
                <div className="col-4 d-flex align-items-center justify-content-end">
                        <button type="button" onClick={handleAccept} className="btn btn-primary mx-2">Accepteer</button>
                        <button type="button" onClick={handleDecline} className="btn btn-outline-primary mx-2">Weiger</button>
                    </div>
            
                </div>
            </section>
        </div>
        )
    )
}

export default GDPRConsent;