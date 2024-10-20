import React from 'react';
import CtaBox from '../Box/CtaBox';
import FeedImageContainer from './PostImageContainer';
import PostBox from '../Box/PostBox';

interface Item {
    id: number;
    content: React.ReactNode; // Change content to ReactNode
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

const PostContainer = () => {
    return (
        <div className="pt-0 mx-auto max-w-[1200px] pb-[4rem] flex flew-wrap">
            <div className=''>
                {items.map((item, index) => {
                    let columnStyle = '';
                    switch (index % 3) {
                        case 0:
                            columnStyle = '';
                            break;
                        case 1:
                            columnStyle = '';
                            break;
                        case 2:
                            columnStyle = 'mr-0';
                            break;
                        default:
                            columnStyle = '';
                    }

                    return (
                        <div key={item.id} className={`float-left block mr-[2.35%] w-[31.76%] mb-4 ${columnStyle}`}>
                            {item.content}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default PostContainer;