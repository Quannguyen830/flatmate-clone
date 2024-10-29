import React from "react";

export interface FeatureProps {
    svg?: React.ReactElement
    description?: string
}

const PropertyFeatureItem: React.FC<FeatureProps> = ({ svg, description }) => {
    return (
        <div className="inline-block min-w-[50%] mt-3 pr-2.5 align-middle my-5">
            <div className="inline-block float-left mr-2 text-center w-[24px]">
                <span className="text-center h-[24px] w-[24px]">
                    {svg}
                </span>
            </div>

            <div className="text-[#2f3a4a] block text-[1rem] leading-[1.375rem] overflow-hidden">
                <span className="inline-block font-semibold mr-3">
                    {description}
                </span>
            </div>
        </div>
    )
}

export default PropertyFeatureItem;