import Link from "next/link";
import React from "react";
import Footer from "~/app/_components/Bar/Footer";
import NavBar from "~/app/_components/Bar/NavBar";
import PostBox from "~/app/_components/Box/PostBox";
import WidePostBox from "~/app/_components/Box/WidePostBox";
import FeatureContainer from "~/app/_components/Container/FeatureContainer";
import GetStartedContainer from "~/app/_components/Container/GetStartedContainer";
import BreadcrumbsItem from "~/app/_components/Item/BreadcrumbsItem";
import StarIcon from "~/app/_components/Logo/StarLogo";

const Page = () => {
    return (
        <div className="">
            <NavBar></NavBar>

            <div className="bg-[#eaebec]">
                <GetStartedContainer></GetStartedContainer>

                <div className="bg-white shadow-[0_4px_4px_-2px_rgba(0,0,0,0.2)]">
                    <div className="block mx-auto max-w-[1200px] pb-1 pt-1 w-full">
                        <ol className="list-none m-0 p-0">
                            <li className="inline-block font-semibold">
                                <Link href="#" className="text-[#2f3a4a] text-xs leading-[0.875rem]">
                                    Home
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="pb-8 mx-auto max-w-[1000px] w-ful">
                    <div className="flex items-center justify-between">
                        <h1 className="text-[#2f3a4a] text-[1.125rem] font-bold leading-[22px] m-0 py-[2rem]">
                            
                        </h1>
                    </div>

                    <div className="flex items-center justify-between border-t border-b border-[#d5d7db]">
                        <div className="text-[#2f3a4a] text-sm font-medium">
                            Viewing 1-12 of 10000 results
                        </div>

                        <div className="flex items-center py-[0.75rem]">
                            <div className="w-[204px] mr-4 -mt-[0.25rem] text-left relative">
                                <div className="mb-1"></div>

                                <div className="relative pointer">
                                    <div className="outline-none w-full bg-[#fff] cursor-inherit relative border border-[#2f3a4a] rounded-lg">
                                        <div className="max-h-[100px] overflow-hidden overflow-y-auto flex items-start w-full px-4 pt-2 pb-0 scroll-snap-y">
                                            <div className="text-left overflow-x-hidden whitespace-nowrap overflow-ellipsis w-full mb-2 h-[2rem] text-[1rem] leading-[1.5rem]">
                                                <span className="leading-[2rem] text-[#2F3A4A]">
                                                    Feature First
                                                </span>
                                            </div>

                                            <div className="flex items-center h-[2rem] ml-4 pointer-events-none transition-transform duration-200 ease-in">
                                                <svg width={"1rem"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.146 4.646a.5.5 0 0 0 0 .708l6.5 6.5a.5.5 0 0 0 .708 0l6.5-6.5a.5.5 0 0 0-.708-.708L8 10.793 1.854 4.646a.5.5 0 0 0-.708 0Z" fill="currentColor"></path></svg>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="w-full">
                                        <ul className="mt-0 mb-0 hidden border-b-0 rounded-t-lg bg-[#fff] w-full overflow-auto list-none p-0 outline-none">

                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button className="flex justify-content items-center bg-white border border-[#2f3a4a] rounded-lg text-[#2f3a4a] inline-block text-[1rem] font-semibold leading-[22px] min-w-[180px] outline-none px-6 py-3">
                                    <span className="mr-2">
                                        <StarIcon></StarIcon>
                                    </span>
                                    <span>
                                        Login to save
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-start justify-between max-w-[1000px] mx-auto relative w-full">
                    <div className="w-full max-w-[640px]">
                        <div className="w-full">
                            <WidePostBox>
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-[1.25rem] leading-[26px] text-[#2f3a4a] font-bold">
                                        $350 / week inc. bills
                                    </p>
                                    <div className="flex items-center border border-[#2f3a4a] rounded-sm h-[20px] ml-4">
                                        <p className="text-[#2f3a4a] text-[0.75rem] font-semibold leading-[20px] m-0 px-2 whitespace-nowrap max-h-[5em] overflow-hidden text-ellipsis">
                                            Free to message
                                        </p>
                                    </div>
                                </div>

                                <p className="text-[#6d7580] text-[0.875rem] font-normal leading-[20px] m-0 pb-1 whitespace-nowrap max-h-[5em] overflow-hidden text-ellipsis">
                                    Victoria Park, Perth
                                </p>

                                <FeatureContainer></FeatureContainer>

                                <p className="text-[0.875rem] leading-[20px] text-[#6d7580] mt-[0.75rem]">
                                    Available now
                                </p>
                            </WidePostBox>
                        </div>
                    </div>

                    <div className="w-[300px] my-0 mx-auto">

                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default Page;