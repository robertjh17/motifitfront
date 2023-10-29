import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function SkillCardItem(props) {
    <li className="py-2 flex items-center border-b border-gray-200">
        <div className="flex items-center">
            <FontAwesomeIcon icon={props.icon} className="text-motigreen-500 mr-2" />
            <p className="mb-0">{props.taal}</p>
        </div>
    </li>
}

export default SkillCardItem;