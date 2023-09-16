import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import OutlineButton from './buttons/OutlineButton';
import IconButton from './buttons/IconButton';

function ProfileCard({ handleContactForm }) {
    return (
        <div className="bg-white shadow-md mb-3 rounded-lg p-4 text-center">
            <FontAwesomeIcon icon={faCircleUser} className="h-24 mx-auto" />
            <h1 className="text-motigreen-500 text-lg font-semibold mt-1">Robert-Jan Haasnoot</h1>
            <p className="text-body-secondary">Student HBO-ICT</p>
            <p className="text-body-secondary">Dronten, Nederland</p>
            <div className="flex justify-center mt-2 space-x-2">
                <IconButton color="motigreen" icon={faPlus} text="Follow" />
                <OutlineButton color="motigreen" text="Contact" onClick={handleContactForm} />
            </div>
        </div>
    )
}
export default ProfileCard;