import React from "react";
import { ItemProps } from "../Item/BreadcrumbsItem";
import WidePostImageContainer, { ImageProps } from "../Container/WidePostImageContainer";
import FeatureContainer from "../Container/FeatureContainer";

const WidePostBox: React.FC<ImageProps> = ({ className, children, imagesList, imageLength, propertyId }) => {
    return (
        <div className={`shadow-[0_0_8px_rgba(0,0,0,0.16)] mx-auto mb-8 max-w-full w-full rounded-[12px] ${className}`}>
            <WidePostImageContainer propertyId={`${propertyId}`} imagesList={imagesList} imageLength={imageLength}>

            </WidePostImageContainer>

            <a href={`${propertyId}`} className="px-6 pt-4 pb-6 h-full bg-white block">
                <div className="p-0">
                    {children}
                </div>
            </a>
        </div>
    )
}

export default WidePostBox;