import React from "react";
import { ImageProps } from "../Container/WidePostImageContainer";

export interface CaroulseProps {
    image?: string
}

const CarouselItem: React.FC<CaroulseProps> = ({image}) => {
    return (
        <div className="border-r-[8px] border-white ml-auto inline-block h-full w-auto flex-shrink-0">
            <img height="342" width="414" src={image} alt="$210, Share-house, 3 bathrooms, Paddington QLD 4064" loading="lazy"></img>
        </div>
    )
}

export default CarouselItem;