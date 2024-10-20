import React from 'react';
import CtaBox from '../Box/CtaBox';

const CtaContainer = () => {
    return (
        <div className="flex flex-row space-between my-8 mx-auto max-w-[1200px]">
            <CtaBox className='mr-8'></CtaBox>
            <CtaBox className=''></CtaBox>
        </div>
    );
}

export default CtaContainer;