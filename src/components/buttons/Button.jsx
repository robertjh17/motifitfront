import React from 'react';

const Button = ({ color, text, onClick }) => {
    return (
        <button
            className={`bg-${color}-500 hover:bg-${color}-700  text-white font-bold py-2 px-3 rounded mx-1`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;