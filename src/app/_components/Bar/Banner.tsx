import React from 'react';

const Banner = () => {
  return (
    <div className="h-[48px] bg-banner-blue text-white" >
      <div className="p-3 text-center flex justify-center items-center" >
        <h1 className="inline-block text-[0.875rem] font-semibold font-sans m-0">Australia biggest share accommodation website</h1>
        <a href="#" className="underline hover:text-gray-400 text-sm leading-5 font-semibold">
            <span className="ml-1 inline">Learn more</span>
          </a>
      </div>
    </div>
  );
}

export default Banner; 