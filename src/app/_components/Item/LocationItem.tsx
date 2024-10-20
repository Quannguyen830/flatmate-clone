import Link from "next/link";
import React from "react";

const LocationItem = () => {
    return (
        <Link href={"#"} className="flex items-center cursor-pointer text-[0.875rem] m-[0.25rem]">
            <svg height={"12px"} className="mr-1" viewBox="0 0 50 50"><path fill="#abb0b6" d="M 25 1 C 16.178 1 9 8.178 9 17 C 9 31.114 23.627 47.94625 24.25 48.65625 C 24.44 48.87325 24.712 49 25 49 C 25.31 48.979 25.56 48.87625 25.75 48.65625 C 26.373 47.93425 41 30.813 41 17 C 41 8.178 33.822 1 25 1 z M 25 12 C 28.313 12 31 14.687 31 18 C 31 21.313 28.313 24 25 24 C 21.687 24 19 21.313 19 18 C 19 14.687 21.687 12 25 12 z"></path></svg>
            <span>Sydney</span>
        </Link>
    )
}

export default LocationItem;