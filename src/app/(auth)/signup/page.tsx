'use client'

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import LoginButton from "~/app/_components/Button/LoginButton";
import XButton from "~/app/_components/Button/XButton";
import NormalInput from "~/app/_components/Input/NormalInput";
import PasswordInput from "~/app/_components/Input/PasswordInput";

const Page = () => {

    return (
        <div>
            <div className="relative z-[300]">
                <div className="fixed inset-0 overflow-scroll bg-overlay transition-colors duration-250 ease-out">
                    <div
                        className="relative inset-0 border border-gray-300 bg-white overflow-auto rounded-md w-[752px] h-auto mx-auto mt-[70px] p-[5.5rem] px-[7rem]"
                        style={{ animation: 'zoomIn .25s ease-out' }}
                    >
                        <Link href={"/#"}>
                            <div role="button" className="absolute right-6 top-6 cursor-pointer">
                                <XButton></XButton>
                            </div>
                        </Link>

                        <div className='max-w-[25.25rem] mx-auto text-center'>
                            <h1 className="text-[#2e3a4a] text-[24px] m-0 text-center">
                                <b className='font-extrabold'>Create your Flatmates account</b>
                            </h1>

                            <div className="text-[#6d7580] leading-6 text-center">
                                <div className="max-w-[25.25rem] mx-auto">
                                    <LoginButton className="bg-[#1877f2] border-[#1877f2] hover:bg-[#1158b4]" onClick={() => signIn('google', { callbackUrl: '/' })}>
                                        <span className="flex justify-center">
                                            <span className="mr-1 flex justify-center items-center">
                                                <svg width="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="#fff" d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
                                                </svg>
                                            </span>
                                            <span className="text-white ml-1 text-[16px] font-semibold">Sign in with Facebook</span>
                                        </span>
                                    </LoginButton>

                                    <LoginButton className="bg-[#000] border-[#000] mt-[16px]">
                                        <span className="text-white text-[16px] font-semibold">Sign in with Apple</span>
                                    </LoginButton>
                                </div>
                            </div>

                            <div className="flex items-center justify-center text-[#6d7580] font-bold mt-4">
                                <span className="bg-[#d5d7db] block h-px mr-3 w-full"></span>
                                <span>or</span>
                                <span className="bg-[#d5d7db] block h-px ml-3 w-full"></span>
                            </div>

                            <form action="" className="flex flex-col mt-4">
                                <div className="text-left relative">
                                    <div className='mb-1'>
                                        <div className='mb-4'>
                                            <NormalInput placeholder="First name"></NormalInput>
                                        </div>

                                        <div className='mb-4'>
                                            <NormalInput placeholder="Email"></NormalInput>
                                        </div>

                                        <div className='relative mb-4'>
                                            <NormalInput placeholder="Password"></NormalInput>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="flex justify-center mt-4 text-[#6d7580] leading-6 text-center">
                                <a href="#" className="float-right mb-4 text-link-primary text-[1rem] leading-[1.5rem] font-normal">
                                    <p className="text-link-primary text-[1rem] leading-[1.5rem] font-semibold m-0">
                                        Forgot your password?
                                    </p>
                                </a>
                            </div>

                            <div className="mt-4 w-full transition duration-250">
                                <LoginButton className="bg-[#058a8a] border-[#058a8a] hover:bg-[#0aabab]">
                                    <span className="text-white text-[16px] font-semibold">Create account</span>
                                </LoginButton>
                            </div>

                            <div>
                                <p className="text-text-secondary text-[0.875rem] leading-[1.25rem] font-normal my-8">
                                    {"By using this website you are agreeing to our "}
                                    <a href="https://www.realestate.com.au/legal/privacy-policy" className='underline'>
                                        <b>
                                            {"Personal Information Collection Statement, Terms & Conditions and Privacy Policy."}
                                        </b>
                                    </a>
                                </p>
                            </div>

                            <div className="flex justify-center mt-4">
                                <span className="text-[#6d7580] leading-6 text-center mr-1">
                                    {"Already have an account?"}
                                </span>
                                <a href="/login" className="float-right mb-4 text-link-primary text-[1rem] leading-[1.5rem] font-normal">
                                    <p className="text-link-primary text-[1rem] leading-[1.5rem] font-semibold m-0">
                                        {"Login here"}
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;