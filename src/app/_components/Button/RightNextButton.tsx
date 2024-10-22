import React from 'react';

const RightNextButton = () => {
    return (
        <button className="border-none absolute w-12 h-12 rounded-full bg-[#fff] text-[#fff] flex items-center justify-center opacity-0 top-[calc(50%-1.5rem)] cursor-pointer right-2 transition-colors duration-200 ease-in">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M7.146 2.146a.5.5 0 0 1 .708 0l9.5 9.5a.5.5 0 0 1 0 .708l-9.5 9.5a.5.5 0 0 1-.708-.708L16.293 12 7.146 2.854a.5.5 0 0 1 0-.708Z" fill="#000"></path></svg>
        </button>
    );
}

export default RightNextButton;
