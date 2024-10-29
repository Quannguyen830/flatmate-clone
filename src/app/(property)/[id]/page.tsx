'use client'

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import NavBar from "~/app/_components/Bar/NavBar";
import LoginButton from "~/app/_components/Button/LoginButton";
import CarouselContainer from "~/app/_components/Container/CarouselContainer";
import FeatureContainer from "~/app/_components/Container/FeatureContainer";
import GetStartedContainer from "~/app/_components/Container/GetStartedContainer";
import BreadcrumbsItem from "~/app/_components/Item/BreadcrumbsItem";
import DescriptionItem from "~/app/_components/Item/DescriptionItem";
import PropertyFeatureItem from "~/app/_components/Item/PropertyFeatureItem";
import { SkeletonCard } from "~/app/_components/Item/Skeleton";
import StarIcon from "~/app/_components/Logo/StarLogo";
import { Skeleton } from "~/components/ui/skeleton";
import { api } from "~/trpc/react";


const Page = () => {
    const { id } = useParams()

    const parsedId = Array.isArray(id) ? id[0] : id;
    const newId = "/" + parsedId

    const { data, isLoading } = api.property.findPropertyById.useQuery(
        { id: newId }
    )

    if (isLoading) return <div></div>

    const propertyData = data

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
                            <BreadcrumbsItem>Rooms</BreadcrumbsItem>
                            <BreadcrumbsItem>{propertyData?.location ?? "Sydney"}</BreadcrumbsItem>
                            <BreadcrumbsItem>Share houses</BreadcrumbsItem>
                            <li className="inline-block font-semibold">
                                <a href="#" className="text-[#6d7580] text-xs leading-[0.875rem]">
                                    <span>P1627150</span>
                                </a>
                            </li>
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

                        <CarouselContainer imagesList={propertyData?.imagesList} propertyId={""}></CarouselContainer>

                        <div className="rounded-bl-[66px] rounded-tl-[66px] right-0 h-[132px] absolute top-1/2 transform -translate-y-1/2 w-[66px] z-20">
                            <button className="absolute right-[-25px] top-[75px] rounded-bl-[3px] rounded-tl-[3px] pl-2 block bg-transparent border-0 text-white m-0 outline-none py-2 transform -translate-y-1/2 z-10">
                                <div className="hover:opacity-100 rounded-full h-[50px] w-[50px] flex items-center bg-white drop-shadow-[0_0_3px_rgba(0,0,0,0.6)] justify-center opacity-80 transition duration-100">
                                    <svg className='w-3' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="false"><path stroke="#000" strokeWidth="3" fillRule="evenodd" clipRule="evenodd" d="M7.146 2.146a.5.5 0 0 1 .708 0l9.5 9.5a.5.5 0 0 1 0 .708l-9.5 9.5a.5.5 0 0 1-.708-.708L16.293 12 7.146 2.854a.5.5 0 0 1 0-.708Z" fill="#000"></path></svg>
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
                                    {propertyData?.location}
                                </h1>
                                <div className="mt-4 flex items-center gap-4 flex-wrap">
                                    <span className="inline-block text-banner-blue text-[0.875rem] font-medium px-2 border border-banner-blue rounded-md whitespace-nowrap">
                                        Free to message
                                    </span>

                                    <span className="inline-block text-banner-blue font-medium">
                                        {propertyData?.shortDescription}
                                    </span>
                                </div>
                            </div>

                            <div className="mb-6 flex flex-wrap py-3 border-t border-b border-[#d5d7db]">
                                <a className="mr-6 my-3 inline-block border border-[#d5d7db] rounded-lg min-w-[106px] p-2 text-center">
                                    <div className="text-[#2e3a4b] text-[1.5rem] leading-[2rem] text-center">
                                        {propertyData?.price[0]}
                                        <span className="text-[#6d7580] text-[1rem] leading-[2rem]">
                                            /wk
                                        </span>
                                    </div>
                                    <h3 className="text-[#333f48] text-[0.875rem] font-semibold leading-[1.25rem] m-0 overflow-hidden text-ellipsis whitespace-nowrap">
                                        Inc. bills
                                    </h3>
                                </a>

                                <div className="flex items-center p-1 my-3">
                                    <div className="mr-6 flex justify-center items-center">
                                        <div className="inline-block mr-2">
                                            <span className="align-sub text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="27" viewBox="0 0 33 27"><g fill="none" fillRule="evenodd" stroke="#2E3A4A" strokeLinecap="round" strokeLinejoin="round"><path fill="#C9F8EE" d="M6.9 11.17V7.046c0-.838.59-1.46 1.338-1.24.954.28 2.26.468 3.658.05.734-.219 1.437.423 1.437 1.249v4.065M18.633 11.17V7.046c0-.838.59-1.46 1.338-1.24.955.28 2.261.468 3.659.05.734-.219 1.436.423 1.436 1.249v4.065"></path><path d="M31.467 16.533H.533v-.19c0-2.736 3.114-5.143 6.955-5.143h17.024c3.841 0 6.955 2.407 6.955 5.143v.19zM.533 22.933h30.934v-6.4H.533zM.533 22.933V26M31.467 22.933V26"></path><path d="M3.733 12.04V.534h24.534v11.508"></path></g></svg>
                                            </span>
                                        </div>
                                        <div className="text-[#2e3a4b] inline-block text-[1.5rem] leading-[2rem] mb-1">
                                            {propertyData?.shortFeatureList[0]}
                                        </div>
                                    </div>
                                    <div className="mr-6 flex justify-center items-center">
                                        <div className="inline-block mr-2">
                                            <span className="align-sub text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none" fillRule="evenodd" stroke="#2E3A4A" strokeLinecap="round" strokeLinejoin="round"><path d="M15.304 6.51c0-1.442-1.45-2.936-3.241-2.936-1.791 0-3.242 1.494-3.242 2.935h6.483z"></path><path d="M12.063 3.574c-.842-.701-2.45-1.041-3.63-1.041a4.854 4.854 0 0 0-4.855 4.854v12.055"></path><path d="M30.138 19.442v1.248c-.342 4.526-3.7 8.423-8.226 8.423H9.682c-4.526 0-7.883-3.897-8.274-8.423v-1.248M8.162 28.975l-1.047 2.224M23.502 28.975l1.047 2.224M25.942 19.442h4.985M.534 19.442h19.929"></path><path fill="#C9F8EE" d="M20.463 24.776h5.48v-6.257h-5.48z"></path><path d="M20.463 22.642h5.479"></path></g></svg>
                                            </span>
                                        </div>
                                        <div className="text-[#2e3a4b] inline-block text-[1.5rem] leading-[2rem] mb-1">
                                            {propertyData?.shortFeatureList[1]}
                                        </div>
                                    </div>
                                    <div className="mr-6 flex justify-center items-center">
                                        <div className="inline-block mr-2">
                                            <span className="align-sub text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="34" viewBox="0 0 30 34"><g fill="none" fillRule="evenodd" stroke="#2F3A4A" strokeLinecap="round" strokeLinejoin="round"><path d="M29 12.915V33H1V12.915l.035-.363L15 1l13.956 11.552z"></path><path fill="#C9F8EE" d="M23.59 24.474c-2.898-1.12-6.114-2.512-6.386-3.379v-.907c.603-.617 1.076-1.474 1.357-2.48.67-.469.846-1.444.285-2.136v-2.034c0-2.1-1.17-3.538-3.845-3.538-2.606 0-3.847 1.437-3.847 3.538v2.036a1.475 1.475 0 0 0 .285 2.135c.281 1.005.755 1.862 1.357 2.479v.907c-.269.866-3.488 2.258-6.386 3.38a.646.646 0 0 0-.41.602v2.275c0 .357.285.648.638.648h16.726a.643.643 0 0 0 .636-.648v-2.275a.644.644 0 0 0-.41-.603z"></path></g></svg>
                                            </span>
                                        </div>
                                        <div className="text-[#2e3a4b] inline-block text-[1.5rem] leading-[2rem] mb-1">
                                            {propertyData?.shortFeatureList[2]}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-[#2e3a4b] text-[1.125rem] font-semibold leading-[30px] mb-4">
                                    About the property
                                </h3>

                                <div className="text-[#6d737e] text-[1rem] leading-[30px] break-words">
                                    {propertyData?.description.split('\n').map((line, index) => (
                                        <p key={index}>
                                            {line}
                                        </p>
                                    ))}
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
                                            {propertyData?.ownerName} to request an inspection
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
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.9999 1.13477C5.8999 1.13477 0.899902 6.13477 0.899902 12.2348C0.899902 18.3348 5.8999 23.3348 11.9999 23.3348C18.0999 23.3348 23.0999 18.3348 23.0999 12.2348C23.0999 6.13477 18.0999 1.13477 11.9999 1.13477Z" stroke="#2F3A4A" strokeLinecap="round" strokeLinejoin="round"></path><path fillRule="evenodd" clipRule="evenodd" d="M12 18.935C12.4418 18.935 12.8 18.5768 12.8 18.135C12.8 17.6931 12.4418 17.335 12 17.335C11.5581 17.335 11.2 17.6931 11.2 18.135C11.2 18.5768 11.5581 18.935 12 18.935Z" stroke="#2F3A4A" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.0999 12.4348C14.2999 9.53477 9.6999 9.53477 6.8999 12.4348" stroke="#2F3A4A" strokeLinecap="round" strokeLinejoin="round"></path><path d="M19.6 10.0348C15.5 5.73481 8.6 5.73481 4.5 10.0348" stroke="#2F3A4A" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.3999 14.9349C10.7999 13.3349 13.2999 13.3349 14.6999 14.9349" stroke="#2F3A4A" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>

                                            <div className="text-[#2f3a4a] block text-[1rem] leading-[1.375rem] overflow-hidden">
                                                <div className="inline-block font-semibold mr-3">
                                                    Internet included in rent
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

                                        <PropertyFeatureItem
                                            svg={<svg width="24" height="24"><g fill="#2E3A4B" fillRule="evenodd"><path d="M11.777 22.554C5.835 22.554 1 17.72 1 11.777S5.835 1 11.777 1c5.942 0 10.777 4.834 10.777 10.777S17.72 22.554 11.777 22.554m0-22.554C5.283 0 0 5.283 0 11.777c0 6.494 5.283 11.777 11.777 11.777 6.494 0 11.777-5.283 11.777-11.777C23.554 5.283 18.271 0 11.777 0"></path><path d="M12.179 16.85v-4.385c1.52.54 2.21 1.207 2.21 2.12 0 1.127-.954 2.064-2.21 2.265M8.968 8.97c0-1.127.955-2.064 2.21-2.265v4.374c-1.576-.577-2.21-1.194-2.21-2.11m3.21 2.443V6.72c.782.127 1.476.526 1.87 1.13a.501.501 0 0 0 .839-.545c-.578-.883-1.586-1.475-2.708-1.611V4.628a.5.5 0 0 0-1 0v1.079c-1.808.22-3.211 1.592-3.211 3.263 0 1.78 1.565 2.612 3.21 3.167v4.69c-.92-.15-2.04-.658-2.811-1.33a.501.501 0 0 0-.656.755c.949.826 2.33 1.453 3.468 1.604v1.07a.5.5 0 1 0 1 0v-1.078c1.808-.22 3.21-1.592 3.21-3.263 0-1.861-1.742-2.705-3.21-3.173"></path></g></svg>}
                                            description="Bills included in rent"
                                        >
                                        </PropertyFeatureItem>

                                        <PropertyFeatureItem
                                            svg={<svg width="24" height="24"><g fill="#2E3A4B" fillRule="evenodd"><path d="M7 23h10V1H7v22zm-1.028 0h-2.95 2.95zm-3.957 0H.5a.5.5 0 0 0 0 1h23a.5.5 0 1 0 0-1H18V.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V23H2.015z"></path><path d="M9.46 12.164a.359.359 0 0 1 0 .717.358.358 0 0 1 0-.717m0 1.717a1.36 1.36 0 0 0 0-2.717 1.36 1.36 0 0 0 0 2.717"></path></g></svg>}
                                            description="Private room"
                                        >
                                        </PropertyFeatureItem>

                                        <PropertyFeatureItem
                                            svg={<svg width="24" height="24"><g fill="none" fillRule="evenodd"><path d="M9 5.37C9 5.166 8.776 5 8.5 5s-.5.166-.5.37v.26c0 .204.224.37.5.37s.5-.166.5-.37v-.26zM9 7.627C9 7.281 8.776 7 8.5 7s-.5.28-.5.627v.746c0 .346.224.627.5.627s.5-.28.5-.627v-.746zM9 9.627C9 9.281 8.776 9 8.5 9s-.5.281-.5.627v.746c0 .346.224.627.5.627s.5-.281.5-.627v-.746z" fill="#2E3A4B"></path><path d="M8.5 11c-.276 0-.5.166-.5.37v.26c0 .204.224.37.5.37s.5-.166.5-.37v-.26c0-.204-.224-.37-.5-.37M6.903 5.721l.082-.253c.064-.199-.083-.404-.328-.455-.247-.054-.497.066-.56.266l-.082.253c-.064.2.083.404.328.455.04.01.078.013.117.013.203 0 .389-.11.443-.279M5.85 10.534l.135-.742c.062-.336-.076-.68-.306-.77-.234-.093-.467.113-.529.446l-.135.742c-.062.337.076.68.306.769a.295.295 0 0 0 .112.021c.19 0 .365-.185.417-.466M6.85 8.534l.135-.743c.062-.335-.076-.68-.306-.769-.234-.092-.468.11-.529.445l-.135.743c-.062.336.076.68.306.769A.295.295 0 0 0 6.433 9c.19 0 .365-.185.417-.466" fill="#2E3A4B"></path><path d="M5.66 11.013c-.254-.055-.497.067-.562.265l-.083.252c-.064.2.081.404.325.458.04.008.08.012.119.012.203 0 .389-.11.444-.277l.081-.253c.066-.199-.08-.404-.324-.457M9.985 5.531l-.083-.253c-.064-.198-.313-.32-.56-.265-.246.053-.391.257-.327.456l.083.253c.055.168.24.278.444.278a.53.53 0 0 0 .117-.013c.245-.053.39-.256.326-.456M10.015 9.792l.135.742c.052.28.226.466.418.466a.296.296 0 0 0 .112-.021c.23-.09.367-.432.305-.77l-.135-.741c-.062-.333-.296-.54-.53-.445-.23.09-.367.432-.305.769" fill="#2E3A4B"></path><path d="M10.15 8.534c.052.281.227.466.417.466a.295.295 0 0 0 .112-.021c.23-.09.368-.433.306-.77l-.135-.742c-.061-.334-.295-.537-.53-.445-.23.09-.367.434-.305.77l.135.742zM11.015 11.47l.083.253c.054.167.24.277.443.277a.537.537 0 0 0 .118-.013c.245-.053.39-.257.326-.457l-.083-.252c-.065-.198-.314-.32-.562-.264-.244.053-.389.256-.325.457" fill="#2E3A4B"></path><g><path d="M21.95 15.62c0 3.171-2.328 5.562-5.415 5.562H7.362c-3.086 0-5.413-2.39-5.413-5.563v-.437h13v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-3.5h2v.437zm-6 .562h3v-2h-3v2zm0 2h3v-1h-3v1zm-6.084-15h-2.87c.22-.548.77-1.037 1.434-1.037.665 0 1.216.49 1.436 1.037zm13.431 11H19.95v-.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v.5H2.961V4.507a3.144 3.144 0 0 1 3.14-3.142c.383 0 .742.056 1.071.16-.744.46-1.279 1.28-1.279 2.157a.5.5 0 0 0 .5.5h4.075a.5.5 0 0 0 .5-.5c0-1.267-1.103-2.413-2.357-2.516-.685-.519-1.545-.8-2.51-.8a4.146 4.146 0 0 0-4.14 4.141v9.675H.501a.5.5 0 1 0 0 1h.448v.437c0 3.088 1.88 5.543 4.59 6.31l-.566 1.381a.502.502 0 0 0 .463.69.499.499 0 0 0 .463-.31l.638-1.562c.27.032.544.054.825.054h9.173c.3 0 .59-.025.875-.062l.641 1.57a.498.498 0 0 0 .652.273.5.5 0 0 0 .273-.653l-.569-1.393c2.685-.78 4.542-3.229 4.542-6.298v-.437h.348a.5.5 0 1 0 0-1z" fill="#2E3A4B"></path></g></g></svg>}
                                            description="Own bathroom"
                                        >
                                        </PropertyFeatureItem>

                                        <PropertyFeatureItem
                                            svg={<svg width="24" height="24" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M21.108 23H20v-3h3v1.195C23 22.224 22.187 23 21.108 23zM1 21.195V20h3v3H2.737C1.714 23 1 22.258 1 21.195zM20 11h3V8h-3v3zm0 4h3v-3h-3v3zm0 4h3v-3h-3v3zm-5 0h4v-3h-4v3zm0 4h4v-3h-4v3zm-5 0h4v-3h-4v3zm-5 0h4v-3H5v3zm0-4h4v-3H5v3zm-4 0h3v-3H1v3zm0-4h3v-3H1v3zm0-4h3V8H1v3zm4 0h4V8H5v3zm5 0h4V8h-4v3zm5 0h4V8h-4v3zm0 4h4v-3h-4v3zM5 15h4v-3H5v3zm5 4h4v-3h-4v3zm0-4h4v-3h-4v3zM2.737 1h18.37C22.188 1 23 1.759 23 2.765V7H1V2.765C1 1.709 1.698 1 2.737 1zm18.37-1H2.738C1.15 0 0 1.163 0 2.765v18.43C0 22.82 1.15 24 2.737 24h18.37C22.73 24 24 22.768 24 21.195V2.765C24 1.188 22.757 0 21.108 0z" fill="#2E3A4B"></path><path d="M7.642 3.232a.333.333 0 1 1 0 .666.333.333 0 0 1 0-.666m0 1.665c.735 0 1.333-.598 1.333-1.332 0-.735-.598-1.333-1.333-1.333-.734 0-1.332.598-1.332 1.333 0 .734.598 1.332 1.332 1.332M16.358 3.232a.333.333 0 1 1 0 .665.333.333 0 0 1 0-.665m0 1.665c.734 0 1.332-.598 1.332-1.332 0-.735-.598-1.333-1.332-1.333-.735 0-1.333.598-1.333 1.333 0 .734.598 1.332 1.333 1.332" fill="#2E3A4B"></path></g></svg>}
                                            description="1 – 2 months stay"
                                        >
                                        </PropertyFeatureItem>

                                        <PropertyFeatureItem
                                            svg={<svg width="24" height="23"><g stroke="#000" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><path d="M13.795 13.997c-.462-.323-.765-.622-.844-.88v-1.034c.668-.7 1.196-1.674 1.507-2.816.75-.54.935-1.648.316-2.43V4.525c0-2.388-1.3-4.024-4.272-4.024C7.607.5 6.23 2.136 6.23 4.524v2.315a1.7 1.7 0 0 0 .315 2.428c.312 1.142.84 2.117 1.507 2.816v1.034c-.299.984-3.875 2.566-7.095 3.84a.737.737 0 0 0-.456.688v1.089M22.101 14.547a4.288 4.288 0 1 0-6.063 6.064 4.288 4.288 0 0 0 6.063-6.064zM18.332 19.313l2.752-2.941M18.332 19.313l-1.277-1.366"></path></g></svg>}
                                            description="Anyone except couples"
                                        >
                                        </PropertyFeatureItem>


                                    </div>

                                    <h3 className="text-[#6d7580] text-[0.875rem] tracking-[2px] my-8 mb-6 uppercase">
                                        Features
                                    </h3>

                                    <div>
                                        <PropertyFeatureItem
                                            svg={<svg width="23" height="20"><path d="M.96 16.705h21.079v-3.833H.96v3.833zM5.444 9.04h12.124c2.263 0 4.2 1.285 4.448 2.874H.996c.249-1.59 2.184-2.874 4.448-2.874zm4.138-3.274v2.316H5.75V5.726c0-.154.054-.286.143-.355.069-.052.152-.062.248-.035 1.037.28 2.04.29 2.978.033a.332.332 0 0 1 .298.06.423.423 0 0 1 .165.337zm7.666 0v2.316h-3.832V5.726c0-.154.054-.286.144-.355.068-.052.15-.062.247-.035 1.036.281 2.038.292 2.977.033a.327.327 0 0 1 .3.06.426.426 0 0 1 .164.337zM2.876 1.375h17.247V8.59a6.473 6.473 0 0 0-1.917-.477V5.766c0-.43-.202-.84-.54-1.098a1.3 1.3 0 0 0-1.137-.223c-.77.212-1.603.2-2.47-.034a1.223 1.223 0 0 0-1.08.198c-.332.252-.521.66-.521 1.117v2.356H10.54V5.766c0-.43-.202-.84-.54-1.099a1.3 1.3 0 0 0-1.136-.222c-.772.212-1.602.2-2.471-.034a1.222 1.222 0 0 0-1.08.198c-.332.252-.521.66-.521 1.117v2.39c-.683.066-1.33.231-1.916.48V1.374zm18.205 7.73V.895a.479.479 0 0 0-.48-.478H2.398a.479.479 0 0 0-.479.479v8.219C.761 9.887.012 11.018.012 12.257v.085c-.001.018-.01.032-.01.051v4.785l-.002.01v1.822a.48.48 0 0 0 .958 0v-1.347H22.04v1.347a.48.48 0 0 0 .958 0v-6.603c0-.005.003-.009.003-.014v-.136c0-1.243-.753-2.379-1.92-3.152z" fill="#2E3A4B" fillRule="evenodd"></path></svg>}
                                            description="Single bed"
                                        >
                                        </PropertyFeatureItem>
                                        
                                        <PropertyFeatureItem
                                            svg={<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="28" viewBox="0 0 32 28"><g fill="none" fillRule="evenodd" stroke="#2F3A4A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M1.682 3.773h28.636V1.045H1.682zM2.647 13.318H29.33V3.773H2.647zM2.647 22.864H29.33v-9.546H2.647zM2.647 22.864v3.92M29.33 22.864v3.92M14.648 6.5h2.672M14.648 16.045h2.672"></path></g></svg>}
                                            description="Bed side table"
                                        >
                                        </PropertyFeatureItem>

                                        <PropertyFeatureItem
                                            svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="33" viewBox="0 0 32 33"><g fill="none" fillRule="evenodd" stroke="#2F3A4A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M1.654 3.577h28.77V.962H1.653zM2.962 27.115h13.076V3.577H2.962zM16.038 27.115h13.077V3.577H16.038zM2.962 27.115v5.068M29.115 27.115v5.068M13.423 14.147v2.562M18.654 14.147v2.562"></path></g></svg>}
                                            description="Wardrobe"
                                        >
                                        </PropertyFeatureItem>

                                        <PropertyFeatureItem
                                            svg={<svg xmlns="http://www.w3.org/2000/svg" width="23" height="36" viewBox="0 0 29 36"><path fill="none" fillRule="evenodd" stroke="#2F3A4A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.304 15.783c7.118 0 7.392-1.417 7.392-4.435C21.696 8.329 20.12 1 14.304 1S6.913 8.33 6.913 11.348c0 3.018.274 4.435 7.391 4.435zm6.653 8.87H7.652a2.217 2.217 0 1 1 0-4.436h13.305a2.217 2.217 0 1 1 0 4.435zm-9.61-8.87v4.434m5.914 0v-4.434m5.913 17.739a1.478 1.478 0 1 1-2.956 0 1.478 1.478 0 0 1 2.956 0zm-14.783 0a1.478 1.478 0 1 1-2.955 0 1.478 1.478 0 0 1 2.955 0zm-1.478-1.479h14.783m4.434-17.739v5.913c0 2.587-2.71 4.435-5.173 4.435m3.695-10.348h2.957m-25.13 0v5.913c0 2.587 2.709 4.435 5.173 4.435M3.957 14.304H1m11.826 10.348v7.391m2.957-7.39v7.39m0 1.479a1.478 1.478 0 1 1-2.956 0 1.478 1.478 0 0 1 2.956 0z"></path></svg>}
                                            description="Chair"
                                        >
                                        </PropertyFeatureItem>
                                        
                                        <PropertyFeatureItem
                                            svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="36" viewBox="0 0 27 36"><path fill="none" fillRule="evenodd" stroke="#2F3A4A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M23.174 21.695l-8.87 7.391v2.957m.74-21.435l8.13 8.13m-10.754-6.32l2.587-2.587A5.174 5.174 0 0 0 7.69 2.515L5.101 5.104M1 6.913l9.609 9.608.866-.866a2.956 2.956 0 0 0 0-4.18L6.047 6.045a2.956 2.956 0 0 0-4.18 0L1 6.913zm25.13 13.304a1.478 1.478 0 1 1-2.955 0 1.478 1.478 0 0 1 2.955 0zm-5.913 14.782H8.391a2.958 2.958 0 0 1 2.957-2.956h5.913a2.958 2.958 0 0 1 2.956 2.956zM7.525 14.177a2.956 2.956 0 1 1-4.18-4.18"></path></svg>}
                                            description="Lamp"
                                        >
                                        </PropertyFeatureItem>
                                        
                                        <PropertyFeatureItem
                                            svg={<svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 36 20"><path fill="none" fillRule="evenodd" stroke="#2F3A4A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 19.214V1h34v18.214H21.696V1M1 7.071h34m-13.304 6.072H35m-7.391-9.107h1.478m-1.478 6.071h1.478m-1.478 6.072h1.478"></path></svg>}
                                            description="Desk"
                                        >
                                        </PropertyFeatureItem>
                                    </div>
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
                                            {propertyData?.ownerName}
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