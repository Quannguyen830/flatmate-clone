import React, { ReactNode } from 'react';
import Footer from '../Bar/Footer';

interface LayoutProps {
    children: ReactNode;
    className?: string
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
            <Footer></Footer>
        </div>
    );
};

export default Layout;