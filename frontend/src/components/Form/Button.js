import React from 'react';

const Button = ({ text, onClick, className }) => {
    return (
        <button 
            className={`bg-gray-500 text-white font-bold py-2 px-4 rounded w-full ${className}`} 
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
