import React from 'react';
import SignupForm from '../components/SignupForm';

const LeftSection = () => {
    return (
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-8">
            <SignupForm />
        </div>
    );
};

export default LeftSection;
