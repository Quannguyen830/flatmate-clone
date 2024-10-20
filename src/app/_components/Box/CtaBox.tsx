import React from 'react';
import { ItemProps } from '../Item/BreadcrumbsItem';

const CtaBox: React.FC<ItemProps> = ({className, children}) => {
    return (
        <a href='#' className={`relative w-full mx-auto ${className}`}
            style={{
                backgroundImage: 'url(https://flatmates-res.cloudinary.com/image/upload/dpr_2.0,f_auto,q_auto/v1624431481/flatmates_design/homepage-desktop-bed)',
                backgroundPosition: 'right -2px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain'
            }}>
            <div className="rounded-lg shadow-md m-1 p-6">
                <div className="flex flex-col items-start justify-center h-[168px] relative z-20">
                    <h3 className="text-[#2f3a4a] text-[1.5rem] font-bold leading-[1.875rem] mb-2 max-w-[230px]">
                        Create a free property listing
                    </h3>
                    <p className='text-[#2f3a4a] text-base leading-6 mb-6 max-w-[230px]'></p>
                    <div className="bg-[#2f3a4a] border-0 rounded-md box-border inline-block font-sans text-[1rem] font-semibold min-w-[200px] px-4 py-3 text-center transition-colors duration-200">
                        <p className="text-white font-semibold leading-[1.5rem] m-0 text-[1rem] block text-center font-sans">
                            I need a flatmate
                        </p>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default CtaBox;