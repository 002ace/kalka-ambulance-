
import React from 'react'
import Image from 'next/image'
import circle2 from  '@/app/image/Rectangle.png'
import circle1  from  '@/app/image/Rectangle8.png'
import line1  from  '@/app/image/Vector 1.png'
import  Eclipse  from  '@/app/image/Ellipse.png'
import ambulance from '@/app/image/Ambulancee.png'
import { Phone } from 'lucide-react';
import TypesOfAmbulance from './TypesOfAmbulance'


const Ambulance = () => {
  return (

    
    <div>
            <div className="w-full px-4 md:w-11/12 lg:w-11/12 mx-auto flex flex-col space-y-6 md:flex-row lg:flex-row md:justify-between lg:justify-between">
      {/* Left Content */}
      <div className="flex flex-col space-y-4 ml-5 sm:ml-7 md:mt-5 lg:mt-5 md:ml-7 lg:ml-7">
        <p className="font-poppins text-[40px] md:text-[55px] lg:text-[55px] font-medium leading-tight md:leading-[79.75px] lg:leading-[79.75px] text-[#2B3765]">
          Ready to serve
        </p>
        <p className="font-poppins text-xl md:text-[25px] lg:text-[25px] font-medium leading-normal md:leading-[36.25px] lg:leading-[36.25px] text-[#6E7CB0]">
          Anytime and Anywhere
        </p>
        <button className="bg-[#121E52] text-white px-6 py-2 rounded-full font-medium hover:bg-[#0F172A] w-fit">
          Contact Now
        </button>
      </div>

      {/* Right Content - Ambulance Section */}
      <div className="relative w-full h-[350px] md:w-[426px] lg:w-[426px] md:h-[441px] lg:h-[441px] md:mr-4 lg:mr-4">
        {/* Big Circle */}
        <Image 
          src={circle1} 
          alt="big" 
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* Small Circle */}
        <Image 
          src={circle2} 
          alt="small" 
          className="absolute inset-0 w-[70%] h-[70%] top-[15%] left-[15%] object-contain"
        />

        {/* Wave Lines - Responsive on all screens */}
        <Image
          src={line1}
          alt="line"
          className="absolute inset-0 m-auto top-[12%] transform -translate-x-[100%] -translate-y-1/2 w-[25%] sm:w-[20%] md:w-auto lg:w-auto scale-75 md:scale-100 lg:scale-100"
        />
        <Image
          src={line1}
          alt="line"
          className="absolute inset-0 m-auto top-[12%] transform translate-x-[30%] -translate-y-1/2 w-[25%] sm:w-[20%] md:w-auto lg:w-auto scale-75 md:scale-100 lg:scale-100"
        />

        {/* Ambulance Image */}
        <Image
          src={ambulance}
          alt="ambulance"
          className="absolute inset-0 m-auto top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10 w-[85%] md:w-auto lg:w-auto"
        />

        {/* Shadow */}
        <Image
          src={Eclipse}
          alt="shadow"
          className="absolute inset-0 m-auto top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2   w-[80%] sm:w-[70%]   object-contain "
          //  className="absolute inset-0 m-auto top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] object-contain"
        />

        {/* Phone Number - Responsive container */}
        <div className="absolute transform translate-x-[20%] sm:translate-x-[25%] md:translate-x-[35%] lg:translate-x-[35%] bottom-8 sm:bottom-10 md:bottom-12 lg:bottom-12 right-4 bg-white rounded-full px-2 sm:px-3 md:px-4 lg:px-4 py-1 sm:py-2 shadow-lg scale-90 sm:scale-95 md:scale-100 lg:scale-100">
          <div className="bg-[#F0F3FF] flex items-center rounded-full px-2 sm:px-3 md:px-4 lg:px-4 py-2 sm:py-2 md:py-3 lg:py-3 gap-1 sm:gap-2">
            <Phone className="w-4 sm:w-4 md:w-5 lg:w-5 h-4 sm:h-4 md:h-5 lg:h-5 text-[#121E52]" />
            <span className="text-[#121E52] font-medium text-xs sm:text-sm md:text-base lg:text-base whitespace-nowrap">
              1800 270 911 911
            </span>
          </div>
        </div>

        
        
      </div>
            </div>

            <TypesOfAmbulance/>
     </div>
  


      
      
   
    
  );
};

export default Ambulance;






