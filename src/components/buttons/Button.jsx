import React from 'react';
import PropTypes from 'prop-types'

const Button = ({ color, text, onClick, type }) => {
    Button.PropTypes = {
        color: PropTypes.color,
        text: PropTypes.text,
        onClick: PropTypes.onClick,
        type: PropTypes.type

    };

    return (
        <button
            className={`
            bg-${color}-500
            hover:bg-motigreen-700 
            font-semibold
            text-white
            py-2 px-4
            rounded
            mx-1`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;