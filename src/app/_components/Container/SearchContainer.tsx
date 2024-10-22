import React from "react";
import BlackButton from "../Button/BlackButton";
import NormalInput from "../Input/NormalInput";
import LoginButton from "../Button/LoginButton";
import LocationItem from "../Item/LocationItem";
import { ItemProps } from "../Item/BreadcrumbsItem";

const SearchContainer: React.FC<ItemProps> = ({className, children}) => {
    return (
        <div className= {`${className} relative top-0 p-6 pb-0 h-auto max-h-[90vh] min-w-[500px] rounded-md shadow-[0px_2px_4px_1px_rgba(0,0,0,0.2)] left-0 bottom-0 overflow-auto w-full text-left z-300 bg-[#fff]`}>
            <form action="">
                <section>
                    <div className="mx-auto max-w-[70%]">
                        <div className="m-0">
                            <div className="rounded-[3px] flex">
                                <div className="bg-[#2f3a4a] text-[#fff] border-[#2f3a4a] border-l-[1px] border-b-[1px] border-r-[1px] border-t-[1px] text-[1rem] m-auto w-full rounded-bl-[2px] rounded-tl-[2px] p-[11px] w-full">
                                    <span className="flex justify-center items-center">
                                        Rooms
                                    </span>
                                </div>

                                <div className="bg-[#fff] text-[#2f3a4a] border-[#2f3a4a] border-b-[1px] border-r-[1px] border-t-[1px] border-t border-b text-[1rem] m-auto w-full rounded-bl-[2px] rounded-tl-[2px] p-[11px] w-full">
                                    <span className="flex justify-center items-center">
                                        Flatmates
                                    </span>
                                </div>

                                <div className="bg-[#fff] text-[#2f3a4a] border-[#2f3a4a] border-b-[1px] border-r-[1px] border-t-[1px] text-[1rem] m-auto w-full rounded-bl-[2px] rounded-tl-[2px] p-[11px] w-full">
                                    <span className="flex justify-center items-center">
                                        Teamups
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="border border-[#abb0b6] rounded-[3px] text-[#828992] text-[1rem] px-[0.75rem] py-[0.5rem] mt-3">
                        <NormalInput className="border-0 rounded-none text-[#2f3a4a] text-[1rem] h-auto leading-[2rem] outline-none p-0 transition-all w-full px-0 py-0" placeholder="Start typing surburb, city, station or uni"></NormalInput>
                    </div>

                    <div>
                        <button className="mt-[0.75rem] text-[#fff] w-full transition duration-250 border-none text-[1rem] leading-[1.5rem] font-semibold flex items-center justify-center bg-button-primary rounded-lg px-6 py-3 cursor-pointer no-underline min-h-[3rem] min-w-[3rem]">
                            <span className="mr-1">
                                <svg className="h-[20px] mb-[-1px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Interface / Search_Magnifying_Glass">
                                        <path id="Vector" d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg>
                            </span>
                            <span>
                                Search
                            </span>
                        </button>
                    </div>

                    <div className="my-4">
                        <span className="text-[#6d7580] font-semibold">
                            Explore a city
                        </span>
                        <span className="flex my-3 flex-start flex-wrap">
                            <LocationItem>Sydney</LocationItem>
                            <LocationItem>Melbourne</LocationItem>
                            <LocationItem>Brisbane</LocationItem>
                            <LocationItem>Perth</LocationItem>
                            <LocationItem>Gold Coast</LocationItem>
                            <LocationItem>Adelaide</LocationItem>
                        </span>
                    </div>
                </section>
            </form>
        </div>
    )
}

export default SearchContainer;