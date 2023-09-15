import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faPhp, faJava, faJs } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';

function SkillsCard() {
    return (
        <div className="card mb-4 shadow">
            <div className="card-body">
                <h2 className="textprimary fs3">Skills</h2>
                <hr />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex align-items-center">
                        <div className="row">
                            <div className="col-2">
                                <FontAwesomeIcon icon={faHtml5} className="txt-primary me-2" />
                            </div>
                            <div className="col-9">
                                <p className="mb-0">HTML/CSS</p>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                        <div className="row">
                            <div className="col-2">
                                <FontAwesomeIcon icon={faPhp} className="txt-primary me-2" />
                            </div>
                            <div className="col-9">
                                <p className="mb-0">PHP</p>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                        <div className="row">
                            <div className="col-2">
                                <FontAwesomeIcon icon={faJava} className="txt-primary me-2" />
                            </div>
                            <div className="col-9">
                                <p className="mb-0">Java</p>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                        <div className="row">
                            <div className="col-2">
                                <FontAwesomeIcon icon={faCode} className="txt-primary me-2" />
                            </div>
                            <div className="col-8">
                                <p className="mb-0">C#</p>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                        <div className="row">
                            <div className="col-2">
                                <FontAwesomeIcon icon={faJs} className="txt-primary me-2" />
                            </div>
                            <div className="col-9">
                                <p className="mb-0">JavaScript</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default SkillsCard;