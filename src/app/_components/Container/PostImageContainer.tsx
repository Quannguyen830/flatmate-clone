import React from 'react';
import StarIcon from '../Logo/StarLogo';
import RightNextButton from '../Button/RightNextButton';

const PostImageContainer = () => {
    return (
        <div className="rounded-[12px] overflow-hidden w-full z-10 h-[310px] relative">
            <a href='#' className="cursor-pointer block h-full">
                <div className="h-full relative">
                    <div className="h-full relative w-auto">
                        <ul className="h-full">
                            <li className="scroll-snap-stop scroll-snap-align-start relative overflow-hidden h-full min-w-full bg-[#f4f5f5] list-item list-none leading-0">
                                <picture>
                                    <source
                                        srcSet="https://flatmates-res.cloudinary.com/image/upload/c_fill,dpr_2.0,f_auto,h_342,q_auto,w_414/v1/user_property/xksykomu3zvqmr8dt7p7"
                                        type="image/webp"
                                    />
                                    <img
                                        className='absolute inset-0 w-full h-full object-cover'
                                        src="https://flatmates-res.cloudinary.com/image/upload/c_fill,dpr_2.0,f_auto,h_342,q_auto,w_414/v1/user_property/xksykomu3zvqmr8dt7p7"
                                        alt="Description of the image"
                                        loading="lazy"
                                    />
                                </picture>
                            </li>
                            <li className="scroll-snap-stop scroll-snap-align-start relative overflow-hidden h-full min-w-full bg-[var(--ck-backgroundSecondaryBase)] list-item list-none leading-0">
                                <picture>
                                    <source
                                        srcSet="https://flatmates-res.cloudinary.com/image/upload/c_fill,dpr_2.0,f_auto,h_342,q_auto,w_414/v1/user_property/xksykomu3zvqmr8dt7p7"
                                        type="image/webp"
                                    />
                                    <img
                                        src="https://flatmates-res.cloudinary.com/image/upload/c_fill,dpr_2.0,f_auto,h_342,q_auto,w_414/v1/user_property/xksykomu3zvqmr8dt7p7"
                                        alt="Description of the image"
                                        loading="lazy"
                                    />
                                </picture>
                            </li>
                            <li className="scroll-snap-stop scroll-snap-align-start relative overflow-hidden h-full min-w-full bg-[var(--ck-backgroundSecondaryBase)] list-item list-none leading-0">
                                <picture>
                                    <source
                                        srcSet="https://flatmates-res.cloudinary.com/image/upload/c_fill,dpr_2.0,f_auto,h_342,q_auto,w_414/v1/user_property/xksykomu3zvqmr8dt7p7"
                                        type="image/webp"
                                    />
                                    <img
                                        src="https://flatmates-res.cloudinary.com/image/upload/c_fill,dpr_2.0,f_auto,h_342,q_auto,w_414/v1/user_property/xksykomu3zvqmr8dt7p7"
                                        alt="Description of the image"
                                        loading="lazy"
                                    />
                                </picture>
                            </li>
                            <li className="scroll-snap-stop scroll-snap-align-start relative overflow-hidden h-full min-w-full bg-[var(--ck-backgroundSecondaryBase)] list-item list-none leading-0">
                                <picture>
                                    <source
                                        srcSet="https://flatmates-res.cloudinary.com/image/upload/c_fill,dpr_2.0,f_auto,h_342,q_auto,w_414/v1/user_property/xksykomu3zvqmr8dt7p7"
                                        type="image/webp"
                                    />
                                    <img
                                        src="https://flatmates-res.cloudinary.com/image/upload/c_fill,dpr_2.0,f_auto,h_342,q_auto,w_414/v1/user_property/xksykomu3zvqmr8dt7p7"
                                        alt="Description of the image"
                                        loading="lazy"
                                    />
                                </picture>
                            </li>
                        </ul>

                        <div className="absolute top-2 right-2 px-2 py-1 bg-[#59616e] rounded-full text-[#fff] text-[0.75rem] leading-[1rem] tracking-[0.0125rem] font-medium">
                            {"1" + "/" + "6"}
                        </div>

                        <RightNextButton></RightNextButton>

                        <button className="hover:bg-[#fff] bg-transparent border-none rounded-full bottom-2 cursor-pointer leading-0 outline-none p-2 absolute right-2 transition-all duration-300">
                            <svg height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24"><path stroke="#fff" strokeWidth="2" fill="#2F3A4A" d="M11.254 1.523L8.46 7.238l-6.316.903c-1.118.171-1.547 1.546-.73 2.363l4.51 4.426-1.073 6.23c-.172 1.117 1.03 1.977 2.02 1.461l5.628-2.965 5.586 2.965c.988.516 2.191-.344 2.02-1.46L19.03 14.93l4.512-4.426c.816-.816.387-2.191-.73-2.363l-6.274-.903-2.836-5.715c-.473-.988-1.933-1.03-2.45 0z" opacity="0.4"></path><path fill="#fff" d="M22.813 8.14l-6.274-.902-2.836-5.715c-.473-.988-1.933-1.03-2.45 0L8.462 7.238l-6.316.903c-1.118.171-1.547 1.546-.73 2.363l4.51 4.426-1.073 6.23c-.172 1.117 1.03 1.977 2.02 1.461l5.628-2.965 5.586 2.965c.988.516 2.191-.344 2.02-1.46L19.03 14.93l4.512-4.426c.816-.816.387-2.191-.73-2.363zm-5.286 6.274l1.203 6.961-6.23-3.266-6.273 3.266 1.203-6.96-5.07-4.9 7.003-1.03 3.137-6.36 3.094 6.36 7.004 1.03-5.07 4.9z"></path></svg>
                        </button>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default PostImageContainer;
