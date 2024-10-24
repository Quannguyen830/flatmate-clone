import React from "react";
import CarouselItem from "../Item/CarouselItem";

const CarouselContainer = () => {
    return (
        <div className="rounded-[12px] bg-[#eaebec] h-[342px] overflow-hidden relative z-0">
            <div className="transition-all ease-out mx-auto relative w-full h-full z-10 flex">
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
            </div>
        </div>
    )
}

export default CarouselContainer;