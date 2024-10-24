import React from "react";
import FeatureItem from "../Item/FeatureItem";

export interface FeatureProps {
    bed?: string,
    bathroom?: string,
    people?: string,
    description?: string
}

const FeatureContainer: React.FC<FeatureProps> = ({bed, bathroom, people, description}) => {
    return (
        <div className="flex items-center flex-row">
            <div className="flex justify-center items-center pr-3">
                <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" stroke="#6D7580" strokeLinecap="round" strokeLinejoin="round" d="M15 10H1v-.107C1 8.354 2.41 7 4.148 7h7.704C13.591 7 15 8.354 15 9.893V10zM4 7V5.823C4 5.266 4.325 5 4.798 5c.577 0 .283 0 1.345.033.465.015.857.28.857.83V7H4zm5 0V5.823C9 5.266 9.325 5 9.798 5c.577 0 .283 0 1.345.033.465.015.857.28.857.83V7H9zm-8 6h14v-3H1v3zm1-5.5V2h12v5.5M1 12.078v2m14-2v2"></path></svg>
                </span>
                <p className="text-[1rem] text-[#6d7580] table-cell m-0 pl-[6px] align-middle">{bed}</p>
            </div>
            <div className="flex justify-center items-center pr-3">
                <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" stroke="#6D7580" strokeLinecap="round" strokeLinejoin="round" d="M10 6s-.299-2-2.182-2S6 6 6 6h4zM8.042 4c0-2-.847-3-2.542-3C3.833 1 3 2 3 4v5.474M14 10v1.013C14 12.99 12.485 14 10.595 14h-5.14C3.566 14 2 13.029 2 11.013V10m1 3.26L2 15m11-1.74L14 15M1 10h14"></path></svg>
                </span>
                <p className="text-[1rem] text-[#6d7580] table-cell m-0 pl-[6px] align-middle">{bathroom}</p>
            </div>
            <div className="flex justify-center items-center">
                <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="#6D7580" strokeLinecap="round" strokeLinejoin="round" d="M14 6.213V15H2V6.213l.015-.159L8 1l5.981 5.054.019.159z" clipRule="evenodd"></path><path stroke="#6D7580" strokeLinecap="round" strokeLinejoin="round" d="M12.003 12.001v-.3s-.075-.226-.185-.268C10.53 10.935 9.1 10.317 8.98 9.93v-.403c.268-.274.478-.655.602-1.102a.655.655 0 00.127-.95v-.904C9.71 5.64 9.19 5 8 5c-1.158 0-1.71.639-1.71 1.572v.905a.656.656 0 00.128.95c.124.446.335.827.602 1.1v.404c-.12.385-1.545 1.004-2.833 1.502a.287.287 0 00-.182.268v.3"></path></svg>                
                    </span>
                <p className="text-[1rem] text-[#6d7580] table-cell m-0 pl-[6px] align-middle">{people}</p>
            </div>

            <span className="text-[1rem] my-0 mx-[0.75rem] text-[#6d7580]">•</span>

            <p className="text-[1rem] text-[#6d7580] m-0 overflow-hidden p-0">
                {description}
            </p>
        </div>
    )
}

export default FeatureContainer;