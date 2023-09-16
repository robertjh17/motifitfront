import React from 'react';

const OutlineButton = ({ color, text, onClick }) => {
    return (
        <button
            className={`
            hover:bg-motigreen-500
            text-${color}-500 
            font-semibold
            hover:text-white
            py-2 px-4
            border-${color}-500
            border-2
            rounded
            mx-1`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default OutlineButton;