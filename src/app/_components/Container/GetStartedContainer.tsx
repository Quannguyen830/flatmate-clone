import React from "react";
import BlackButton from "../Button/BlackButton";

const GetStartedContainer = () => {
    return (
        <div className="flex p- w-full justify-center flex-row gap-5">
            <h4 className="inline-block w-auto text-[#2f3a4a] text-[1rem] font-semibold leading-[2rem] mb-0 align-middle">
                {"Get started with a FREE listing"}
            </h4>

            <div className="flex gap-2 justify-center">
                <BlackButton>
                    Find people
                </BlackButton>

                <BlackButton>
                    Find homes
                </BlackButton>
            </div>
        </div>
    )
}

export default GetStartedContainer;