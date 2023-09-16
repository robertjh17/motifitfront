import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconButton = ({ color,icon, text, onClick }) => {
    return (
        <button
            className={`bg-${color}-500 hover:bg-${color}-700  text-white font-bold py-2 px-3 rounded mx-1`}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={icon} className="button-icon mr-1" />
            {text}
        </button>
    );
}

export default IconButton;