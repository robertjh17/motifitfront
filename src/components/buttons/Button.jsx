import React from 'react';

const Button = ({ color, text, onClick, type }) => {
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