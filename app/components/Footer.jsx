





import bgimage from "@/app/image/bgimage.png";
import Image from "next/image";
import logo from "@/app/image/connectlogo.png"
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="relative bg-dark-blue text-white">
      {/* Background image */}
      <Image
        src={bgimage}
        alt="Background"
        className="sm:w-full    h-96 "
      />

      {/* Footer Content */}
      <div className="absolute inset-0 px-8 py-12 md:px-20 lg:px-40  mt-12">

        <div  className="flex justify-between">
        <div className="grid grid-cols-3 sm:gap-x-24  gap-x-14">
          {/* About Section */}
          <div>
             <p  className="font-poppins text-[12px] font-medium leading-[17.4px] text-[#FFFFFF] sm:text-[25px] sm:font-semibold sm:leading-[36.25px] mb-4 ">About</p>
            <ul className="space-y-2">
              <li  className="font-poppins text-[12px] font-normal leading-[17.4px] text-[#FFFFFF] sm:text-[20px] sm:font-medium sm:leading-[29px]">About Us</li>
              <li  className="font-poppins text-[12px] font-normal leading-[17.4px] text-[#FFFFFF] sm:text-[20px] sm:font-medium sm:leading-[29px]">Blog</li>
              <li  className="font-poppins text-[12px] font-normal leading-[17.4px] text-[#FFFFFF] sm:text-[20px] sm:font-medium sm:leading-[29px]">Contact Us</li>
              <li   className="font-poppins text-[12px] font-normal leading-[17.4px] text-[#FFFFFF] sm:text-[20px] sm:font-medium sm:leading-[29px]">Media</li>
            </ul>
          </div>

          {/* Join Us Section */}
          <div>
            <p className="font-poppins text-[12px] font-medium leading-[17.4px] text-[#FFFFFF] sm:text-[25px] sm:font-semibold sm:leading-[36.25px] mb-4">Join Us</p>
            <ul className="space-y-2">
              <li  className="font-poppins text-[12px] font-normal leading-[17.4px] text-[#FFFFFF] sm:text-[20px] sm:font-medium sm:leading-[29px]">Join Us</li>
              <li   className="font-poppins text-[12px] font-normal leading-[17.4px] text-[#FFFFFF] sm:text-[20px] sm:font-medium sm:leading-[29px]">Privacy Policy</li>
              <li    className="font-poppins text-[12px] font-normal leading-[17.4px] text-[#FFFFFF] sm:text-[20px] sm:font-medium sm:leading-[29px]">Refund Policy</li>
              <li   className="font-poppins text-[12px] font-normal leading-[17.4px] text-[#FFFFFF] sm:text-[20px] sm:font-medium sm:leading-[29px]">Cancellation Policy</li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <p className="font-poppins text-[12px] font-medium leading-[17.4px] text-[#FFFFFF] sm:text-[25px] sm:font-semibold sm:leading-[36.25px] mb-4">Help</p>
            <ul className="space-y-2">
              <li   className="font-poppins text-[12px] font-normal leading-[17.4px] text-[#FFFFFF] sm:text-[20px] sm:font-medium sm:leading-[29px]">Contact Us</li>
              <li   className="font-poppins text-[12px] font-normal leading-[17.4px] text-[#FFFFFF] sm:text-[20px] sm:font-medium sm:leading-[29px]">FAQs</li>
              <li   className="font-poppins text-[12px] font-normal leading-[17.4px] text-[#FFFFFF] sm:text-[20px] sm:font-medium sm:leading-[29px]">Accessibility</li>
            </ul>
          </div>
        </div>

        <div className="md:flex  flex-col  gap-y-3  hidden  ">

          <Image  src={logo} alt="logo" className="filter brightness-0 invert" />
          <div className="flex items-center space-x-6">
            <Facebook className="w-6 h-6 cursor-pointer hover:text-blue-600" />
            <Instagram className="w-6 h-6 cursor-pointer " />
            <Twitter className="w-6 h-6 cursor-pointer " />
            <Youtube className="w-6 h-6 cursor-pointer " />
          </div>

         
        </div>
        </div>
        

        {/* Social Media and Logo */}
        

        
     
      </div>
      {/* Bottom Links */}
      {/* <div className=" h-20 flex items-center    " >

            <div className="flex  justify-evenly  items-center" >

                <p  className = "font-poppins  text-[#121E52] text-base sm:text-[16px] sm:font-normal sm:leading-[23.2px]  text-[8px] leading-[11px]   text-center">© 2022 Connect, All rights reserved</p>

                <div  className="flex   space-x-2">
                    <p className = "font-poppins  text-[#121E52] text-base sm:text-[16px] sm:font-normal sm:leading-[23.2px]  text-[8px] leading-[11px]   text-center"> Term of  services</p>
                    <p  className = "font-poppins  text-[#121E52] text-base sm:text-[16px] sm:font-normal sm:leading-[23.2px]  text-[8px] leading-[11px]   text-center">Privacy Policy</p>
                </div>

            </div>

        
          
        </div> */}

<div className="h-12 sm:h-20 flex items-center justify-around  ">
        <p className="font-poppins  text-[#121E52] text-base sm:text-[16px] sm:font-normal sm:leading-[23.2px]  text-[8px] leading-[11px]   text-center">© 2022 Connect, All rights reserved</p>
        <div className="md:flex  hidden space-x-4">
          <p className="font-poppins  text-[#121E52] text-base sm:text-[16px] sm:font-normal sm:leading-[23.2px]  text-[8px] leading-[11px]   text-center">Terms of Service</p>
          <p className="font-poppins  text-[#121E52] text-base sm:text-[16px] sm:font-normal sm:leading-[23.2px]  text-[8px] leading-[11px]   text-center">Privacy Policy</p>
        </div>
      </div>

        
    </div>
  );
};

export default Footer;