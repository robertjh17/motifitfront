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
                <button
                    className={`bg-motigreen-500 hover:bg-motigreen-700  text-white font-bold py-2 px-3 rounded mx-1`}
                    
                >
                    <FontAwesomeIcon icon={ faPlus} className="button-icon mr-1" />
                    Follow
                </button>
                <OutlineButton color="motigreen" text="Contact" onClick={handleContactForm} />
            </div>
        </div>
    )
}
export default ProfileCard;