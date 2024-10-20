import React from 'react';
import PaginationItem from '../Button/PaginationItem';

const PaginationContainer = () => {
    return (
        <div className="flex items-center justify-center mb-8 w-inherit">
            <div className="flex items-center justify-around w-full">
                <PaginationItem></PaginationItem>
                <PaginationItem></PaginationItem>
                <PaginationItem></PaginationItem>
                <PaginationItem></PaginationItem>
                <span className="text-[#2f3a4a] text-[1.5rem] tracking-[2px]">...</span>
                <PaginationItem></PaginationItem>

                <div className="ml-3">
                    <a href="#" className="flex items-center justify-center h-[40px] bg-[#006977] text-white font-semibold px-4 rounded-lg transition-colors duration-250">
                        <span className="text-[0.875rem] font-semibold text-white capitalize">
                            Next 🡲
                        </span>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default PaginationContainer;
