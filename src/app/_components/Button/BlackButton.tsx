import React from "react";
import { string } from "zod";
import { ButtonProps } from "./LoginButton";
import Link from "next/link";

const BlackButton: React.FC<ButtonProps> = ({ children, className, value, onClick }) => {
    return (
        <Link href="#" className="bg-[#2f3a4a] border border-[#2f3a4a] text-white flex text-center justify-center items-center 
        min-h-[2rem] min-w-[2rem] px-4 py-[0.375rem] rounded-md cursor-pointer transition-colors duration-200">
            <span className="text-[0.875rem] leading-[1.25rem] tracking-[0.0125rem] font-semibold">
                {children}
            </span>
        </Link>
    )
}

export default BlackButton;