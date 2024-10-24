import React from "react";

export interface ItemProps {
    className?: string,
    children?: React.ReactNode,
    backgroundImage?: string,
    srcset?: string,
}

const BreadcrumbsItem: React.FC<ItemProps> = ({ children }) => {
    return (
        <li className="inline-block font-semibold">
            <a href="/" className="text-[#2f3a4a] text-[0.75rem] leading-[0.875rem]">
                <span className="hover:underline ">
                    {children}
                </span>
                <span className="text-[1em] font-normal mx-[0.4rem] align-middle">
                    {">"}
                </span>
            </a>
        </li>
    )
}

export default BreadcrumbsItem;