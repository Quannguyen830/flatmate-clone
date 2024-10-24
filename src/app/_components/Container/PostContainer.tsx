import React from 'react';
import CtaBox from '../Box/CtaBox';
import FeedImageContainer from './WidePostImageContainer';
import PostBox from '../Box/PostBox';
import { ItemProps } from '../Item/BreadcrumbsItem';

export interface PropertyItem {
    id: number | string;
    content: React.ReactNode;
}

interface PostContainerProps extends ItemProps {
    items: PropertyItem[]; 
}

const PostContainer: React.FC<PostContainerProps> = ({className, children, items}) => {
    return (
        <div className={`pt-0 mx-auto max-w-[1200px] flex flex-wrap ${className}`}>
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