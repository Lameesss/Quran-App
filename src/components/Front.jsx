import React from 'react';

const Front = () => {
  return (
    <div className='relative w-full h-[500px] text-white'>
      <div className='absolute w-full h-full z-10'>
        <div className='absolute w-full h-full bg-white z-0'></div>
        <img
          className='w-full h-full object-cover'
          src={``}
          alt=''
        />
        <div className='absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center p-4 md:p-8 z-20'>
          {/* Centered image */}
          <img
            className='w-auto mt-20 sm:mt-40 md:mt-80 h-auto max-w-[90%] sm:max-w-[80%] md:max-w-[200%] max-h-[60%] sm:max-h-[80%] md:max-h-[120%]'
            src="https://www.shutterstock.com/image-vector/holy-quran-islamic-book-calligraphy-600nw-281022530.jpg"
            alt="quran.img"
          />
          <div className='my-4'>
            {/* Additional content */}
          </div>
          <p className='text-gray-400 text-xs sm:text-sm'>
            {/* Additional text */}
          </p>
          <p className='w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
            {/* Additional text */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Front;
