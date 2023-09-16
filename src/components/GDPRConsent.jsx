import React, { useState, useEffect } from 'react';
import Button from './buttons/Button.jsx';
import OutlineButton from './buttons/OutlineButton';
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
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white p-4 m-4 rounded-lg shadow-lg ">
                <section>
                    <div className="flex items-center py-2">
                        <div className="w-8/12">
                            <p className="text-sm text-gray-700">
                                Deze website gebruikt cookies. We gebruiken cookies om content te personaliseren, voor social media en het analyseren van verkeer op de website, advertenties.
                            </p>
                        </div>
                        <div className="w-4/12 flex justify-end space-x-2">
                            <Button color="motigreen" text="Accepteer" onClick={handleAccept} />
                            <OutlineButton color="motigreen" text="Weiger" onClick={handleDecline} />
                        </div>
                    </div>
                </section>
            </div>
        )
    )
}

export default GDPRConsent;