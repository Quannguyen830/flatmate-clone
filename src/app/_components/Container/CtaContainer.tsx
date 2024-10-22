import React from 'react';
import CtaBox from '../Box/CtaBox';

const CtaContainer = () => {
    return (
        <div className="flex flex-row space-between my-8 mx-auto max-w-[1200px]">
            <CtaBox className='mr-8' backgroundImage='url(https://flatmates-res.cloudinary.com/image/upload/dpr_2.0,f_auto,q_auto/v1624431481/flatmates_design/homepage-desktop-bed)'></CtaBox>
            <CtaBox className='' backgroundImage='url(https://flatmates-res.cloudinary.com/image/upload/dpr_2.0,f_auto,q_auto/v1624430583/flatmates_design/homepage-desktop-woman)'></CtaBox>
        </div>
    );
}

export default CtaContainer;