import React from 'react';
import { ItemProps } from '../Item/BreadcrumbsItem';

const RightNextButton: React.FC<ItemProps> = ({className, children}) => {
    return (
        <button className={` ${className} hover:bg-[#eeecec] border-none absolute w-12 h-12 rounded-full bg-[#fff] text-[#fff] flex items-center justify-center top-[calc(50%-1.5rem)] cursor-pointer right-2 transition-colors duration-200 ease-in`}>
            <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="false"><path fillRule="evenodd" clipRule="evenodd" d="M7.146 2.146a.5.5 0 0 1 .708 0l9.5 9.5a.5.5 0 0 1 0 .708l-9.5 9.5a.5.5 0 0 1-.708-.708L16.293 12 7.146 2.854a.5.5 0 0 1 0-.708Z" fill="#000"></path></svg>
        </button>
    );
}

export default RightNextButton;
