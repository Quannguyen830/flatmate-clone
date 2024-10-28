import React from "react";
import NavBar from "~/app/_components/Bar/NavBar";
import LoginButton from "~/app/_components/Button/LoginButton";
import CarouselContainer from "~/app/_components/Container/CarouselContainer";
import FeatureContainer from "~/app/_components/Container/FeatureContainer";
import GetStartedContainer from "~/app/_components/Container/GetStartedContainer";
import BreadcrumbsItem from "~/app/_components/Item/BreadcrumbsItem";
import DescriptionItem from "~/app/_components/Item/DescriptionItem";
import StarIcon from "~/app/_components/Logo/StarLogo";


const Page = () => {
    return (
        <div>
            <NavBar></NavBar>

            <div className="bg-[#f4f5f5]">
                <div className="block m-auto max-w-[1200px] px-[3%]">
                    <GetStartedContainer></GetStartedContainer>
                </div>
            </div>

            <div>
                <div className="px-6 mx-auto max-w-[1200px]">
                    <div className="block">
                        <ol className="list-none m-0 p-0">
                            <BreadcrumbsItem>Home</BreadcrumbsItem>
                            <BreadcrumbsItem>Home</BreadcrumbsItem>
                            <BreadcrumbsItem>Home</BreadcrumbsItem>
                            <BreadcrumbsItem>Home</BreadcrumbsItem>
                            <BreadcrumbsItem>Home</BreadcrumbsItem>
                            <BreadcrumbsItem>Home</BreadcrumbsItem>
                        </ol>
                    </div>
                </div>

                <div className="p-4 pt-6 mx-auto max-w-[1200px]">
                    <div className="relative">
                        <span className="absolute flex top-6 right-6 z-10">
                            <div className="mr-2 p-[0.5rem] px-[1.5rem] bg-white rounded-[8px] inline-block h-[40px] flex justify-center items-center">
                                <span className="text-[#6d737e] text-[1rem] font-semibold leading-[1.5rem] mr-2">Share</span>
                                <div className="inline-block flex justify-center items-center align-top">
                                    <div className="mr-3 cursor-pointer inline-block h-full">
                                        <a href="#">
                                            <span className="align-middle">
                                                <svg width={"16px"} viewBox="0 0 16 16"><path fill="#6d737e" d="M11.027 15.967v-6.17h2.07l.31-2.405h-2.38V5.856c0-.696.193-1.17 1.192-1.17h1.272V2.533c-.22-.03-.976-.094-1.855-.094-1.836 0-3.093 1.12-3.093 3.178v1.774H6.467v2.405h2.077v6.17h2.483"></path></svg>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="mr-3 cursor-pointer inline-block h-full">
                                        <a href="#">
                                            <span className="align-middle">
                                                <svg width={"16px"} viewBox="0 0 16 13"><path fill="#6d737e" d="M15.964 1.536c-.587.26-1.218.436-1.88.516.675-.406 1.195-1.048 1.44-1.813-.633.375-1.334.647-2.08.794C12.845.398 11.993 0 11.053 0c-1.81 0-3.277 1.466-3.277 3.275 0 .257.03.507.085.747C5.14 3.885 2.727 2.582 1.112.6.828 1.082.667 1.645.667 2.245c0 1.136.578 2.14 1.457 2.726-.537-.017-1.042-.164-1.484-.41v.042c0 1.587 1.13 2.91 2.628 3.21-.274.076-.564.116-.862.116-.21 0-.417-.02-.617-.06.416 1.303 1.626 2.25 3.06 2.276-1.122.88-2.534 1.402-4.07 1.402-.263 0-.524-.015-.78-.046 1.45.93 3.17 1.472 5.02 1.472 6.025 0 9.32-4.99 9.32-9.32 0-.14-.004-.282-.01-.423.64-.46 1.195-1.037 1.634-1.694"></path></svg>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="mr-3 cursor-pointer inline-block h-full">
                                        <a href="#">
                                            <span className="align-middle">
                                                <svg width={"16px"} viewBox="0 0 50 50"><g><path fill="none" d="M0 0h50v50H0z"></path><path fill="#6d737e" d="M50 12.436L34.885 25.59 50 37.487v-25.05zM21.666 28.642C23.072 29.867 24.466 30 25 30s1.928-.133 3.334-1.358C29.752 27.406 48.046 11.487 50 9.786V7H0v2.78c3.012 2.623 20.3 17.67 21.666 18.862z"></path><path fill="#6d737e" d="M33.35 26.928l-3.702 3.222C27.73 31.82 25.758 32 25 32s-2.73-.18-4.648-1.85c-.35-.307-1.76-1.534-3.7-3.224L0 40.076V43h50v-2.97L33.35 26.93zM15.115 25.59L0 12.43v25.095L15.115 25.59z"></path></g></svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <button className="flex items-center p-2 px-6 bg-white border border-white rounded-md cursor-pointer h-[40px] outline-none transition-colors duration-250">
                                <span className="align-middle">
                                    <StarIcon></StarIcon>
                                </span>
                                <span className="inline text-[#6d737e] text-[1rem] font-semibold ml-2">Shortlist</span>
                            </button>
                        </span>

                        <CarouselContainer></CarouselContainer>

                        <div className="rounded-bl-[66px] rounded-tl-[66px] right-0 h-[132px] absolute top-1/2 transform -translate-y-1/2 w-[66px] z-20">
                            <button className="absolute right-[-25px] top-[75px] rounded-bl-[3px] rounded-tl-[3px] pl-2 block bg-transparent border-0 text-white m-0 outline-none py-2 transform -translate-y-1/2 z-10">
                                <div className="hover:opacity-100 rounded-full h-[50px] w-[50px] flex items-center bg-white drop-shadow-[0_0_3px_rgba(0,0,0,0.6)] justify-center opacity-80 transition duration-100">
                                    <svg className='w-3' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="false"><path stroke="#000" stroke-width="3" fillRule="evenodd" clipRule="evenodd" d="M7.146 2.146a.5.5 0 0 1 .708 0l9.5 9.5a.5.5 0 0 1 0 .708l-9.5 9.5a.5.5 0 0 1-.708-.708L16.293 12 7.146 2.854a.5.5 0 0 1 0-.708Z" fill="#000"></path></svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="px-6 mx-auto max-w-[1200px]">
                    <div className="flex py-3">
                        <section className="pr-[56px] w-[68%]">
                            <div className="mb-6">
                                <h1 className="text-banner-blue m-0" style={{ fontSize: '2rem', paddingRight: '4rem' }}>
                                    Paddington, Brisbane
                                </h1>
                                <div className="mt-4 flex items-center gap-4 flex-wrap">
                                    <span className="inline-block text-banner-blue text-[0.875rem] font-medium px-2 border border-banner-blue rounded-md whitespace-nowrap">
                                        Free to message
                                    </span>

                                    <span className="inline-block text-banner-blue font-medium">
                                        Private room with shared bathroom
                                    </span>
                                </div>
                            </div>

                            <div className="mb-6 flex flex-wrap py-3 border-t border-b border-[#d5d7db]">
                                <a className="mr-6 my-3 inline-block border border-[#d5d7db] rounded-lg min-w-[106px] p-2 text-center">
                                    <div className="text-[#2e3a4b] text-[1.5rem] leading-[2rem] text-center">
                                        $270
                                        <span className="text-[#6d7580] text-[1rem] leading-[2rem]">
                                            /wk
                                        </span>
                                    </div>
                                    <h3 className="text-[#333f48] text-[0.875rem] font-semibold leading-[1.25rem] m-0 overflow-hidden text-ellipsis whitespace-nowrap">
                                        Inc. bills
                                    </h3>
                                </a>

                                <div className="flex items-center p-1 my-3">
                                    <FeatureContainer></FeatureContainer>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-[#2e3a4b] text-[1.125rem] font-semibold leading-[30px] mb-4">
                                    About the property
                                </h3>

                                <div className="text-[#6d737e] text-[1rem] leading-[30px] break-words">
                                    <DescriptionItem>Rent for men only!!</DescriptionItem>
                                    <DescriptionItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta esse sint minus quisquam exercitationem facilis accusantium, dolore eius natus, cumque vel. Ut quos deleniti architecto? Odit praesentium in omnis ullam.</DescriptionItem>
                                    <DescriptionItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ut maxime. Dolorem quidem error sequi modi. Neque placeat repudiandae molestiae fuga iure. Voluptatum illo deleniti, sed at nobis quidem ratione!</DescriptionItem>
                                    <DescriptionItem>Rent for men only!!</DescriptionItem>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-[#333f48] text-[1.125rem] font-semibold leading-[1.5rem] mb-4 my-4">
                                    Property accepting of
                                </h3>

                                <a href="">
                                    <div className="rounded-full border border-[#2f3a4a] inline-block mb-3 ml-0 p-2.5 px-3">
                                        <div className="block float-left mt-1 leading-[1.5em] mr-2">
                                            <span className="text-center leading-[1.5em]">
                                                <svg width="20" height="14"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><g transform="translate(-177.000000, -2502.000000)" stroke="#13D0AB" strokeWidth="2"><g transform="translate(0.000000, 668.000000)"><polyline points="178 1840.98813 183.414472 1846.181 195.074 1835"></polyline></g></g></g></svg>
                                            </span>
                                        </div>

                                        <div className="block overflow-hidden">
                                            <span className="text-[#2f3a4a] text-[1rem] leading-[1.375rem] mr-1">Students</span>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="mb-6 bg-[#f8f8f9] border border-[#e3e4e5] rounded-[12px] p-[2rem] flex flex-col">
                                <header>
                                    <div className="float-left leading-none flex">
                                        <span className="bg-[#2f3a4a] rounded-full inline-block mr-2 p-1 px-[5px] text-center">
                                            <svg aria-hidden="true" data-prefix="far" data-icon="calendar-alt" viewBox="0 0 448 512" width="18" height="23"><path fill="#fff" d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
                                        </span>
                                        <h3 className="text-[#2f3a4a] text-[1.125rem] font-semibold leading-[1.5rem] m-0 overflow-hidden">
                                            Message Edward to request an inspection
                                        </h3>
                                    </div>
                                </header>

                                <main className="flex items-center mt-4">
                                    <p className="block mr-8 w-[416px] text-[#2f3a4a] text-[1rem] leading-[1.375rem] my-auto">
                                        To inspect this room, send a message introducing yourself and ask to see their inspection times.
                                    </p>
                                    <button
                                        className="flex bg-button-primary text-[#fff] font-semibold items-center justify-center flex-shrink-0 relative rounded-lg p-3.5 min-h-[3rem]"
                                        style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.5rem',
                                        }}
                                    >
                                        Request Inspection
                                    </button>
                                </main>
                            </div>

                            <div className="mb-6 pt-8 border-t border-[#d5d7db]">
                                <div>
                                    <div className="inline-block">
                                        <div className="float-left text-[#333f48] text-[1.125rem] font-semibold leading-[1.5rem] m-0 mr-6 mb-8 p-0 w-full break-words">
                                            Property features
                                        </div>

                                        <div className="inline-block min-w-[50%] mt-3 pr-2.5 align-middle">
                                            <div className="inline-block float-left mr-2 text-center w-[1.5rem]">
                                                <span className="text-center">
                                                    <svg width="24" height="21" xmlns="http://www.w3.org/1999/xlink"><g fill="none" fillRule="evenodd"><g transform="translate(0 -.5)"><path d="M0 .5v20a.5.5 0 0 0 1 0v-19h22v19a.5.5 0 0 0 1 0V.5H0z" fill="#2E3A4B"></path></g><path d="M20.064 10.23l-.262.038a.508.508 0 0 0-.346.264.527.527 0 0 0-.02.446c.108.27.346 2.064.502 3.517V17H4.075l-.002-2.455c.159-1.503.396-3.294.498-3.551a.499.499 0 0 0-.36-.724l-.263-.04c-.152-.021-.406-.052-.425-.036l-.031-.53h1.8c.378.836 1.412 1.336 2.393 1.336h8.643c.985 0 2.02-.503 2.396-1.342l1.752-.032.041.507c-.063.043-.309.076-.454.096zM19.602 19h-1.276a.329.329 0 0 1-.335-.322V18h1.947v.677c0 .179-.15.323-.335.323zm-13.578-.322c0 .179-.15.323-.335.323H4.413a.329.329 0 0 1-.336-.323V18h1.947v.677zm.923-12.511C7.06 5.603 7.466 5 8.264 5h7.488c.8 0 1.205.6 1.325 1.203l.803 2.837c-.052.553-.841.96-1.55.96H7.686c-.712 0-1.5-.392-1.553-.96l.813-2.874zm13.56 2.499h-1.693L18.05 5.97C17.813 4.774 16.912 4 15.752 4H8.262c-1.135 0-2.058.79-2.288 1.93l-.773 2.736h-1.71a.966.966 0 0 0-.969.96v.569c0 .685.542.893.99.98-.167.865-.334 2.332-.435 3.32v4.183c0 .73.599 1.323 1.336 1.323h1.275c.736 0 1.335-.593 1.335-1.323V18h9.967v.677c0 .73.599 1.323 1.335 1.323h1.276a1.33 1.33 0 0 0 1.335-1.323v-1.174-.003-.004l-.003-3.054c-.1-.95-.265-2.407-.431-3.27.442-.087.974-.296.974-.978v-.568a.966.966 0 0 0-.97-.961z" fill="#2E3A4B"></path><path d="M14 15h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1M14 13h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1M17.508 15.126a.639.639 0 0 1-.646-.63c0-.347.29-.629.646-.629a.64.64 0 0 1 .646.63.64.64 0 0 1-.646.63m0-2.26a1.64 1.64 0 0 0-1.646 1.63c0 .898.738 1.63 1.646 1.63a1.64 1.64 0 0 0 1.646-1.63 1.64 1.64 0 0 0-1.646-1.63M6.507 15.126a.639.639 0 0 1-.646-.63c0-.347.29-.629.646-.629a.64.64 0 0 1 .646.63.64.64 0 0 1-.646.63m0-2.26a1.64 1.64 0 0 0-1.646 1.63c0 .898.738 1.63 1.646 1.63a1.64 1.64 0 0 0 1.646-1.63 1.64 1.64 0 0 0-1.646-1.63M10.979 6.528h2.063a.5.5 0 0 0 0-1h-2.063a.5.5 0 0 0 0 1" fill="#2E3A4B"></path></g></svg>
                                                </span>
                                            </div>

                                            <div className="text-[#2f3a4a] block text-[1rem] leading-[1.375rem] overflow-hidden">
                                                <div className="inline-block font-semibold mr-3">
                                                    On-street parking
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inline-block min-w-[50%] mt-3 pr-2.5 align-middle">
                                            <div className="inline-block float-left mr-2 text-center w-[1.5rem]">
                                                <span className="text-center">
                                                    <svg width="24" height="21" xmlns="http://www.w3.org/1999/xlink"><g fill="none" fillRule="evenodd"><g transform="translate(0 -.5)"><path d="M0 .5v20a.5.5 0 0 0 1 0v-19h22v19a.5.5 0 0 0 1 0V.5H0z" fill="#2E3A4B"></path></g><path d="M20.064 10.23l-.262.038a.508.508 0 0 0-.346.264.527.527 0 0 0-.02.446c.108.27.346 2.064.502 3.517V17H4.075l-.002-2.455c.159-1.503.396-3.294.498-3.551a.499.499 0 0 0-.36-.724l-.263-.04c-.152-.021-.406-.052-.425-.036l-.031-.53h1.8c.378.836 1.412 1.336 2.393 1.336h8.643c.985 0 2.02-.503 2.396-1.342l1.752-.032.041.507c-.063.043-.309.076-.454.096zM19.602 19h-1.276a.329.329 0 0 1-.335-.322V18h1.947v.677c0 .179-.15.323-.335.323zm-13.578-.322c0 .179-.15.323-.335.323H4.413a.329.329 0 0 1-.336-.323V18h1.947v.677zm.923-12.511C7.06 5.603 7.466 5 8.264 5h7.488c.8 0 1.205.6 1.325 1.203l.803 2.837c-.052.553-.841.96-1.55.96H7.686c-.712 0-1.5-.392-1.553-.96l.813-2.874zm13.56 2.499h-1.693L18.05 5.97C17.813 4.774 16.912 4 15.752 4H8.262c-1.135 0-2.058.79-2.288 1.93l-.773 2.736h-1.71a.966.966 0 0 0-.969.96v.569c0 .685.542.893.99.98-.167.865-.334 2.332-.435 3.32v4.183c0 .73.599 1.323 1.336 1.323h1.275c.736 0 1.335-.593 1.335-1.323V18h9.967v.677c0 .73.599 1.323 1.335 1.323h1.276a1.33 1.33 0 0 0 1.335-1.323v-1.174-.003-.004l-.003-3.054c-.1-.95-.265-2.407-.431-3.27.442-.087.974-.296.974-.978v-.568a.966.966 0 0 0-.97-.961z" fill="#2E3A4B"></path><path d="M14 15h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1M14 13h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1M17.508 15.126a.639.639 0 0 1-.646-.63c0-.347.29-.629.646-.629a.64.64 0 0 1 .646.63.64.64 0 0 1-.646.63m0-2.26a1.64 1.64 0 0 0-1.646 1.63c0 .898.738 1.63 1.646 1.63a1.64 1.64 0 0 0 1.646-1.63 1.64 1.64 0 0 0-1.646-1.63M6.507 15.126a.639.639 0 0 1-.646-.63c0-.347.29-.629.646-.629a.64.64 0 0 1 .646.63.64.64 0 0 1-.646.63m0-2.26a1.64 1.64 0 0 0-1.646 1.63c0 .898.738 1.63 1.646 1.63a1.64 1.64 0 0 0 1.646-1.63 1.64 1.64 0 0 0-1.646-1.63M10.979 6.528h2.063a.5.5 0 0 0 0-1h-2.063a.5.5 0 0 0 0 1" fill="#2E3A4B"></path></g></svg>
                                                </span>
                                            </div>

                                            <div className="text-[#2f3a4a] block text-[1rem] leading-[1.375rem] overflow-hidden">
                                                <div className="inline-block font-semibold mr-3">
                                                    On-street parking
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-[1.5rem]">
                                <div className="border-t border-[#d5d7db] py-8 border-b border-[#d5d7db]">
                                    <div className="inline-block">
                                        <h2 className="float-left text-[#333f48] text-[1.125rem] font-semibold leading-[1.5rem] mr-6 m-0 p-0 break-words">
                                            Room overview
                                        </h2>
                                    </div>

                                    <h3 className="text-[#6d7580] text-[0.875rem] tracking-[2px] my-8 mb-6 uppercase">
                                        Details
                                    </h3>

                                    <div>
                                        <div className="inline-block min-w-[50%] mt-3 pr-2.5 align-middle">
                                            <div className="inline-block float-left mr-2 text-center w-[24px]">
                                                <span className="text-center">
                                                    <svg width="24" height="24"><g fill="#2E3A4B" fillRule="evenodd"><path d="M11.777 22.554C5.835 22.554 1 17.72 1 11.777S5.835 1 11.777 1c5.942 0 10.777 4.834 10.777 10.777S17.72 22.554 11.777 22.554m0-22.554C5.283 0 0 5.283 0 11.777c0 6.494 5.283 11.777 11.777 11.777 6.494 0 11.777-5.283 11.777-11.777C23.554 5.283 18.271 0 11.777 0"></path><path d="M12.179 16.85v-4.385c1.52.54 2.21 1.207 2.21 2.12 0 1.127-.954 2.064-2.21 2.265M8.968 8.97c0-1.127.955-2.064 2.21-2.265v4.374c-1.576-.577-2.21-1.194-2.21-2.11m3.21 2.443V6.72c.782.127 1.476.526 1.87 1.13a.501.501 0 0 0 .839-.545c-.578-.883-1.586-1.475-2.708-1.611V4.628a.5.5 0 0 0-1 0v1.079c-1.808.22-3.211 1.592-3.211 3.263 0 1.78 1.565 2.612 3.21 3.167v4.69c-.92-.15-2.04-.658-2.811-1.33a.501.501 0 0 0-.656.755c.949.826 2.33 1.453 3.468 1.604v1.07a.5.5 0 1 0 1 0v-1.078c1.808-.22 3.21-1.592 3.21-3.263 0-1.861-1.742-2.705-3.21-3.173"></path></g></svg>
                                                </span>
                                            </div>

                                            <div className="text-[#2f3a4a] block text-[1rem] leading-[1.375rem] overflow-hidden">
                                                <span className="inline-block font-semibold mr-3">
                                                    $270 weekly rent
                                                </span>
                                                <span className="block text-[0.875rem]">
                                                    $540 bond
                                                </span>
                                            </div>
                                        </div>

                                        <div className="inline-block min-w-[50%] mt-3 pr-2.5 align-middle">
                                            <div className="inline-block float-left mr-2 text-center w-[24px]">
                                                <span className="text-center">
                                                    <svg width="24" height="24"><g fill="#2E3A4B" fillRule="evenodd"><path d="M11.777 22.554C5.835 22.554 1 17.72 1 11.777S5.835 1 11.777 1c5.942 0 10.777 4.834 10.777 10.777S17.72 22.554 11.777 22.554m0-22.554C5.283 0 0 5.283 0 11.777c0 6.494 5.283 11.777 11.777 11.777 6.494 0 11.777-5.283 11.777-11.777C23.554 5.283 18.271 0 11.777 0"></path><path d="M12.179 16.85v-4.385c1.52.54 2.21 1.207 2.21 2.12 0 1.127-.954 2.064-2.21 2.265M8.968 8.97c0-1.127.955-2.064 2.21-2.265v4.374c-1.576-.577-2.21-1.194-2.21-2.11m3.21 2.443V6.72c.782.127 1.476.526 1.87 1.13a.501.501 0 0 0 .839-.545c-.578-.883-1.586-1.475-2.708-1.611V4.628a.5.5 0 0 0-1 0v1.079c-1.808.22-3.211 1.592-3.211 3.263 0 1.78 1.565 2.612 3.21 3.167v4.69c-.92-.15-2.04-.658-2.811-1.33a.501.501 0 0 0-.656.755c.949.826 2.33 1.453 3.468 1.604v1.07a.5.5 0 1 0 1 0v-1.078c1.808-.22 3.21-1.592 3.21-3.263 0-1.861-1.742-2.705-3.21-3.173"></path></g></svg>
                                                </span>
                                            </div>

                                            <div className="text-[#2f3a4a] block text-[1rem] leading-[1.375rem] overflow-hidden">
                                                <span className="inline-block font-semibold mr-3">
                                                    $270 weekly rent
                                                </span>
                                                <span className="block text-[0.875rem]">
                                                    $540 bond
                                                </span>
                                            </div>
                                        </div>

                                        <div className="inline-block min-w-[50%] mt-3 pr-2.5 align-middle">
                                            <div className="inline-block float-left mr-2 text-center w-[24px]">
                                                <span className="text-center">
                                                    <svg width="24" height="24"><g fill="#2E3A4B" fillRule="evenodd"><path d="M11.777 22.554C5.835 22.554 1 17.72 1 11.777S5.835 1 11.777 1c5.942 0 10.777 4.834 10.777 10.777S17.72 22.554 11.777 22.554m0-22.554C5.283 0 0 5.283 0 11.777c0 6.494 5.283 11.777 11.777 11.777 6.494 0 11.777-5.283 11.777-11.777C23.554 5.283 18.271 0 11.777 0"></path><path d="M12.179 16.85v-4.385c1.52.54 2.21 1.207 2.21 2.12 0 1.127-.954 2.064-2.21 2.265M8.968 8.97c0-1.127.955-2.064 2.21-2.265v4.374c-1.576-.577-2.21-1.194-2.21-2.11m3.21 2.443V6.72c.782.127 1.476.526 1.87 1.13a.501.501 0 0 0 .839-.545c-.578-.883-1.586-1.475-2.708-1.611V4.628a.5.5 0 0 0-1 0v1.079c-1.808.22-3.211 1.592-3.211 3.263 0 1.78 1.565 2.612 3.21 3.167v4.69c-.92-.15-2.04-.658-2.811-1.33a.501.501 0 0 0-.656.755c.949.826 2.33 1.453 3.468 1.604v1.07a.5.5 0 1 0 1 0v-1.078c1.808-.22 3.21-1.592 3.21-3.263 0-1.861-1.742-2.705-3.21-3.173"></path></g></svg>
                                                </span>
                                            </div>

                                            <div className="text-[#2f3a4a] block text-[1rem] leading-[1.375rem] overflow-hidden">
                                                <span className="inline-block font-semibold mr-3">
                                                    $270 weekly rent
                                                </span>
                                                <span className="block text-[0.875rem]">
                                                    $540 bond
                                                </span>
                                            </div>
                                        </div>

                                        <div className="inline-block min-w-[50%] mt-3 pr-2.5 align-middle">
                                            <div className="inline-block float-left mr-2 text-center w-[24px]">
                                                <span className="text-center">
                                                    <svg width="24" height="24"><g fill="#2E3A4B" fillRule="evenodd"><path d="M11.777 22.554C5.835 22.554 1 17.72 1 11.777S5.835 1 11.777 1c5.942 0 10.777 4.834 10.777 10.777S17.72 22.554 11.777 22.554m0-22.554C5.283 0 0 5.283 0 11.777c0 6.494 5.283 11.777 11.777 11.777 6.494 0 11.777-5.283 11.777-11.777C23.554 5.283 18.271 0 11.777 0"></path><path d="M12.179 16.85v-4.385c1.52.54 2.21 1.207 2.21 2.12 0 1.127-.954 2.064-2.21 2.265M8.968 8.97c0-1.127.955-2.064 2.21-2.265v4.374c-1.576-.577-2.21-1.194-2.21-2.11m3.21 2.443V6.72c.782.127 1.476.526 1.87 1.13a.501.501 0 0 0 .839-.545c-.578-.883-1.586-1.475-2.708-1.611V4.628a.5.5 0 0 0-1 0v1.079c-1.808.22-3.211 1.592-3.211 3.263 0 1.78 1.565 2.612 3.21 3.167v4.69c-.92-.15-2.04-.658-2.811-1.33a.501.501 0 0 0-.656.755c.949.826 2.33 1.453 3.468 1.604v1.07a.5.5 0 1 0 1 0v-1.078c1.808-.22 3.21-1.592 3.21-3.263 0-1.861-1.742-2.705-3.21-3.173"></path></g></svg>
                                                </span>
                                            </div>

                                            <div className="text-[#2f3a4a] block text-[1rem] leading-[1.375rem] overflow-hidden">
                                                <span className="inline-block font-semibold mr-3">
                                                    $270 weekly rent
                                                </span>
                                                <span className="block text-[0.875rem]">
                                                    $540 bond
                                                </span>
                                            </div>
                                        </div>

                                        <div className="inline-block min-w-[50%] mt-3 pr-2.5 align-middle">
                                            <div className="inline-block float-left mr-2 text-center w-[24px]">
                                                <span className="text-center">
                                                    <svg width="24" height="24"><g fill="#2E3A4B" fillRule="evenodd"><path d="M11.777 22.554C5.835 22.554 1 17.72 1 11.777S5.835 1 11.777 1c5.942 0 10.777 4.834 10.777 10.777S17.72 22.554 11.777 22.554m0-22.554C5.283 0 0 5.283 0 11.777c0 6.494 5.283 11.777 11.777 11.777 6.494 0 11.777-5.283 11.777-11.777C23.554 5.283 18.271 0 11.777 0"></path><path d="M12.179 16.85v-4.385c1.52.54 2.21 1.207 2.21 2.12 0 1.127-.954 2.064-2.21 2.265M8.968 8.97c0-1.127.955-2.064 2.21-2.265v4.374c-1.576-.577-2.21-1.194-2.21-2.11m3.21 2.443V6.72c.782.127 1.476.526 1.87 1.13a.501.501 0 0 0 .839-.545c-.578-.883-1.586-1.475-2.708-1.611V4.628a.5.5 0 0 0-1 0v1.079c-1.808.22-3.211 1.592-3.211 3.263 0 1.78 1.565 2.612 3.21 3.167v4.69c-.92-.15-2.04-.658-2.811-1.33a.501.501 0 0 0-.656.755c.949.826 2.33 1.453 3.468 1.604v1.07a.5.5 0 1 0 1 0v-1.078c1.808-.22 3.21-1.592 3.21-3.263 0-1.861-1.742-2.705-3.21-3.173"></path></g></svg>
                                                </span>
                                            </div>

                                            <div className="text-[#2f3a4a] block text-[1rem] leading-[1.375rem] overflow-hidden">
                                                <span className="inline-block font-semibold mr-3">
                                                    $270 weekly rent
                                                </span>
                                                <span className="block text-[0.875rem]">
                                                    $540 bond
                                                </span>
                                            </div>
                                        </div>

                                        <div className="inline-block min-w-[50%] mt-3 pr-2.5 align-middle">
                                            <div className="inline-block float-left mr-2 text-center w-[24px]">
                                                <span className="text-center">
                                                    <svg width="24" height="24"><g fill="#2E3A4B" fillRule="evenodd"><path d="M11.777 22.554C5.835 22.554 1 17.72 1 11.777S5.835 1 11.777 1c5.942 0 10.777 4.834 10.777 10.777S17.72 22.554 11.777 22.554m0-22.554C5.283 0 0 5.283 0 11.777c0 6.494 5.283 11.777 11.777 11.777 6.494 0 11.777-5.283 11.777-11.777C23.554 5.283 18.271 0 11.777 0"></path><path d="M12.179 16.85v-4.385c1.52.54 2.21 1.207 2.21 2.12 0 1.127-.954 2.064-2.21 2.265M8.968 8.97c0-1.127.955-2.064 2.21-2.265v4.374c-1.576-.577-2.21-1.194-2.21-2.11m3.21 2.443V6.72c.782.127 1.476.526 1.87 1.13a.501.501 0 0 0 .839-.545c-.578-.883-1.586-1.475-2.708-1.611V4.628a.5.5 0 0 0-1 0v1.079c-1.808.22-3.211 1.592-3.211 3.263 0 1.78 1.565 2.612 3.21 3.167v4.69c-.92-.15-2.04-.658-2.811-1.33a.501.501 0 0 0-.656.755c.949.826 2.33 1.453 3.468 1.604v1.07a.5.5 0 1 0 1 0v-1.078c1.808-.22 3.21-1.592 3.21-3.263 0-1.861-1.742-2.705-3.21-3.173"></path></g></svg>
                                                </span>
                                            </div>

                                            <div className="text-[#2f3a4a] block text-[1rem] leading-[1.375rem] overflow-hidden">
                                                <span className="inline-block font-semibold mr-3">
                                                    $270 weekly rent
                                                </span>
                                                <span className="block text-[0.875rem]">
                                                    $540 bond
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-[#6d7580] text-[0.875rem] tracking-[2px] my-8 mb-6 uppercase">
                                        Features
                                    </h3>

                                    <div>
                                        <div className="inline-block min-w-[50%] mt-3 pr-2.5 align-middle">
                                            <div className="inline-block float-left mr-2 text-center w-[24px]">
                                                <span className="text-center">
                                                    <svg width="24" height="24"><g fill="#2E3A4B" fillRule="evenodd"><path d="M11.777 22.554C5.835 22.554 1 17.72 1 11.777S5.835 1 11.777 1c5.942 0 10.777 4.834 10.777 10.777S17.72 22.554 11.777 22.554m0-22.554C5.283 0 0 5.283 0 11.777c0 6.494 5.283 11.777 11.777 11.777 6.494 0 11.777-5.283 11.777-11.777C23.554 5.283 18.271 0 11.777 0"></path><path d="M12.179 16.85v-4.385c1.52.54 2.21 1.207 2.21 2.12 0 1.127-.954 2.064-2.21 2.265M8.968 8.97c0-1.127.955-2.064 2.21-2.265v4.374c-1.576-.577-2.21-1.194-2.21-2.11m3.21 2.443V6.72c.782.127 1.476.526 1.87 1.13a.501.501 0 0 0 .839-.545c-.578-.883-1.586-1.475-2.708-1.611V4.628a.5.5 0 0 0-1 0v1.079c-1.808.22-3.211 1.592-3.211 3.263 0 1.78 1.565 2.612 3.21 3.167v4.69c-.92-.15-2.04-.658-2.811-1.33a.501.501 0 0 0-.656.755c.949.826 2.33 1.453 3.468 1.604v1.07a.5.5 0 1 0 1 0v-1.078c1.808-.22 3.21-1.592 3.21-3.263 0-1.861-1.742-2.705-3.21-3.173"></path></g></svg>
                                                </span>
                                            </div>

                                            <div className="text-[#2f3a4a] block text-[1rem] leading-[1.375rem] overflow-hidden">
                                                <span className="inline-block font-semibold mr-3">
                                                    $270 weekly rent
                                                </span>
                                                <span className="block text-[0.875rem]">
                                                    $540 bond
                                                </span>
                                            </div>
                                        </div>

                                        <div className="inline-block min-w-[50%] mt-3 pr-2.5 align-middle">
                                            <div className="inline-block float-left mr-2 text-center w-[24px]">
                                                <span className="text-center">
                                                    <svg width="24" height="24"><g fill="#2E3A4B" fillRule="evenodd"><path d="M11.777 22.554C5.835 22.554 1 17.72 1 11.777S5.835 1 11.777 1c5.942 0 10.777 4.834 10.777 10.777S17.72 22.554 11.777 22.554m0-22.554C5.283 0 0 5.283 0 11.777c0 6.494 5.283 11.777 11.777 11.777 6.494 0 11.777-5.283 11.777-11.777C23.554 5.283 18.271 0 11.777 0"></path><path d="M12.179 16.85v-4.385c1.52.54 2.21 1.207 2.21 2.12 0 1.127-.954 2.064-2.21 2.265M8.968 8.97c0-1.127.955-2.064 2.21-2.265v4.374c-1.576-.577-2.21-1.194-2.21-2.11m3.21 2.443V6.72c.782.127 1.476.526 1.87 1.13a.501.501 0 0 0 .839-.545c-.578-.883-1.586-1.475-2.708-1.611V4.628a.5.5 0 0 0-1 0v1.079c-1.808.22-3.211 1.592-3.211 3.263 0 1.78 1.565 2.612 3.21 3.167v4.69c-.92-.15-2.04-.658-2.811-1.33a.501.501 0 0 0-.656.755c.949.826 2.33 1.453 3.468 1.604v1.07a.5.5 0 1 0 1 0v-1.078c1.808-.22 3.21-1.592 3.21-3.263 0-1.861-1.742-2.705-3.21-3.173"></path></g></svg>
                                                </span>
                                            </div>

                                            <div className="text-[#2f3a4a] block text-[1rem] leading-[1.375rem] overflow-hidden">
                                                <span className="inline-block font-semibold mr-3">
                                                    $270 weekly rent
                                                </span>
                                                <span className="block text-[0.875rem]">
                                                    $540 bond
                                                </span>
                                            </div>
                                        </div>

                                        <div className="inline-block min-w-[50%] mt-3 pr-2.5 align-middle">
                                            <div className="inline-block float-left mr-2 text-center w-[24px]">
                                                <span className="text-center">
                                                    <svg width="24" height="24"><g fill="#2E3A4B" fillRule="evenodd"><path d="M11.777 22.554C5.835 22.554 1 17.72 1 11.777S5.835 1 11.777 1c5.942 0 10.777 4.834 10.777 10.777S17.72 22.554 11.777 22.554m0-22.554C5.283 0 0 5.283 0 11.777c0 6.494 5.283 11.777 11.777 11.777 6.494 0 11.777-5.283 11.777-11.777C23.554 5.283 18.271 0 11.777 0"></path><path d="M12.179 16.85v-4.385c1.52.54 2.21 1.207 2.21 2.12 0 1.127-.954 2.064-2.21 2.265M8.968 8.97c0-1.127.955-2.064 2.21-2.265v4.374c-1.576-.577-2.21-1.194-2.21-2.11m3.21 2.443V6.72c.782.127 1.476.526 1.87 1.13a.501.501 0 0 0 .839-.545c-.578-.883-1.586-1.475-2.708-1.611V4.628a.5.5 0 0 0-1 0v1.079c-1.808.22-3.211 1.592-3.211 3.263 0 1.78 1.565 2.612 3.21 3.167v4.69c-.92-.15-2.04-.658-2.811-1.33a.501.501 0 0 0-.656.755c.949.826 2.33 1.453 3.468 1.604v1.07a.5.5 0 1 0 1 0v-1.078c1.808-.22 3.21-1.592 3.21-3.263 0-1.861-1.742-2.705-3.21-3.173"></path></g></svg>
                                                </span>
                                            </div>

                                            <div className="text-[#2f3a4a] block text-[1rem] leading-[1.375rem] overflow-hidden">
                                                <span className="inline-block font-semibold mr-3">
                                                    $270 weekly rent
                                                </span>
                                                <span className="block text-[0.875rem]">
                                                    $540 bond
                                                </span>
                                            </div>
                                        </div>

                                        <div className="inline-block min-w-[50%] mt-3 pr-2.5 align-middle">
                                            <div className="inline-block float-left mr-2 text-center w-[24px]">
                                                <span className="text-center">
                                                    <svg width="24" height="24"><g fill="#2E3A4B" fillRule="evenodd"><path d="M11.777 22.554C5.835 22.554 1 17.72 1 11.777S5.835 1 11.777 1c5.942 0 10.777 4.834 10.777 10.777S17.72 22.554 11.777 22.554m0-22.554C5.283 0 0 5.283 0 11.777c0 6.494 5.283 11.777 11.777 11.777 6.494 0 11.777-5.283 11.777-11.777C23.554 5.283 18.271 0 11.777 0"></path><path d="M12.179 16.85v-4.385c1.52.54 2.21 1.207 2.21 2.12 0 1.127-.954 2.064-2.21 2.265M8.968 8.97c0-1.127.955-2.064 2.21-2.265v4.374c-1.576-.577-2.21-1.194-2.21-2.11m3.21 2.443V6.72c.782.127 1.476.526 1.87 1.13a.501.501 0 0 0 .839-.545c-.578-.883-1.586-1.475-2.708-1.611V4.628a.5.5 0 0 0-1 0v1.079c-1.808.22-3.211 1.592-3.211 3.263 0 1.78 1.565 2.612 3.21 3.167v4.69c-.92-.15-2.04-.658-2.811-1.33a.501.501 0 0 0-.656.755c.949.826 2.33 1.453 3.468 1.604v1.07a.5.5 0 1 0 1 0v-1.078c1.808-.22 3.21-1.592 3.21-3.263 0-1.861-1.742-2.705-3.21-3.173"></path></g></svg>
                                                </span>
                                            </div>

                                            <div className="text-[#2f3a4a] block text-[1rem] leading-[1.375rem] overflow-hidden">
                                                <span className="inline-block font-semibold mr-3">
                                                    $270 weekly rent
                                                </span>
                                                <span className="block text-[0.875rem]">
                                                    $540 bond
                                                </span>
                                            </div>
                                        </div>

                                        <div className="inline-block min-w-[50%] mt-3 pr-2.5 align-middle">
                                            <div className="inline-block float-left mr-2 text-center w-[24px]">
                                                <span className="text-center">
                                                    <svg width="24" height="24"><g fill="#2E3A4B" fillRule="evenodd"><path d="M11.777 22.554C5.835 22.554 1 17.72 1 11.777S5.835 1 11.777 1c5.942 0 10.777 4.834 10.777 10.777S17.72 22.554 11.777 22.554m0-22.554C5.283 0 0 5.283 0 11.777c0 6.494 5.283 11.777 11.777 11.777 6.494 0 11.777-5.283 11.777-11.777C23.554 5.283 18.271 0 11.777 0"></path><path d="M12.179 16.85v-4.385c1.52.54 2.21 1.207 2.21 2.12 0 1.127-.954 2.064-2.21 2.265M8.968 8.97c0-1.127.955-2.064 2.21-2.265v4.374c-1.576-.577-2.21-1.194-2.21-2.11m3.21 2.443V6.72c.782.127 1.476.526 1.87 1.13a.501.501 0 0 0 .839-.545c-.578-.883-1.586-1.475-2.708-1.611V4.628a.5.5 0 0 0-1 0v1.079c-1.808.22-3.211 1.592-3.211 3.263 0 1.78 1.565 2.612 3.21 3.167v4.69c-.92-.15-2.04-.658-2.811-1.33a.501.501 0 0 0-.656.755c.949.826 2.33 1.453 3.468 1.604v1.07a.5.5 0 1 0 1 0v-1.078c1.808-.22 3.21-1.592 3.21-3.263 0-1.861-1.742-2.705-3.21-3.173"></path></g></svg>
                                                </span>
                                            </div>

                                            <div className="text-[#2f3a4a] block text-[1rem] leading-[1.375rem] overflow-hidden">
                                                <span className="inline-block font-semibold mr-3">
                                                    $270 weekly rent
                                                </span>
                                                <span className="block text-[0.875rem]">
                                                    $540 bond
                                                </span>
                                            </div>
                                        </div>

                                        <div className="inline-block min-w-[50%] mt-3 pr-2.5 align-middle">
                                            <div className="inline-block float-left mr-2 text-center w-[24px]">
                                                <span className="text-center">
                                                    <svg width="24" height="24"><g fill="#2E3A4B" fillRule="evenodd"><path d="M11.777 22.554C5.835 22.554 1 17.72 1 11.777S5.835 1 11.777 1c5.942 0 10.777 4.834 10.777 10.777S17.72 22.554 11.777 22.554m0-22.554C5.283 0 0 5.283 0 11.777c0 6.494 5.283 11.777 11.777 11.777 6.494 0 11.777-5.283 11.777-11.777C23.554 5.283 18.271 0 11.777 0"></path><path d="M12.179 16.85v-4.385c1.52.54 2.21 1.207 2.21 2.12 0 1.127-.954 2.064-2.21 2.265M8.968 8.97c0-1.127.955-2.064 2.21-2.265v4.374c-1.576-.577-2.21-1.194-2.21-2.11m3.21 2.443V6.72c.782.127 1.476.526 1.87 1.13a.501.501 0 0 0 .839-.545c-.578-.883-1.586-1.475-2.708-1.611V4.628a.5.5 0 0 0-1 0v1.079c-1.808.22-3.211 1.592-3.211 3.263 0 1.78 1.565 2.612 3.21 3.167v4.69c-.92-.15-2.04-.658-2.811-1.33a.501.501 0 0 0-.656.755c.949.826 2.33 1.453 3.468 1.604v1.07a.5.5 0 1 0 1 0v-1.078c1.808-.22 3.21-1.592 3.21-3.263 0-1.861-1.742-2.705-3.21-3.173"></path></g></svg>
                                                </span>
                                            </div>

                                            <div className="text-[#2f3a4a] block text-[1rem] leading-[1.375rem] overflow-hidden">
                                                <span className="inline-block font-semibold mr-3">
                                                    $270 weekly rent
                                                </span>
                                                <span className="block text-[0.875rem]">
                                                    $540 bond
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-[#2e3a4b] text-[1.125rem] font-semibold leading-[30px] m-0 mb-4">
                                    About the flatmates
                                </h3>

                                <div className="text-[#6d737e] text-[1rem] leading-[30px] overflow-wrap break-words">
                                    <p className="text-[#6d7580] text-[1rem] font-normal">
                                        My name is Eddy easy going respect others understanding helpful. This is a private room.
                                        <br />
                                        Internet, electricity, gas and water included
                                    </p>
                                </div>
                            </div>
                        </section>

                        <aside className="w-[32%]">
                            <div className="mb-6 p-6 bg-[#f8f8f9] border border-[#e3e4e5] rounded-[12px] relative text-center">
                                <div className="flex items-center justify-center mb-4 text-center">
                                    <div className="mr-6 h-[88px] relative w-[88px]">
                                        <div>
                                            <img
                                                className="border-2 border-white h-[88px] w-[88px] rounded-full"
                                                src="https://flatmates-res.cloudinary.com/image/asset/c_fill,f_auto,g_center,h_132,q_auto,w_132/person-443bab81a0cbdee404cdd629831ccd89.png"
                                                alt="Person"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-[#2e3a4b] text-[18px] font-semibold">
                                            Message Edward
                                        </div>
                                        <div className="text-[#6d7580] text-[0.75rem]">
                                            Online today
                                        </div>

                                        <div className="bg-[#eaebec] rounded-[14.5px] text-[#2f3a4a] inline-block text-[0.875rem] mt-2.5 p-1 px-3">
                                            <div>
                                                {"Response rate:"}
                                                <span className="inline-block w-auto">
                                                    <button
                                                        className="border-none outline-none bg-transparent cursor-pointer m-0 text-[var(--ck-textPrimary)] p-1 text-[0.875rem] font-normal leading-none"
                                                        style={{ fontFamily: 'inherit', fontVariationSettings: '"XTDR" 50, "APRT" 100, "SPAC" 40' }}
                                                    >
                                                        ?
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <section>
                                    <form action="">
                                        <textarea
                                            name="message" id=""
                                            className="border border-[#abb0b6] rounded-[8px] text-[1rem] min-h-[110px] p-3 px-4 w-full"
                                            placeholder="Login or sign up to message"
                                        >

                                        </textarea>

                                        <div>
                                            <LoginButton className="bg-button-primary text-[#fff]">Login to send</LoginButton>
                                        </div>
                                    </form>
                                </section>
                            </div>

                            <div className="mb-6 border border-[#eaebec] rounded-[12px] p-[1.5rem] pt-[2rem] text-center">
                                <h3 className="text-[#333f48] text-[1rem] font-semibold leading-[1.5rem] m-0">
                                    Edward has no verified social media
                                </h3>

                                <div className="h-[42px] my-3.5 flex items-center justify-center">
                                    <div className="mr-2 flex items-center justify-center border border-transparent rounded-full inline-block h-[42px] w-[42px]">
                                        <span className="text-center my-[10px]">
                                            <svg height={"20px"} viewBox="0 0 16 16"><path fill="#e8e9ea" d="M15.088 15.967c.485 0 .88-.394.88-.88V.913c0-.485-.395-.88-.88-.88H.912c-.485 0-.88.395-.88.88v14.176c0 .485.395.88.88.88h14.176"></path><path fill="#FFF" d="M11.027 15.967v-6.17h2.07l.31-2.405h-2.38V5.856c0-.696.193-1.17 1.192-1.17h1.272V2.533c-.22-.03-.976-.094-1.855-.094-1.836 0-3.093 1.12-3.093 3.178v1.774H6.467v2.405h2.077v6.17h2.483"></path></svg>
                                        </span>
                                    </div>
                                    <div className="mr-2 flex items-center justify-center border border-transparent rounded-full inline-block h-[42px] w-[42px]">
                                        <span className="text-center my-[10px]">
                                            <svg height={"20px"} viewBox="0 0 16 16"><path fill="#e8e9ea" d="M15.088 15.967c.485 0 .88-.394.88-.88V.913c0-.485-.395-.88-.88-.88H.912c-.485 0-.88.395-.88.88v14.176c0 .485.395.88.88.88h14.176"></path><path fill="#FFF" d="M11.027 15.967v-6.17h2.07l.31-2.405h-2.38V5.856c0-.696.193-1.17 1.192-1.17h1.272V2.533c-.22-.03-.976-.094-1.855-.094-1.836 0-3.093 1.12-3.093 3.178v1.774H6.467v2.405h2.077v6.17h2.483"></path></svg>
                                        </span>
                                    </div>
                                    <div className="mr-2 flex items-center justify-center border border-transparent rounded-full inline-block h-[42px] w-[42px]">
                                        <span className="text-center my-[10px]">
                                            <svg height={"20px"} viewBox="0 0 16 16"><path fill="#e8e9ea" d="M15.088 15.967c.485 0 .88-.394.88-.88V.913c0-.485-.395-.88-.88-.88H.912c-.485 0-.88.395-.88.88v14.176c0 .485.395.88.88.88h14.176"></path><path fill="#FFF" d="M11.027 15.967v-6.17h2.07l.31-2.405h-2.38V5.856c0-.696.193-1.17 1.192-1.17h1.272V2.533c-.22-.03-.976-.094-1.855-.094-1.836 0-3.093 1.12-3.093 3.178v1.774H6.467v2.405h2.077v6.17h2.483"></path></svg>
                                        </span>
                                    </div>
                                    <div className="mr-2 flex items-center justify-center border border-transparent rounded-full inline-block h-[42px] w-[42px]">
                                        <span className="text-center my-[10px]">
                                            <svg height={"20px"} viewBox="0 0 16 16"><path fill="#e8e9ea" d="M15.088 15.967c.485 0 .88-.394.88-.88V.913c0-.485-.395-.88-.88-.88H.912c-.485 0-.88.395-.88.88v14.176c0 .485.395.88.88.88h14.176"></path><path fill="#FFF" d="M11.027 15.967v-6.17h2.07l.31-2.405h-2.38V5.856c0-.696.193-1.17 1.192-1.17h1.272V2.533c-.22-.03-.976-.094-1.855-.094-1.836 0-3.093 1.12-3.093 3.178v1.774H6.467v2.405h2.077v6.17h2.483"></path></svg>
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Page;