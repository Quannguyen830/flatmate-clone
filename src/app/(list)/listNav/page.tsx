import React from "react";
import NavBar from "../../_components/Bar/NavBar";
import Link from "next/link";
import PostContainer from "../../_components/Container/PostContainer";

const Page = () => {
    return (
        <div>
            <NavBar></NavBar>

            <div className="mb-12">
                <header>
                    <div>

                        <div>
                            <div
                                className="bg-center bg-no-repeat h-[375px] transition-[background-position] duration-[50ms]"
                                style={{
                                    backgroundImage:
                                        "url('https://flatmates-res.cloudinary.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto,w_800/v1652834440/location_landing_pages/sydney-03')",
                                }}
                            >
                                <h1 className="m-0 px-[10%] pt-[4.5rem] pb-[1.5rem] text-white text-[1.75rem] font-bold leading-[2rem] text-center">
                                    Find share accommodation in Sydney on Flatmates.com.au
                                </h1>
                                <h2 className="text-white text-[1.125rem] font-bold leading-[1.375rem] m-0 pb-[1rem] text-center">
                                    Start your search with a FREE listing
                                </h2>

                                <div className="flex justify-center items-center">
                                    <div className="bg-white/80 rounded-lg m-[0.625rem] min-w-[320px] px-[3rem] py-[1.5rem] text-center">
                                        <div>
                                            <h3 className="text-[#2f3a4a] text-[1rem] font-semibold mt-0 my-4">
                                                Need someone to move in?
                                            </h3>

                                            <Link href="#" className="flex bg-button-primary text-[#fff] justify-center text-center w-full text-[1rem] rounded-lg px-6 py-3 min-h-[3rem] min-w-[3rem] transition-colors duration-200 ease-in">
                                                Find people
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="bg-white/80 rounded-lg m-[0.625rem] min-w-[320px] px-[3rem] py-[1.5rem] text-center">
                                        <div>
                                            <h3 className="text-[#2f3a4a] text-[1rem] font-semibold mt-0 my-4">
                                                Need someone to move in?
                                            </h3>

                                            <Link href="#" className="flex bg-button-primary text-[#fff] justify-center text-center w-full text-[1rem] rounded-lg px-6 py-3 min-h-[3rem] min-w-[3rem] transition-colors duration-200 ease-in">
                                                Find people
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className="py-[3rem] pt-[2rem] bg-[#f2f3f4]">
                            <div className="min-h-auto px-4 mx-auto max-w-[1200px] float-none">
                                <h2 className="mb-[1.5rem] text-[1.75rem] font-semibold text-[#313a49]">
                                    Popular searches in Sydney
                                </h2>

                                <div className="m-0 overflow-hidden -translate-x-2 w-[calc(100%+16px)]">
                                    <button></button>

                                    <div className="translate-x-0 overflow-visible relative scroll-snap-x mandatory transition-transform duration-250">
                                        <div className="whitespace-nowrap w-[90%]">
                                            <div className="box-border inline-block overflow-hidden px-1 scroll-snap-start whitespace-normal">
                                                <Link href={"#"} className="flex items-center justify-center h-[78px] px-[5%] pl-[7.5%] w-[190px] bg-white border border-[#d5d7db] box-border text-[#2f3a4a]">
                                                    <span className="icon mr-[5%]">
                                                        <svg width="40" height="33" viewBox="0 0 40 33"><path d="M37.146 11.195v20.39H2.854v-20.39M39 12.122L20 1 1 12.122h38zM7.488 25.098h8.341v-4.635H7.488v4.635zm14.83 6.487V20.463h8.34v11.122" stroke="#2F3A4A" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                    </span>

                                                    <span className="text-[0.75rem] font-semibold h-auto m-0 text-left flex items-center leading-[1.4em]">
                                                        Room(s) in a sharehouse
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="box-border inline-block overflow-hidden px-1 scroll-snap-start whitespace-normal">
                                                <Link href={"#"} className="flex items-center justify-center h-[78px] px-[5%] pl-[7.5%] w-[190px] bg-white border border-[#d5d7db] box-border text-[#2f3a4a]">
                                                    <span className="icon mr-[5%]">
                                                        <svg width="40" height="33" viewBox="0 0 40 33"><path d="M37.146 11.195v20.39H2.854v-20.39M39 12.122L20 1 1 12.122h38zM7.488 25.098h8.341v-4.635H7.488v4.635zm14.83 6.487V20.463h8.34v11.122" stroke="#2F3A4A" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                    </span>

                                                    <span className="text-[0.75rem] font-semibold h-auto m-0 text-left flex items-center leading-[1.4em]">
                                                        Room(s) in a sharehouse
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="box-border inline-block overflow-hidden px-1 scroll-snap-start whitespace-normal">
                                                <Link href={"#"} className="flex items-center justify-center h-[78px] px-[5%] pl-[7.5%] w-[190px] bg-white border border-[#d5d7db] box-border text-[#2f3a4a]">
                                                    <span className="icon mr-[5%]">
                                                        <svg width="40" height="33" viewBox="0 0 40 33"><path d="M37.146 11.195v20.39H2.854v-20.39M39 12.122L20 1 1 12.122h38zM7.488 25.098h8.341v-4.635H7.488v4.635zm14.83 6.487V20.463h8.34v11.122" stroke="#2F3A4A" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                    </span>

                                                    <span className="text-[0.75rem] font-semibold h-auto m-0 text-left flex items-center leading-[1.4em]">
                                                        Room(s) in a sharehouse
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="box-border inline-block overflow-hidden px-1 scroll-snap-start whitespace-normal">
                                                <Link href={"#"} className="flex items-center justify-center h-[78px] px-[5%] pl-[7.5%] w-[190px] bg-white border border-[#d5d7db] box-border text-[#2f3a4a]">
                                                    <span className="icon mr-[5%]">
                                                        <svg width="40" height="33" viewBox="0 0 40 33"><path d="M37.146 11.195v20.39H2.854v-20.39M39 12.122L20 1 1 12.122h38zM7.488 25.098h8.341v-4.635H7.488v4.635zm14.83 6.487V20.463h8.34v11.122" stroke="#2F3A4A" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                    </span>

                                                    <span className="text-[0.75rem] font-semibold h-auto m-0 text-left flex items-center leading-[1.4em]">
                                                        Room(s) in a sharehouse
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="box-border inline-block overflow-hidden px-1 scroll-snap-start whitespace-normal">
                                                <Link href={"#"} className="flex items-center justify-center h-[78px] px-[5%] pl-[7.5%] w-[190px] bg-white border border-[#d5d7db] box-border text-[#2f3a4a]">
                                                    <span className="icon mr-[5%]">
                                                        <svg width="40" height="33" viewBox="0 0 40 33"><path d="M37.146 11.195v20.39H2.854v-20.39M39 12.122L20 1 1 12.122h38zM7.488 25.098h8.341v-4.635H7.488v4.635zm14.83 6.487V20.463h8.34v11.122" stroke="#2F3A4A" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                    </span>

                                                    <span className="text-[0.75rem] font-semibold h-auto m-0 text-left flex items-center leading-[1.4em]">
                                                        Room(s) in a sharehouse
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="box-border inline-block overflow-hidden px-1 scroll-snap-start whitespace-normal">
                                                <Link href={"#"} className="flex items-center justify-center h-[78px] px-[5%] pl-[7.5%] w-[190px] bg-white border border-[#d5d7db] box-border text-[#2f3a4a]">
                                                    <span className="icon mr-[5%]">
                                                        <svg width="40" height="33" viewBox="0 0 40 33"><path d="M37.146 11.195v20.39H2.854v-20.39M39 12.122L20 1 1 12.122h38zM7.488 25.098h8.341v-4.635H7.488v4.635zm14.83 6.487V20.463h8.34v11.122" stroke="#2F3A4A" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                    </span>

                                                    <span className="text-[0.75rem] font-semibold h-auto m-0 text-left flex items-center leading-[1.4em]">
                                                        Room(s) in a sharehouse
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="box-border inline-block overflow-hidden px-1 scroll-snap-start whitespace-normal">
                                                <Link href={"#"} className="flex items-center justify-center h-[78px] px-[5%] pl-[7.5%] w-[190px] bg-white border border-[#d5d7db] box-border text-[#2f3a4a]">
                                                    <span className="icon mr-[5%]">
                                                        <svg width="40" height="33" viewBox="0 0 40 33"><path d="M37.146 11.195v20.39H2.854v-20.39M39 12.122L20 1 1 12.122h38zM7.488 25.098h8.341v-4.635H7.488v4.635zm14.83 6.487V20.463h8.34v11.122" stroke="#2F3A4A" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                    </span>

                                                    <span className="text-[0.75rem] font-semibold h-auto m-0 text-left flex items-center leading-[1.4em]">
                                                        Room(s) in a sharehouse
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <button></button>
                                </div>
                            </div>
                        </section>
                    </div>
                </header>

                <main className="mt-[4.5rem] mx-auto max-w-[1200px]">
                    <section className="mb-[4.5rem] px-4">
                        <h2 className="p-0 text-[1.5rem] font-semibold text-[#2f3a4a] m-0">
                            Latest property listings in Sydney
                        </h2>

                        <PostContainer className="my-8"></PostContainer>

                        <Link href={"/listProperty"} className="p-0 text-[#005ce6] text-[1rem]">
                            View all properties in Sydney
                        </Link>
                    </section>

                    <section className="mb-[4.5rem] px-4">
                        <h2 className="p-0 text-[1.5rem] font-semibold text-[#2f3a4a] m-0">
                            Latest property listings in Sydney
                        </h2>

                        <PostContainer className="mt-8 pb-0"></PostContainer>

                        <Link href={"#"} className="p-0 text-[#005ce6] text-[1rem]">
                            View all properties in Sydney
                        </Link>
                    </section>
                    
                    <section className="mb-[4.5rem] px-4">
                        <h2 className="p-0 text-[1.5rem] font-semibold text-[#2f3a4a] m-0">
                            Latest property listings in Sydney
                        </h2>

                        <PostContainer className="my-8 pb-0"></PostContainer>

                        <Link href={"#"} className="p-0 text-[#005ce6] text-[1rem]">
                            View all properties in Sydney
                        </Link>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Page;