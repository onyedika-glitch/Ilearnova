import React from 'react';
import SignupPage from './pages/SignupPage';
import SignupForm from 'components/Form/ SignupForm';
import SignupLayout from './layouts/SignupLayout';
import LeftSection from './layouts/LeftSection';
import RightSection from './layouts/RightSection';


const App = () => {
    return (
        <div className="flex min-h-screen">
            <SignupPage />
            <div className="flex min-h-screen">
            </div>
            <SignupForm></SignupForm>
            <Layout>
            <LeftSection />
                <RightSection />
            <SignupLayout />  
        </Layout>
 
            <div className="hidden md:block md:w-1/2 bg-blue-800 relative">
                <img src="assets/img/auth/auth.png" alt="Illustration of a person reading a book with a light bulb in the background" className="absolute inset-0 w-full h-full object-cover" height="800" width="600" />
            </div>
        </div>
    );
};

const SignupLayout = () => {
    return (
        <div className="flex w-full">
            <SignupForm />
            <SignupIllustration />
        </div>
    );
};

export default App;
