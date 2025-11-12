import React from 'react';

const SocialButton = ({ iconClass, className }) => {
    return (
        <button className={`bg-white border rounded-full p-2 mx-1 ${className}`}>
            <i className={iconClass}></i>
        </button>
    );
};

export default SocialButton;
