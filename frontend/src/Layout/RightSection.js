import React from 'react';

const RightSection = () => {
    return (
        <div className="hidden md:block md:w-1/2 bg-blue-800 relative">
            <img src="https://placehold.co/600x800" alt="Illustration of a person reading a book with a light bulb in the background" className="absolute inset-0 w-full h-full object-cover" />
        </div>
    );
};

export default RightSection;
