import React from 'react';
import FeedImageContainer from '../Container/WidePostImageContainer';
import { ItemProps } from '../Item/BreadcrumbsItem';
import PostImageContainer from '../Container/PostImageContainer';
import Link from 'next/link';
import FeatureContainer from '../Container/FeatureContainer';

interface PostProps {
    location: string,
    price: string,
    timeForAvailable: string,
    description: string,
    imagesLength: number,
    images: string[],
    features: string[],
    link: string,
    className?: string
}

const PostBox: React.FC<PostProps> = ({ className, location, price, timeForAvailable, description, imagesLength, images, features, link }) => {
    return (
        <div className={`mx-auto mb-4 rounded-[12px] ${className}`}>
            <PostImageContainer imageLength={imagesLength} imagesList={images}></PostImageContainer>

            <Link href="/property" className="py-4 h-full bg-white block">
                <div className="p-0">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-[1.125rem] font-bold leading-[22px] text-[#2f3a4a]">
                            {price}
                        </p>
                        <div className="flex items-center border border-[#2f3a4a] h-[20px] ml-4">
                            <p className="text-[#2f3a4a] text-[0.75rem] font-semibold leading-[20px] m-0 px-2">
                                Free to message
                            </p>
                        </div>
                    </div>
                    <p className="text-[#6d7580] text-[0.875rem] leading-[20px] m-0 pb-1">
                        {location}
                    </p>

                    <FeatureContainer
                        bed={features[0]}
                        bathroom={features[1]}
                        people={features[2]}
                        description={description}
                    >

                    </FeatureContainer>

                    <p className="text-[0.875rem] leading-[20px] text-[#6d7580] mt-[0.75rem]">
                        {timeForAvailable}
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default PostBox;