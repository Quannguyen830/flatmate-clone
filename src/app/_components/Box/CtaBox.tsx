import React from 'react';
import { ItemProps } from '../Item/BreadcrumbsItem';
import Link from 'next/link';

const CtaBox: React.FC<ItemProps> = ({className, backgroundImage}) => {
    return (
        <Link href='#' className={`relative w-full mx-auto ${className}`}
            style={{
                backgroundImage: backgroundImage,
                backgroundPosition: 'right -2px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain'
            }}>
            <div className="group border-[2px] hover:border-black border-transparent rounded-[12px] shadow-[0_3px_8px_rgba(0,0,0,0.12),_0_3px_1px_rgba(0,0,0,0.04)] m-1 p-6">
                <div className="flex flex-col items-start justify-center h-[168px] relative z-20">
                    <h3 className="text-[#2f3a4a] text-[1.5rem] font-bold leading-[1.875rem] mb-2 max-w-[230px]">
                        Create a free property listing
                    </h3>
                    <p className='text-[#2f3a4a] text-base leading-6 mb-6 max-w-[230px]'></p>
                    <div className="bg-[#2f3a4a] group-hover:bg-[#44556d] border-0 rounded-md box-border inline-block font-sans text-[1rem] font-semibold min-w-[200px] px-4 py-3 text-center transition-colors duration-200">
                        <p className="text-white font-semibold leading-[1.5rem] m-0 text-[1rem] block text-center font-sans">
                            I need a flatmate
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CtaBox;