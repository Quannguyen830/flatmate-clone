import React from 'react';
import FeedImageContainer from '../Container/PostImageContainer';
import { ItemProps } from '../Item/BreadcrumbsItem';

const PostBox: React.FC<ItemProps> = ({ children, className }) => {
    return (
        <div className="shadow-none mx-auto mb-4 max-w-[480px] rounded-[12px] overflow-hidden relative z-10">
            <FeedImageContainer></FeedImageContainer>

            <a href="/property" className="py-4 h-full bg-white cursor-pointer block relative">
                <div className="shadow-none bg-white p-0 relative">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-[1.125rem] leading-[22px] text-[#2f3a4a] max-h-[5em]">
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
                    <div className="flex items-center flex-row text-[#6d7580] text-[0.875rem] font-normal">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, consectetur quam? Autem, tempore voluptatum repellendus aut qui voluptatibus, sunt doloribus accusantium id, cum doloremque. Voluptas, culpa. A totam qui eaque?
                    </div>
                </div>
            </a>
        </div>
    );
}

export default PostBox;
