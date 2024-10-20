import React from "react";
import BlackButton from "../Button/BlackButton";
import NormalInput from "../Input/NormalInput";
import LoginButton from "../Button/LoginButton";
import LocationItem from "../Item/LocationItem";

const SearchContainer = () => {
    return (
        <div className="relative top-0 p-6 pt-0 h-auto max-h-[90vh] min-w-[500px] rounded-md shadow-md left-0 bottom-0 overflow-auto w-full text-left z-300 bg-[#fff]">
            <form action="">
                <section>
                    <div className="mx-auto max-w-[70%]">
                        <div className="m-0">
                            <div className="rounded-[3px] flex">
                                <div className="bg-[#2f3a4a] text-[#fff] text-[1rem] m-auto w-full rounded-bl-[2px] rounded-tl-[2px] border p-[11px] w-full">
                                    <span className="flex justify-center items-center">
                                        Rooms
                                    </span>
                                </div>
                                
                                <div className="bg-[#2f3a4a] text-[#fff] text-[1rem] m-auto w-full rounded-bl-[2px] rounded-tl-[2px] border p-[11px] w-full">
                                    <span className="flex justify-center items-center">
                                        Rooms
                                    </span>
                                </div>
                                
                                <div className="bg-[#2f3a4a] text-[#fff] text-[1rem] m-auto w-full rounded-bl-[2px] rounded-tl-[2px] border p-[11px] w-full">
                                    <span className="flex justify-center items-center">
                                        Rooms
                                    </span>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="mt-3">
                        <NormalInput></NormalInput>
                    </div>

                    <div>
                        <LoginButton></LoginButton>
                    </div>

                    <div className="my-4">
                        <span className="tex-[#6d7580] font-semibold">
                            <span className="flex my-3 flex-start flex-wrap">
                                <LocationItem></LocationItem>
                                <LocationItem></LocationItem>
                                <LocationItem></LocationItem>
                                <LocationItem></LocationItem>
                                <LocationItem></LocationItem>
                                <LocationItem></LocationItem>
                            </span>
                        </span>
                    </div>
                </section>
            </form>
        </div>
    )
}

export default SearchContainer;