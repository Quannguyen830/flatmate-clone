import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import React from "react";

export interface IconProps {
    className?: string
}

const FacebookIcon: React.FC<IconProps> = ({className}) => {
    return (
        <span className={`w-7 h-7 ${className}`}>
            <svg width="29" height="29" viewBox="0 0 29 29">
                <path fill="#FFF" fillRule="evenodd" d="M14.498 0C6.505 0 0 6.506 0 14.499 0 22.495 6.505 29 14.498 29 22.494 29 29 22.495 29 14.499 29 6.506 22.494 0 14.498 0zm3.608 15.01h-2.359v8.41h-3.496v-8.41H10.59v-2.972h1.662v-1.922c0-1.375.653-3.528 3.528-3.528l2.59.011v2.884h-1.88c-.308 0-.742.154-.742.81v1.748h2.664l-.305 2.968z"></path>
            </svg>
        </span>
    )
}

export default FacebookIcon;