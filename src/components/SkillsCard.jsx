import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faPhp, faJava, faJs } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';

function SkillsCard() {
    return (
        <div className="bg-white shadow-md rounded-lg mb-4">
            <div className="p-4">
                <h2 className="text-motigreen-500 font-medium text-2xl">Skills</h2>
                <hr className="my-2" />
                <ul className="list-none">
                    <li className="py-2 flex items-center border-b border-gray-200">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faHtml5} className="text-motigreen-500 mr-2" />
                            <p className="mb-0">HTML/CSS</p>
                        </div>
                    </li>
                    <li className="py-2 flex items-center border-b border-gray-200">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faPhp} className="text-motigreen-500 mr-2" />
                            <p className="mb-0">PHP</p>
                        </div>
                    </li>
                    <li className="py-2 flex items-center border-b border-gray-200">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faJava} className="text-motigreen-500 mr-2" />
                            <p className="mb-0">Java</p>
                        </div>
                    </li>
                    <li className="py-2 flex items-center border-b border-gray-200">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faCode} className="text-motigreen-500 mr-2" />
                            <p className="mb-0">C#</p>
                        </div>
                    </li>
                    <li className="py-2 flex items-center">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faJs} className="text-motigreen-500 mr-2" />
                            <p className="mb-0">JavaScript</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default SkillsCard;