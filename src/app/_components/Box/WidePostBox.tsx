import React from "react";
import { ItemProps } from "../Item/BreadcrumbsItem";
import PostImageContainer from "../Container/PostImageContainer";
import FeatureContainer from "../Container/FeatureContainer";

const WidePostBox: React.FC<ItemProps> = ({ className, children }) => {
    return (
        <div className={`shadow-[0_0_8px_rgba(0,0,0,0.16)] mx-auto mb- max-w-full w-full rounded-[12px] overflow-hidden relative z-10 ${className}`}>
            <PostImageContainer></PostImageContainer>

            <a href="/property" className="px-6 pt-4 pb-6 h-full bg-white cursor-pointer block relative">
                <div className="shadow-none bg-white p-0 relative">
                    {children}
                </div>
            </a>
        </div>
    )
}

export default WidePostBox;