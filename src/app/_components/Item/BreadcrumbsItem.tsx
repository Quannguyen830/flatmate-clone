import React from "react";

export interface ItemProps {
    className?: string,
    children?: React.ReactNode,
}

const BreadcrumbsItem: React.FC<ItemProps> = ({ children }) => {
    return (
        <li className="inline-block font-semibold">
            <a href="/" className="text-[#2f3a4a] text-[0.75rem] leading-[0.875rem]">
                <span>
                    {children}
                </span>
                <span className="text-[0.5em] font-normal mx-4 align-middle">
                    <i className="fas fa-icon-name" aria-hidden="true">i</i>
                </span>
            </a>
        </li>
    )
}

export default BreadcrumbsItem;