import React from 'react';
import { Interface } from 'readline';

export interface ButtonProps {
    children?: React.ReactNode,
    className?: string,
    value?: string
    onClick?: () => void
}

const LoginButton: React.FC<ButtonProps> = ({ children, className, value, onClick }) => {
    return (
        <button
            className={`border mb-2 mt-6 w-full block mx-auto min-w-[190px] transition duration-250 text-[1rem] leading-[1.5rem] font-semibold relative rounded-md p-3 px-6 min-h-[3rem] ${className}`}
            type='submit'
            name='action'
            value={value}
            onClick={onClick}
        >
            <span>{children}</span>
        </button>
    );
}

export default LoginButton;
