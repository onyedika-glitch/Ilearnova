import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            {children}
        </div>
    );
};

export default Layout;
