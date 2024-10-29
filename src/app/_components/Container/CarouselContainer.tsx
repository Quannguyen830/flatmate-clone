import React from "react";
import CarouselItem from "../Item/CarouselItem";
import { ImageProps } from "../Container/WidePostImageContainer";

const CarouselContainer: React.FC<ImageProps> = ({className, imageLength, imagesList}) => {
    return (
        <div className="rounded-[12px] bg-[#eaebec] h-[342px] overflow-hidden relative z-0">
            <div className="transition-all ease-out mx-auto relative w-full h-full z-10 flex">
                {imagesList?.map((image, index) => {
                    return (
                        <CarouselItem key={index} image={image}></CarouselItem>
                    )
                })}
            </div>
        </div>
    )
}

export default CarouselContainer;