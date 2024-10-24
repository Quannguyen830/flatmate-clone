import React from "react";
import { ItemProps } from "../Item/BreadcrumbsItem";

const ImageBox: React.FC<ItemProps> = ({ className, children, srcset }) => {
    return (
        <picture>
            <source
                srcSet={srcset}
                type="image/webp"
            />
            <img
                className='absolute w-full h-full object-cover'
                src={srcset}
                alt="Description of the image"
                loading="lazy"
            />
        </picture>
    )
}

export default ImageBox;