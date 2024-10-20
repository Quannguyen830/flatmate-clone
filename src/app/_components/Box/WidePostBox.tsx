import React from "react";
import { ItemProps } from "../Item/BreadcrumbsItem";
import PostImageContainer from "../Container/PostImageContainer";
import FeatureContainer from "../Container/FeatureContainer";

const WidePostBox: React.FC<ItemProps> = ({ className, children }) => {
    return (
        <div className={`shadow-[0_0_8px_rgba(0,0,0,0.16)] mx-auto mb-8 max-w-full w-full rounded-[12px] overflow-hidden relative z-10 ${className}`}>
            <PostImageContainer></PostImageContainer>

            <a href="/property" className="px-6 pt-4 pb-6 h-full bg-white cursor-pointer block relative">
                <div className="shadow-none bg-white p-0 relative">
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

                    <div className="flex items-center flex-row">
                        <div className="flex justify-center items-center pr-3">
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" stroke="#6D7580" strokeLinecap="round" strokeLinejoin="round" d="M15 10H1v-.107C1 8.354 2.41 7 4.148 7h7.704C13.591 7 15 8.354 15 9.893V10zM4 7V5.823C4 5.266 4.325 5 4.798 5c.577 0 .283 0 1.345.033.465.015.857.28.857.83V7H4zm5 0V5.823C9 5.266 9.325 5 9.798 5c.577 0 .283 0 1.345.033.465.015.857.28.857.83V7H9zm-8 6h14v-3H1v3zm1-5.5V2h12v5.5M1 12.078v2m14-2v2"></path></svg>
                            </span>
                            <p className="text-[1rem] leading-normal text-[#6d7580] table-cell m-0 pl-[6px] align-middle">2</p>
                        </div>
                        <div className="flex justify-center items-center pr-3">
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" stroke="#6D7580" strokeLinecap="round" strokeLinejoin="round" d="M15 10H1v-.107C1 8.354 2.41 7 4.148 7h7.704C13.591 7 15 8.354 15 9.893V10zM4 7V5.823C4 5.266 4.325 5 4.798 5c.577 0 .283 0 1.345.033.465.015.857.28.857.83V7H4zm5 0V5.823C9 5.266 9.325 5 9.798 5c.577 0 .283 0 1.345.033.465.015.857.28.857.83V7H9zm-8 6h14v-3H1v3zm1-5.5V2h12v5.5M1 12.078v2m14-2v2"></path></svg>
                            </span>
                            <p className="text-[1rem] leading-normal text-[#6d7580] table-cell m-0 pl-[6px] align-middle">2</p>
                        </div>
                        <div className="flex justify-center items-center pr-3">
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" stroke="#6D7580" strokeLinecap="round" strokeLinejoin="round" d="M15 10H1v-.107C1 8.354 2.41 7 4.148 7h7.704C13.591 7 15 8.354 15 9.893V10zM4 7V5.823C4 5.266 4.325 5 4.798 5c.577 0 .283 0 1.345.033.465.015.857.28.857.83V7H4zm5 0V5.823C9 5.266 9.325 5 9.798 5c.577 0 .283 0 1.345.033.465.015.857.28.857.83V7H9zm-8 6h14v-3H1v3zm1-5.5V2h12v5.5M1 12.078v2m14-2v2"></path></svg>
                            </span>
                            <p className="text-[1rem] leading-normal text-[#6d7580] table-cell m-0 pl-[6px] align-middle">2</p>
                        </div>

                        <span className="text-[1rem] leading-normal m-0 mx-[0.75rem] text-[#6d7580]">.</span>

                        <p className="text-[1rem] leading-normal text-[#6d7580] m-0 overflow-hidden p-0">
                            1 Room in Flatshare
                        </p>
                    </div>

                    <p className="text-[0.875rem] leading-[20px] text-[#6d7580] mt-[0.75rem]">
                        Available now
                    </p>
                </div>
            </a>
        </div>
    )
}

export default WidePostBox;