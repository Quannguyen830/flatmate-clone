'use client'

import React, { useState } from 'react';

const PasswordInput = () => {
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div>
            <input 
                    type={passwordVisible ? 'text' : 'password'} 
                    placeholder="Password" 
                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                    type="button" 
                    className="absolute right-3 top-2 text-gray-600"
                    onClick={togglePasswordVisibility}
                >
                    {passwordVisible ? (
                        <span>👁️</span> // Eye icon for visible password
                    ) : (
                        <span>🔒</span> // Lock icon for hidden password
                    )}
                </button>
        </div>
    );
}

export default PasswordInput;