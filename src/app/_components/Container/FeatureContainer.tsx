import React from "react";
import FeatureItem from "../Item/FeatureItem";

const FeatureContainer = () => {
    return (
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
    )
}

export default FeatureContainer;