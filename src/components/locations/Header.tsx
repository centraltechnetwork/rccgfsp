import React from 'react';

const Header = () => {
  return (
    <header className='location-header-bg px-primary h-auto min-h-[310px] md:min-h-[460px] lg:min-h-screen flex flex-col items-center justify-center text-center gap-3 text-white bg-contain bg-no-repeat bg-top md:bg-center w-full'>
      <h1 className='font-secondary font-bold text-2xl md:text-[32px] lg:text-[40px]'>
        Find the House fellowship centres Closest to you
      </h1>
      <p className='font-normal text-lg md:text-xl lg:text-2xl'>
        We look forward to worshipping with you
      </p>
    </header>
  );
};

export default Header;
