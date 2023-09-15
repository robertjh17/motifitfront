import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faPlus } from '@fortawesome/free-solid-svg-icons';

function ProfileCard({ handleContactForm }) {
    return (
        <div className="card mb-4 shadow">
            <div className="card-body text-center">
                <FontAwesomeIcon icon={faCircleUser} className="profile-image" />
                <h1 className="col-12 mt-1 fs-4 txt-primary">Robert-Jan Haasnoot</h1>
                <p className="text-body-secondary mb-1">Student HBO-ICT</p>
                <p className="text-body-secondary mb-4">Dronten, Nederland</p>
                <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">
                        <FontAwesomeIcon icon={faPlus} className="button-icon mr-3"/>
                        Follow
                    </button>
                    <button onClick={handleContactForm} type="button" className="btn btn-outline-primary ms-1">Contact</button>
                </div>
            </div>
        </div>
)
}
export default ProfileCard;