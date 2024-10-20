'use client'

import React, { useState } from 'react';

export interface InputProps {
    className?: string,
    placeholder?: string
}

const NormalInput: React.FC<InputProps> = ({className, placeholder}) => {
    const [email, setEmail] = useState('');

    return (
        <input
            type="text"
            placeholder={placeholder}
            className= {`border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-blue-300 ${className}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
    );
}

export default NormalInput;