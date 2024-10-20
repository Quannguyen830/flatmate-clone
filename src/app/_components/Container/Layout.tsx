import React, { ReactNode } from 'react';
import Footer from '../Bar/Footer';

interface LayoutProps {
    children: ReactNode; // Children prop to accept any content
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
            <Footer></Footer>
        </div>
    );
};

export default Layout;