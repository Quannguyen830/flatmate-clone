import React from 'react';
import CtaBox from '../Box/CtaBox';
import FeedImageContainer from './PostImageContainer';
import PostBox from '../Box/PostBox';
import { ItemProps } from '../Item/BreadcrumbsItem';

interface Item {
    id: number;
    content: React.ReactNode;
}

const items: Item[] = [
    {
        id: 1,
        content: (<PostBox></PostBox>),
    },
    {
        id: 2,
        content: (<PostBox></PostBox>),
    },
    {
        id: 3,
        content: (<PostBox></PostBox>),
    },
];

const PostContainer: React.FC<ItemProps> = ({className, children}) => {
    return (
        <div className={`pt-0 mx-auto max-w-[1200px] pb-[4rem] flex flex-wrap ${className}`}>
            <div className=''>
                {items.map((item, index) => {
                    let columnStyle = '';
                    switch (index % 3) {
                        case 0:
                            columnStyle = 'mr-[2.35%]';
                            break;
                        case 1:
                            columnStyle = 'mr-[2.35%]';
                            break;
                        case 2:
                            columnStyle = '';
                            break;
                        default:
                            columnStyle = '';
                    }

                    return (
                        <div key={item.id} className={`float-left block w-[31.76%] ${columnStyle}`}>
                            {item.content}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default PostContainer;