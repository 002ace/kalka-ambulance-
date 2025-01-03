



import minicar from '@/app/image/miniambulance.png'; // Ambulance image
import circle from '@/app/image/minicircle.png'; // Circle background
import React from 'react';
import Image from 'next/image';

const Card = ({ title, subtitle }) => {
  return (

    <div  className='flex flex-col  gap-y-5'>

     <div
      className="
        flex flex-col items-center
        w-[90%] sm:w-[320px] lg:w-[338px]
        min-h-[300px] sm:min-h-[350px] lg:min-h-[400px]
        bg-white
        mt-4 sm:mt-6
        rounded-2xl sm:rounded-[30px]
        shadow-xl
        px-4 sm:px-6 lg:px-[26px]
        py-6 sm:py-8 lg:py-[50px]
        gap-2 sm:gap-3 lg:gap-[10px]
        text-center
        mx-auto
      "
    >
      {/* Circle with Ambulance */}
      <div className="relative w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
        <Image src={circle} alt="circle" className="absolute w-full h-full" />
        <Image src={minicar} alt="ambulance" className="relative w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14" />
      </div>

      {/* Title and Subtitle */}
      <div>
        <p className="text-lg sm:text-xl font-bold text-[#2B3765]">{title}</p>
        <p className="text-xs sm:text-sm text-gray-600">({subtitle})</p>
      </div>

      {/* Description */}
      <div className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 lg:mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </div>
     </div>

     <div  className='flex    justify-center  md:hidden  lg:hidden '>

       <button className="bg-[#121E52] text-white px-6 py-2  rounded-full font-medium hover:bg-[#0F172A] w-fit  items-center  flex justify-center">
          View Details
        </button>

      </div>


    </div>

    
  );
};

export default Card;
